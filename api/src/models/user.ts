import { InferSchemaType, model, Schema } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    minLength: 8,
    required: true,
  },
  password: {
    type: String,
    minLength: 8,
    required: true,
  },
});

type User = InferSchemaType<typeof userSchema>;

export default model<User>("User", userSchema);
