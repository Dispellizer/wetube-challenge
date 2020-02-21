import exporess from "express";
import routes from "../routes";
import {
  apiV1,
  apiV1Refound,
  apiV1Buy
} from "../controllers/apiVer1Controller";

const apiVer1Router = exporess.Router();

apiVer1Router.get(routes.apiV1, apiV1);
apiVer1Router.get(routes.apiV1Buy, apiV1Buy);
apiVer1Router.get(routes.apiV1Refound, apiV1Refound);

export default apiVer1Router;
