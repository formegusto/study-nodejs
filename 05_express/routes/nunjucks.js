// routes/nunjucks.js
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Hi Nunjucks!" });
});

router.get("/variables", (req, res) => {
  res.render("variables");
});

router.get("/loop", (req, res) => {
  res.render("loop");
});

router.get("/condition", (req, res) => {
  res.render("condition");
});

router.get("/include", (req, res) => {
  res.render("include");
});

router.get("/content", (req, res) => {
  //   throw new Error("에러 입니다.");
  res.render("content", {
    title: "Hello Nunjucks!",
  });
});

router.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
  error.status = 404;
  next(error);
});

router.use((err, req, res, next) => {
  res.locals.error = process.env.NODE_ENV !== "production" ? err : {};
  res.status(err.status || 500);

  res.render("error");
  //   res.locals.error =
  //     process.env.NODE_ENV !== "production"
  //       ? {
  //           status: err.status || 500,
  //           message: err.message,
  //         }
  //       : {};
  //   console.log(res.locals.error);
  //   res.status(err.status || 500);
  //   res.render("error");
});

module.exports = router;
