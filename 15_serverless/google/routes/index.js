const express = require("express");
const multer = require("multer");
const path = require("path");
const { Img } = require("../models");
const router = express.Router();
const multerGoogleStorage = require("multer-google-storage");

const fs = require("fs");
try {
  fs.readdirSync("upload");
} catch (err) {
  console.log("uploads 폴더가 없어 생성합니다.");
  fs.mkdirSync("upload");
}

const upload = multer({
  storage: multerGoogleStorage.storageEngine({
    bucket: "thbird",
    projectId: "node-deploy-313700",
    keyFilename: "node-deploy-313700-d3e16cbf2673.json",
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
      path: req.file.path,
    });
    res.redirect("/");
  } else {
    const error = new Error(`파일이 존재하지 않습니다.`);
    error.status = 400;
    next(error);
  }
});

module.exports = router;
