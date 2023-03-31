import { RequestHandler } from "express";
import createHttpError from "http-errors";
import env from "../../src/util/validateEnv";
import UserModel from "../models/user";
import { assertIsDefined } from "../util/assertIsDefined";
import mongoose from "mongoose";

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

export const userNews: RequestHandler = async (req, res, next) => {
    const authenticatedUsername = req.session.username;
    const username = req.params.username;

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

        const response = await fetch(
            `https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=${env.NEWSAPI_API_KEY}`
        );

        const requestedNews = await response.json();

        res.status(200).json(requestedNews);
    } catch (error) {
        next(error);
    }
};
