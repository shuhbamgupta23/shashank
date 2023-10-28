import express from "express";
import { insert } from "../controller/controller.js";

const Router = express.Router();

Router.post("/insert", insert);

export default Router;
