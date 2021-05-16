const express = require("express");
const multer = require("multer");
const path = require("path");
const { Img } = require("../models");
const router = express.Router();
const AWS = require("aws-sdk");
const multerS3 = require("multer-s3");

const fs = require("fs");
try {
  fs.readdirSync("upload");
} catch (err) {
  console.log("uploads 폴더가 없어 생성합니다.");
  fs.mkdirSync("upload");
}

AWS.config.update({
  accessKeyId: process.env.S3_ACCESS_KEY,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  region: "ap-northeast-2",
});

const upload = multer({
  storage: multerS3({
    s3: new AWS.S3(),
    bucket: "thbird",
    key(req, file, cb) {
      cb(null, `original/${Date.now()}${path.basename(file.originalname)}`);
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
  console.log(req.file);
  if (req.file) {
    await Img.create({
      path: req.file.location,
    });
    res.redirect("/");
  } else {
    const error = new Error(`파일이 존재하지 않습니다.`);
    error.status = 400;
    next(error);
  }
});

module.exports = router;
