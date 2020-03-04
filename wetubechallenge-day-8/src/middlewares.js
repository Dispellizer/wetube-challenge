export const localsMiddleWare = (req, res, next) => {
  res.locals.siteName = "Sexy Site";
  next();
};
