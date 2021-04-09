const express = require("express");
const axios = require("axios");

const router = express.Router();
const URL = "http://localhost:3000/v2";

axios.defaults.headers.origin = "http://localhost:4000";

const request = async (req, api) => {
  try {
    if (!req.session.jwt) {
      const tokenResult = await axios.post(`${URL}/token`, {
        clientSecret: process.env.CLIENT_SECRET,
      });
      req.session.jwt = tokenResult.data.token;
    }
    return await axios.get(`${URL}${api}`, {
      headers: { authorization: req.session.jwt },
    });
  } catch (error) {
    console.error(error);
    if (error.response.status === 419) {
      // 토큰이 만료되면 삭제 후 재 생성 후 요청
      delete req.session.jwt;
      return request(req, api);
    }
    return error.response;
  }
};

router.get("/", (req, res) => {
  res.render("main", { key: process.env.CLIENT_SECRET });
});

router.get("/mypost", async (req, res, next) => {
  try {
    const result = await request(req, "/posts/my");
    res.json(result.data);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get("/search/:hashtag", async (req, res, next) => {
  try {
    const result = await request(
      req,
      `/posts/hashtag/${encodeURIComponent(req.params.hashtag)}`
    );
    res.json(result.data);
  } catch (error) {
    if (error.code) {
      console.error(error);
      next(error);
    }
  }
});

module.exports = router;
