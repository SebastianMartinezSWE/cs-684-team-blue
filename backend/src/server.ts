import "dotenv/config";
import mongoose from "mongoose";
import env from "../src/util/validateEnv";
import app from "./app";

const port = env.PORT;

// Preparing for Mongoose 7 since strictQuery will be deprecated
mongoose.set("strictQuery", false);

mongoose
    .connect(env.MONGO_CONNECTION_STRING)
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(port, () => {
            console.log("Server is running on Port: " + port);
        });
    })
    .catch(console.error);
