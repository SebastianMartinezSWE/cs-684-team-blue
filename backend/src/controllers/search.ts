import { RequestHandler } from "express";
import createHttpError from "http-errors";
import UserModel from "../models/user";
import { assertIsDefined } from "../util/assertIsDefined";
import env from "../util/validateEnv";

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
        assertIsDefined(authenticatedUsername);

        const user = await UserModel.findOne({
            username: authenticatedUsername,
        }).exec();

        if (!user) {
            throw createHttpError(404, "User not found");
        }

        if (user.username !== authenticatedUsername) {
            throw createHttpError(401, "You cannot search for articles");
        }

        if (!searchQuery) {
            throw createHttpError(400, "Please provide a search query");
        }

        const response = await fetch(
            `https://newsapi.org/v2/everything?q=${searchQuery}&pageSize=100&apiKey=${env.NEWSAPI_API_KEY}`
        );

        const requestedNews = await response.json();

        res.status(200).json(requestedNews);
    } catch (error) {
        next(error);
    }
};
