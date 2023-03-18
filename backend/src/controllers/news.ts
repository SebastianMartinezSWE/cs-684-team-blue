import { RequestHandler } from "express";
import createHttpError from "http-errors";
import env from "../../src/util/validateEnv";
import UserModel from "../models/user";

export const generalNews: RequestHandler = async (req, res, next) => {
  const user = req.params.user;
  try {
    if (user === "default") {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=${env.NEWSAPI_API_KEY}`
      );
      const requestedNews = await response.json();
      res.status(200).json(requestedNews);
    } else if (
      await UserModel.findOne({
        username: user,
      }).exec()
    ) {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=${env.NEWSAPI_API_KEY}`
      );
      const requestedNews = await response.json();
      res.status(200).json(requestedNews);
    } else {
      throw createHttpError(401, "User not authorized");
    }
  } catch (error) {
    next(error);
  }
};

// If the user id is found send the news with userId, if not userId=#
