import exporess from "express";
import routes from "../routes";
import {
  home,
  join,
  login,
  confirmAccount
} from "../controllers/globalController";

const globalRouter = exporess.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);
globalRouter.get(routes.confirmAccount, confirmAccount);

export default globalRouter;
