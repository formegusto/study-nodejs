const passport = require("passport");
const local = require("./localStrategy");
const kakao = require("./kakaoStrategy");
const User = require("../models/user");

const cache = [];
module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    const cacheUser = cache.find((c) => c.id === id);
    if (cacheUser) return done(null, cacheUser);

    User.findOne({
      where: { id },
      include: [
        {
          model: User,
          attributes: ["id", "nick"],
          as: "Followers",
        },
        {
          model: User,
          attributes: ["id", "nick"],
          as: "Followings",
        },
      ],
    })
      .then((user) => {
        cache.push(user);

        return done(null, user);
      })
      .catch((err) => done(err));
  });

  local();
  kakao();
};
