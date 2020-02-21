import exporess from "express";
import routes from "../routes";
import {
  courses,
  coursesNew,
  coursesMine
} from "../controllers/coursesController";

const coursesRouter = exporess.Router();

coursesRouter.get(routes.coursesHome, courses);
coursesRouter.get(routes.coursesNew, coursesNew);
coursesRouter.get(routes.coursesMine, coursesMine);

export default coursesRouter;
