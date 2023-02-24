import { InferSchemaType, model, Schema } from "mongoose";

const userSchema = new Schema({
  firstName: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, length: 8, required: true },
});

type User = InferSchemaType<typeof userSchema>;

export default model<User>("User", userSchema);
