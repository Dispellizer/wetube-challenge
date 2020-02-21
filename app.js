import express from "express";

import routes from "./routes";
import globalRouter from "./routers/globalRouter";
import coursesRouter from "./routers/coursesRouter";
import apiDocRouter from "./routers/apiDocRouter";
import apiVer1Router from "./routers/apiVer1Router";
import apiVer2Router from "./routers/apiVer2Router";
const app = express();

const PORT = 4000;

app.use(routes.home, globalRouter);
app.use(routes.courses, coursesRouter);
app.use(routes.api, apiDocRouter);
app.use(routes.api, apiVer1Router);
app.use(routes.api, apiVer2Router);

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);
