import { RequestHandler } from "express";
import createHttpError from "http-errors";
import env from "../../src/util/validateEnv";
import UserModel from "../models/user";
import { assertIsDefined } from "../util/assertIsDefined";

export const defaultNews: RequestHandler = async (req, res, next) => {
    try {
        const response = await fetch(
            `https://newsapi.org/v2/top-headlines?country=us&category=general&pageSize=100&apiKey=${env.NEWSAPI_API_KEY}`
        );

        const requestedNews = await response.json();

        res.status(200).json(requestedNews);
    } catch (error) {
        next(error);
    }
};

interface News {
    status: string;
    totalResults: number;
    articles: Article[];
}

interface Article {
    source: Source;
    author: null | string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: Date;
    content: string;
}

interface Source {
    id: null | string;
    name: string;
}

export const userNews: RequestHandler = async (req, res, next) => {
    const authenticatedUsername = req.session.username;
    const username = req.params.username;

    let news: Article[] = [];
    const urls: string[] = [];
    let newsArticles: News[] = [];

    try {
        assertIsDefined(authenticatedUsername);

        const user = await UserModel.findOne(
            {
                username: username,
            },
            {},
            { lean: true }
        ).exec();

        if (!user) {
            throw createHttpError(404, "User not found");
        }

        if (user.username !== authenticatedUsername) {
            throw createHttpError(
                401,
                "You are not allowed to view these articles"
            );
        }

        // Converts Setting Object to an array of key value pairs
        const userSettings = Object.entries(user!.settings).slice(0, -1);

        // Loops through array and appends url strings into url array
        for (const [key, value] of userSettings) {
            if (value === true) {
                urls.push(
                    `https://newsapi.org/v2/top-headlines?country=us&category=${key}&pageSize=100&apiKey=${env.NEWSAPI_API_KEY}`
                );
            }
        }

        // Fetches the URLs and converts them into JSON then puts them into an array
        newsArticles = await Promise.all(
            urls.map(async (url) => {
                return (await fetch(url)).json();
            })
        );

        // Gets articles and puts them into news array
        for (let index = 0; index < newsArticles.length; index++) {
            const element = newsArticles[index];
            news = [...news, ...element.articles];
        }

        // Sort articles in descending order
        const sortedNews = news.sort((a, b) => {
            const dateA = new Date(a.publishedAt);
            const dateB = new Date(b.publishedAt);
            return dateB.getTime() - dateA.getTime();
        });

        // Limits number of articles to 250
        const articles = sortedNews.slice(0, 250);

        res.status(200).json({
            status: "ok",
            totalResults: articles.length,
            articles: articles,
        });
    } catch (error) {
        next(error);
    }
};
