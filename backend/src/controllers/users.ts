import bcrypt from "bcrypt";
import { RequestHandler } from "express";
import createHttpError from "http-errors";
import UserModel from "../models/user";
// import session = require("express-session");

// To get authenticated user from session (Currently not needed)
// export const getAuthenticatedUser: RequestHandler = async (req, res, next) => {
//   const authenticatedUserId = req.session.userId;

//   try {
//     if (!authenticatedUserId) {
//       throw createHttpError(401, "User not authenticated");
//     }

//     const user = await UserModel.findById(authenticatedUserId).exec();
//     res.status(200).json(user);
//   } catch (error) {
//     next(error);
//   }
// };

// User Sign Up
interface SignUpBody {
  username?: string;
  password?: string;
  confirmPassword?: string;
}

const passwordPattern = new RegExp(
  "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"
);

export const signUp: RequestHandler<
  unknown,
  unknown,
  SignUpBody,
  unknown
> = async (req, res, next) => {
  const username = req.body.username;
  const rawPassword = req.body.password;
  const confirmPassword = req.body.confirmPassword;

  try {
    if (!username || !rawPassword) {
      throw createHttpError(
        400,
        "You have to include the Username and Password"
      );
    }

    if (username.length < 8) {
      throw createHttpError(400, "Username must be at least 8 characters");
    }

    if (rawPassword.length < 8) {
      throw createHttpError(400, "Password must be at least 8 characters");
    }

    if (!passwordPattern.test(rawPassword)) {
      throw createHttpError(
        400,
        "Password must include at least 1 captial letter, number and special character [!@#$%]"
      );
    }

    if (rawPassword !== confirmPassword) {
      throw createHttpError(400, "Passwords do not match");
    }

    const existingUsername = await UserModel.findOne({
      username: username,
    }).exec();

    if (existingUsername) {
      throw createHttpError(
        409,
        "Username already exists, please choose a different one or sign in instead"
      );
    }

    const hashedPassword = await bcrypt.hash(rawPassword, 10);

    const newUser = await UserModel.create({
      username: username,
      password: hashedPassword,
    });

    // Setting up sessions to keep user logged in (Currently not needed)
    // req.session.userId = newUser._id;

    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};

// User Sign in
interface SignInBody {
  username?: string;
  password?: string;
}

export const signIn: RequestHandler<
  unknown,
  unknown,
  SignInBody,
  unknown
> = async (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    if (!username || !password) {
      throw createHttpError(
        400,
        "You have to include the Username and Password"
      );
    }

    const user = await UserModel.findOne({
      username: username,
    }).exec();

    if (!user) {
      throw createHttpError(401, "Invalid Username or Password");
    }

    const matchedPassword = await bcrypt.compare(password, user.password);

    if (!matchedPassword) {
      throw createHttpError(401, "Invalid Username or Password");
    }

    // Setting up sessions to keep user logged in (Currently not needed)
    // req.session.userId = user._id;

    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

export const signOut: RequestHandler = async (req, res, next) => {
  const username = req.body.username;

  try {
    const user = await UserModel.findOne({
      username: username,
    }).exec();

    res.status(200).json({
      username: user?.username,
    });
  } catch (error) {
    next(error);
  }
};

// Sign out by destorying the session (Currently not needed)
// export const signOut: RequestHandler<unknown, unknown, SignInBody, unknown> = (
//   req,
//   res,
//   next
// ) => {
//   req.session.destroy((error) => {
//     if (error) {
//       next(error);
//     } else {
//       res.sendStatus(200);
//     }
//   });
// };
