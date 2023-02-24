import { RequestHandler } from "express";
import createHttpError from "http-errors";
import mongoose from "mongoose";
import UserModel from "../models/user";

// Get all users
export const getAllUsers: RequestHandler = async (req, res, next) => {
  try {
    const users = await UserModel.find().exec();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

// Get user by id
export const getUser: RequestHandler = async (req, res, next) => {
  const userId = req.params.userId;
  try {
    if (!mongoose.isValidObjectId(userId)) {
      throw createHttpError(400, "Invalid user id");
    }

    const user = await UserModel.findById(userId).exec();

    if (!user) {
      throw createHttpError(404, "User not found");
    }

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

interface CreateUserBody {
  firstName?: string;
  username?: string;
  password?: string;
}

// Create a user
export const createUser: RequestHandler<
  unknown,
  unknown,
  CreateUserBody,
  unknown
> = async (req, res, next) => {
  const firstName = req.body.firstName;
  const username = req.body.username;
  const password = req.body.password;

  try {
    if (!firstName || !username || !password) {
      throw createHttpError(
        400,
        "User should have include the First Name, Username and Password"
      );
    }

    const newUser = await UserModel.create({
      firstName: firstName,
      username: username,
      password: password,
    });

    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};
