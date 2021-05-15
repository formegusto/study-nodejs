const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("index");
});

router.post("/post", (req, res, next) => {
  console.log("post");
  res.redirect("/");
});

const fs = require("fs");
try {
  fs.readdirSync("upload");
} catch (err) {
  console.log("uploads 폴더가 없어 생성합니다.");
  fs.mkdirSync("upload");
}

module.exports = router;
