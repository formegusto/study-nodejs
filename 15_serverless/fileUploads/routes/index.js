const express = require("express");
const multer = require("multer");
const path = require("path");
const { Img } = require("../models");
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

router.get("/", async (req, res, next) => {
  const imgs = await Img.findAll({ order: [["id", "DESC"]] });
  res.render("index", {
    imgs: imgs,
  });
});

router.post("/post", upload.single("img"), async (req, res, next) => {
  if (req.file) {
    await Img.create({
      path: `/img/${req.file.filename}`,
    });
    res.redirect("/");
  } else {
    const error = new Error(`파일이 존재하지 않습니다.`);
    error.status = 400;
    next(error);
  }
});

const fs = require("fs");
try {
  fs.readdirSync("upload");
} catch (err) {
  console.log("uploads 폴더가 없어 생성합니다.");
  fs.mkdirSync("upload");
}

module.exports = router;
