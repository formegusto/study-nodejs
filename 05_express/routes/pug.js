// routes/pug.js
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/variables", (req, res) => {
  res.render("variables", {
    title: "변수",
  });
});

router.get("/loop", (req, res) => {
  res.render("loop", {
    title: "반복문",
    fruits: ["사과", "배", "오렌지", "바나나", "복숭아"],
  });
});

router.get("/condition", (req, res) => {
  res.render("condition", {
    title: "조건문",
  });
});

router.get("/case", (req, res) => {
  res.render("case", {
    title: "케이스문",
  });
});

router.get("/include", (req, res) => {
  res.render("include");
});

router.get("/body", (req, res) => {
  res.render("body");
});

/*
router.get("/variables", (req, res, next) => {
  res.locals.title = "변수";
  res.render("variables");
});
*/

module.exports = router;
