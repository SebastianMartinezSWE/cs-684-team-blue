import { rest } from "msw";
import { articlesData } from "./articles";

export const handlers = [
  // Handles a POST /api/users/signin request
  rest.post("http://localhost:8080/api/users/signin", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        _id: "641743ceb31c26d215c25f4a",
        username: "waldotheoctopus",
        password:
          "$2b$10$8Co.OeNFwywZc4HekGfDFebkX0/3oJGnR/i/upEhtggZwYkpBZQt6",
        settings: {
          general: true,
          business: false,
          entertainment: false,
          health: false,
          science: false,
          sports: false,
          technology: false,
          _id: "641743ceb31c26d215c25f4b",
        },
        __v: 0,
      })
    );
  }),

  // Handles a GET /api/news/ request
  rest.get("http://localhost:8080/api/news/default", (req, res, ctx) => {
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
