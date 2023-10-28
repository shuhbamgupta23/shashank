import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Router from "./routes/routes.js";

const app = express();

app.use(express.json());

dotenv.config();

app.use("/", Router);

const connectionFunction = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(4000, () => {
      console.log("Connected to Mongoose and app running on port 4000");
    });
  } catch (err) {
    console.log(err);
  }
};

connectionFunction();
