import express from "express";
const app = express();

const PORT = 4000;

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

const betweenMiddleware = (req, res, next) => {
  console.log("I'm a middleware");
  next();
};

const handleHome = (req, res) => {
  res.send("Home");
};

const handleAboutUs = (req, res) => {
  res.send("About Us");
};

const handleContact = (req, res) => {
  res.send("Contact");
};

const handleProtected = (req, res) => {
  res.redirect("/");
};

app.use(betweenMiddleware);

app.get("/", handleHome);
app.get("/about-us", handleAboutUs);
app.get("/contact", handleContact);
app.get("/protected", handleProtected);

app.listen(PORT, handleListening);
