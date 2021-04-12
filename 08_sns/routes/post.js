const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const { Post, Hashtag } = require("../models");
const { isLoggedIn } = require("./middlewares");
const db = require("../models");

const router = express.Router();

try {
  fs.readdirSync("uploads/");
} catch (err) {
  console.error("uploads 폴더가 없어 uploads 폴더를 생성합니다.");
  fs.mkdirSync("uploads");
}

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, "uploads/");
    },
    filename(req, file, cb) {
      const ext = path.extname(file.originalname);
      cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

router.post("/img", isLoggedIn, upload.single("img"), (req, res) => {
  console.log(req.file);
  res.json({ url: `/img/${req.file.filename}` });
});

const upload2 = multer();
router.post("/", isLoggedIn, upload2.none(), async (req, res, next) => {
  try {
    const post = await Post.create({
      content: req.body.content,
      img: req.body.url,
      UserId: req.user.id,
    });

    const hashtags = req.body.content.match(/#[^\s#]+/g);
    if (hashtags) {
      const result = await Promise.all(
        hashtags.map((tag) => {
          return Hashtag.findOrCreate({
            where: { title: tag.slice(1).toLowerCase() },
          });
        })
      );

      await post.addHashtags(result.map((r) => r[0]));
    }

    res.redirect("/");
  } catch (err) {
    console.err(err);
    next(err);
  }
});

router.delete("/:id", isLoggedIn, async (req, res, next) => {
  try {
    const result = await Post.destroy({ where: { id: req.params.id } });

    console.log(result);
    res.send("success");
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.post("/:id/like", isLoggedIn, async (req, res, next) => {
  try {
    const post = await Post.findOne({ where: { id: req.params.id } });
    if (!post) {
      const error = new Error("존재하지 않는 게시물 입니다.");
      error.status = 404;
      next(error);
    } else {
      console.log(post.addLikePost(req.user));
      res.send("success");
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.delete("/:id/like", isLoggedIn, async (req, res, next) => {
  try {
    const post = await Post.findOne({ where: { id: req.params.id } });
    if (!post) {
      const error = new Error("존재하지 않는 게시물 입니다.");
      error.status = 404;
      next(error);
    } else {
      const PostLike = Post.sequelize.models.PostLike;
      const result = PostLike.destroy({
        where: {
          UserId: req.user.id,
          PostId: req.params.id,
        },
      });
      console.log(result);
      res.send("success");
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
