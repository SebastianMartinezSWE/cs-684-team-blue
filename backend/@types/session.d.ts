import mongoose from "mongoose";

declare module "express-session" {
    interface SessionData {
        username: string;
    }
}
