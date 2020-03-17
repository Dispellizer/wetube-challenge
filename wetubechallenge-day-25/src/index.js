import express from "express";
import path from "path";
import request from "request";
import globalRouter from "./globalRouter";

const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use("/", globalRouter);

// Codesanbox does not need PORT :)
app.listen(5000, () => console.log(`Listening!`));
