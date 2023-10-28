import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Age: Number,
  Favoritefood: { type: [String] },
});

const User = mongoose.model("User", userSchema);

export default User;
