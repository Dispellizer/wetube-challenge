import express from "express";
import path from "path";
import bodyParser from "body-parser";
import multer from "multer";
import fs from "fs";
import routes from "./routes";
import globalRouter from "./globalRouter";

const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes.home, globalRouter);

// Codesanbox does not need PORT :)
app.listen(4000, () => console.log(`Listening!`));
