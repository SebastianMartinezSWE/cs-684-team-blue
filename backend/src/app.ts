// import MongoStore from "connect-mongo";
import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
// import session from "express-session";
import createHttpError, { isHttpError } from "http-errors";
import morgan from "morgan";
import userRoutes from "./routes/users";
// import env from "./util/validateEnv";

const app = express();

// For logging purposes
app.use(morgan("dev"));

// For express to accept and send JSON
app.use(express.json());

// Session Middleware (Currently not needed)
// app.use(
//   session({
//     secret: env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//       maxAge: 60 * 60 * 1000,
//     },
//     rolling: true,
//     store: MongoStore.create({
//       mongoUrl: env.MONGO_CONNECTION_STRING,
//     }),
//   })
// );

// All the routes pertaining to users
app.use("/api/users", userRoutes);

// Error Handling Middleware
app.use((req, res, next) => {
  next(createHttpError(404, "Endpoint not Found"));
});

// Error Handler
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  console.error(error);
  let errorMessage = "An unknown error occurred";
  let statusCode = 500;
  if (isHttpError(error)) {
    statusCode = error.status;
    errorMessage = error.message;
  }
  res.status(statusCode).json({ error: errorMessage });
});

export default app;
