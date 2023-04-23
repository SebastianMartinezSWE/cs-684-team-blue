import { RequestHandler } from "express";
import createHttpError from "http-errors";
import env from "../../src/util/validateEnv";

interface SearchQuery {
    q: string;
}

export const searchNews: RequestHandler<
    unknown,
    unknown,
    unknown,
    SearchQuery
> = async (req, res, next) => {
    const authenticatedUsername = req.session.username;

    const searchQuery = req.query.q;

    try {
        if (!searchQuery) {
            throw createHttpError(400, "Please provide a search query");
        }

        const response = await fetch(
            `https://newsapi.org/v2/everything?q=${searchQuery.toUpperCase()}&apiKey=${
                env.NEWSAPI_API_KEY
            }`
        );

        const requestedNews = await response.json();

        res.status(200).json(requestedNews);
    } catch (error) {
        next(error);
    }
};
