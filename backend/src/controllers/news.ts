import { RequestHandler } from "express";
import env from "../../src/util/validateEnv";

export const generalNews: RequestHandler = async (req, res, next) => {
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
