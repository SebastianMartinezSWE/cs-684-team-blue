import { rest } from "msw";
import { articlesData } from "./articles";

export const handlers = [
  // Handles a GET /api/news/ request
  rest.get("/api/news/", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        status: "ok",
        totalResults: 3,
        articles: articlesData,
      })
    );
  }),
];
