const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, "upload/");
    },
    filename(req, file, cb) {
      const ext = path.extname(file.originalname);
      cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

router.get("/", (req, res, next) => {
  res.render("index");
});

router.post("/post", upload.single("img"), (req, res, next) => {
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
