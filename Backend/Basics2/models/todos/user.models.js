import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      require: true,
      unique: true,
      lowercase: true,
    },
  },
  {
    timestamps: true,
  }
);

export default User = mongoose.model("User", userSchema);
