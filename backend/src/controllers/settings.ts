import { RequestHandler } from "express";
import createHttpError from "http-errors";
import mongoose from "mongoose";
import UserModel from "../models/user";
import { assertIsDefined } from "../util/assertIsDefined";

interface UpdateSettingsParams {
    userId: string;
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
    const authenticatedUserId = req.session.userId;

    const userId = req.params.userId;
    const general = req.body.general;
    const business = req.body.business;
    const entertainment = req.body.entertainment;
    const health = req.body.health;
    const science = req.body.science;
    const sports = req.body.sports;
    const technology = req.body.technology;
    try {
        assertIsDefined(authenticatedUserId);

        if (!mongoose.isValidObjectId(userId)) {
            throw createHttpError(400, "Invalid User ID");
        }

        const user = await UserModel.findById(userId).exec();

        if (!user) {
            throw createHttpError(404, "User not found");
        }

        if (!user._id.equals(authenticatedUserId)) {
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
