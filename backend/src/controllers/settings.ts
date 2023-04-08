import { RequestHandler } from "express";
import createHttpError from "http-errors";
import mongoose from "mongoose";
import UserModel from "../models/user";
import { assertIsDefined } from "../util/assertIsDefined";

interface UpdateSettingsParams {
    username: string;
}

interface UpdateSettingsBody {
    general: boolean;
    business: boolean;
    entertainment: boolean;
    health: boolean;
    science: boolean;
    sports: boolean;
    technology: boolean;
}

export const updateSettings: RequestHandler<
    UpdateSettingsParams,
    unknown,
    UpdateSettingsBody,
    unknown
> = async (req, res, next) => {
    const authenticatedUsername = req.session.username;

    const username = req.params.username;
    const general = req.body.general;
    const business = req.body.business;
    const entertainment = req.body.entertainment;
    const health = req.body.health;
    const science = req.body.science;
    const sports = req.body.sports;
    const technology = req.body.technology;
    try {
        assertIsDefined(authenticatedUsername);

        const user = await UserModel.findOne({ username: username }).exec();

        if (!user) {
            throw createHttpError(404, "User not found");
        }

        if (user.username !== authenticatedUsername) {
            throw createHttpError(401, "You cannot modify these settings");
        }

        user.settings.general = general;
        user.settings.business = business;
        user.settings.entertainment = entertainment;
        user.settings.health = health;
        user.settings.science = science;
        user.settings.sports = sports;
        user.settings.technology = technology;

        const updatedSettings = await user.save();

        res.status(200).json(updatedSettings);
    } catch (error) {
        next(error);
    }
};
