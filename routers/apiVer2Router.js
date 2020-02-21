import exporess from "express";
import routes from "../routes";
import {
  apiV2,
  apiV2Remove,
  apiV2Edit
} from "../controllers/apiVer2Controller";

const apiVer2Router = exporess.Router();

apiVer2Router.get(routes.apiV2, apiV2);
apiVer2Router.get(routes.apiV2Remove, apiV2Remove);
apiVer2Router.get(routes.apiV2Edit, apiV2Edit);

export default apiVer2Router;
