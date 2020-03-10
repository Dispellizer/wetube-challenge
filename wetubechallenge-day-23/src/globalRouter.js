import express from "express";
import routes from "./routes";
import { home, postRead } from "./globalController";
import { uploadTxt } from "./middlewares";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.post(routes.read, uploadTxt, postRead);

export default globalRouter;
