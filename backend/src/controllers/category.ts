import { RequestHandler } from "express";
import env from "../util/validateEnv";

interface CategoryParams {
    category: string;
}

export const categoryNews: RequestHandler<
    CategoryParams,
    unknown,
    unknown,
    unknown
> = async (req, res, next) => {
    const category = req.params.category;

    try {
        const response = await fetch(
            `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${env.NEWSAPI_API_KEY}`
        );

        const requestedNews = await response.json();

        res.status(200).json(requestedNews);
    } catch (error) {
        next(error);
    }
};
