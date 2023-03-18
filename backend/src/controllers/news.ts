import { RequestHandler } from "express";
// import createHttpError from "http-errors";
import env from "../../src/util/validateEnv";

export const generalNews: RequestHandler = async (req, res, next) => {
  // const userId = req.params.userId;
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

// If the user id is found send the news with userId, if not userId=#
