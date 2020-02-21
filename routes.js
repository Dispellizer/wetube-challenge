// globalRouter
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const CONFIRM_ACCOUNT = "/confirm-account";

// coursesRouter
const COURSES = "/courses";
const COURSES_HOME = "/";
const COURSES_NEW = "/new";
const COURSES_MINE = "/mine";

// apiDocRouter
const API = "/api";
const API_HOME = "/";
const API_DOCUMENTATION = "/documentation";

// apiVer1Router
const API_V1 = "/v1";
const API_V1_BUY = "/v1/buy";
const API_V1_REFOUND = "/v1/refound";

// apiVer2Router
const API_V2 = "/v2";
const API_V2_REMOVE = "/v2/remove";
const API_V2_EDIT = "/v2/edit";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  confirmAccount: CONFIRM_ACCOUNT,
  courses: COURSES,
  coursesHome: COURSES_HOME,
  coursesNew: COURSES_NEW,
  coursesMine: COURSES_MINE,
  api: API,
  apiHome: API_HOME,
  apiDocumentation: API_DOCUMENTATION,
  apiV1: API_V1,
  apiV1Buy: API_V1_BUY,
  apiV1Refound: API_V1_REFOUND,
  apiV2: API_V2,
  apiV2Remove: API_V2_REMOVE,
  apiV2Edit: API_V2_EDIT
};

export default routes;
