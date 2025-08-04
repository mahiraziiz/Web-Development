import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-paginate-v2";

const commentSchema = new Schema(
  {
    content: {
      type: string,
      required: true,
    },
    video: {
      type: Schema.types.objectId,
      ref: "Video",
    },
    owner: {
      type: Schema.types.objectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

commentSchema.plugin(mongooseAggregatePaginate);

export const Comment = mongoose.model("Comment", commentSchema);
