import exporess from "express";
import routes from "../routes";
import { apiDocumentation } from "../controllers/apiDocController";

const apiDocRouter = exporess.Router();

apiDocRouter.get(routes.apiDocumentation, apiDocumentation);

export default apiDocRouter;
