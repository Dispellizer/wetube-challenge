import express from "express";
import path from "path";
import routes from "./routes";
import globalRouter from "./routes/globalRouter";
import { localsMiddleWare } from "./middlewares";

const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Add your magic here!
app.use(localsMiddleWare);

app.use(routes.home, globalRouter);

// Codesanbox does not need PORT :)
app.listen(4000, () => console.log(`Listening!`));
