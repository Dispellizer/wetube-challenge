import fs from "fs";

export const home = (req, res) => {
  res.render("home", { pageTitle: "TXT2HTML!" });
};

export const postRead = (req, res) => {
  const {
    file: { path }
  } = req;
  fs.readFile(path, "utf8", (err, data) => {
    res.render("read", { pageTitle: "Contents", data });
  });
};
