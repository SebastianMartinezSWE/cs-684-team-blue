// src/mocks/handlers.js
import { rest } from "msw";

export const handlers = [
  // Handles a GET /user request
  rest.get("/api/news/", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          source: {
            id: "cnn",
            name: "CNN",
          },
          author:
            "Oren Liebermann, Jennifer Hansler, Haley Britzky, Natasha Bertrand",
          title:
            "Russian fighter jet forces down US drone over Black Sea - CNN",
          description:
            "A Russian fighter jet forced down a US Air Force drone over the Black Sea on Tuesday after damaging the propeller of the American MQ-9 Reaper drone, according to the US military.",
          url: "https://www.cnn.com/2023/03/14/politics/us-drone-russian-jet-black-sea/index.html",
          urlToImage:
            "https://media.cnn.com/api/v1/images/stellar/prod/230314125811-file-mq-9-reaper.jpg?c=16x9&q=w_800,c_fill",
          publishedAt: "2023-03-14T20:12:00Z",
          content:
            "A Russian fighter jet forced down a US Air Force drone over the Black Sea on Tuesday after damaging the propeller of the American MQ-9 Reaper drone, according to the US military. \r\nThe Reaper drone a… [+4198 chars]",
        },
      ])
    );
  }),
];
