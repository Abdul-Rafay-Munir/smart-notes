import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    title: {
      required: true,
      type: String,
    },
    content: {
      required: true,
      type: String,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Notes = mongoose.model("Notes", noteSchema);
