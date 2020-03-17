import request from "request";

export const home = (req, res) => {
  let {
    query: { url }
  } = req;
  const http = /http:/;
  if (!http.test(url)) {
    url = `http://${url}`;
  }
  request.get(url, (error, response, body) => {
    if (response && response.statusCode <= 445) {
      const status = { status: "UP!" };
      res.render("home", status);
    } else {
      const status = { status: "DOWN!" };
      res.render("home", status);
    }
    // console.error("error", error);
    // console.log("statusCode", response && response.statusCode);
    // console.log("body", body);
    console.log("statusCode", response && response.statusCode);
    // 없는 사이트면 statusCode가 undefined인데?
  });
  console.log(url);
};
