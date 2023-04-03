import { RequestHandler } from "express";
import createHttpError from "http-errors";
import env from "../../src/util/validateEnv";
import UserModel from "../models/user";
import { assertIsDefined } from "../util/assertIsDefined";

export const defaultNews: RequestHandler = async (req, res, next) => {
    try {
        const response = await fetch(
            `https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=${env.NEWSAPI_API_KEY}`
        );

        const requestedNews = await response.json();

        res.status(200).json(requestedNews);
    } catch (error) {
        next(error);
    }
};
interface UserNewsBody {
    general: boolean;
    business: boolean;
    entertainment: boolean;
    health: boolean;
    science: boolean;
    sports: boolean;
    technology: boolean;
}

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

export const userNews: RequestHandler<any, any, UserNewsBody, any> = async (
    req,
    res,
    next
) => {
    const authenticatedUsername = req.session.username;
    const username = req.params.username;
    const settings = req.body;
    let news: Article[] = [];
    const urls: string[] = [];
    let newsArticles: News[] = [];
    try {
        assertIsDefined(authenticatedUsername);

        const user = await UserModel.findOne({
            username: username,
        }).exec();

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
        const settingsSelected = Object.entries(settings);

        // Loops through array and appends url strings into url array
        for (const [key, value] of settingsSelected) {
            if (value === true) {
                urls.push(
                    `https://newsapi.org/v2/top-headlines?country=us&category=${key}&apiKey=${env.NEWSAPI_API_KEY}`
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

        res.status(200).json(sortedNews);
    } catch (error) {
        next(error);
    }
};
