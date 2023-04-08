import { InferSchemaType, model, Schema } from "mongoose";
import { settingsSchema } from "./settings";

const userSchema = new Schema({
    username: {
        type: String,
        minLength: 8,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        minLength: 8,
        required: true,
    },
    settings: {
        type: settingsSchema,
        default: () => ({}),
    },
});

type User = InferSchemaType<typeof userSchema>;

export default model<User>("User", userSchema);
