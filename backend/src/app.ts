import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import createHttpError, { isHttpError } from "http-errors";
import morgan from "morgan";
import usersRoutes from "./routes/users";

const app = express();

// For logging purposes
app.use(morgan("dev"));

// For express to accept and send JSON
app.use(express.json());

// All the routes pertaining to users
app.use("/api/users", usersRoutes);

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
