import { InferSchemaType, model, Schema } from "mongoose";

const settingsSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, required: true },
  general: { type: Boolean, default: true },
  business: { type: Boolean, default: false },
  entertainment: { type: Boolean, default: false },
  health: { type: Boolean, default: false },
  science: { type: Boolean, default: false },
  sports: { type: Boolean, default: false },
  technology: { type: Boolean, default: false },
});

type Settings = InferSchemaType<typeof settingsSchema>;

export default model<Settings>("Settings", settingsSchema);
