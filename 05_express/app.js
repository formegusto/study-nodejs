// app.js
const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();
const app = express();
app.set("port", process.env.PORT || 3000);
// app.set("views", path.join(__dirname, "view/pug"));
// app.set("view engine", "pug");

const nunjucks = require("nunjucks");
app.set("view engine", "html");

nunjucks.configure("view/nunjucks", {
  express: app,
  watch: true,
});

app.use(morgan("dev"));
app.use("/", express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
    name: "session-cookie",
  })
);

const multer = require("multer");
const fs = require("fs");

try {
  fs.readdirSync("uploads");
} catch (error) {
  console.error("uploads 폴더가 없어 uploads 폴더를 생성합니다.");
  fs.mkdirSync("uploads");
}
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

app.use((req, res, next) => {
  console.log("모든 요청에 다 실행됩니다.");
  next();
});

app.get("/upload", (req, res) => {
  res.sendFile(path.join(__dirname, "view/multipart.html"));
});

app.post(
  "/upload",
  upload.fields([{ name: "image1" }, { name: "image2" }]),
  (req, res) => {
    console.log(req.files, req.body);
    res.send("ok");
  }
);

// app.get(
//   "/",
//   (req, res, next) => {
//     console.log("GET / 요청에서만 실행된다.");
//     next();
//   },
//   (req, res) => {
//     throw new Error("에러는 에러 처리 미들웨어로 갑니다.");
//   }
// );

const indexRouter = require("./routes");
const userRouter = require("./routes/user");
const pugRouter = require("./routes/pug");
const nunjucksRouter = require("./routes/nunjucks");

app.use("/", indexRouter);
app.use("/user", userRouter);
app.use("/pug", pugRouter);
app.use("/nunjucks", nunjucksRouter);

app.use((req, res, next) => {
  res.status(404).send("Not Found");
});

// app.use((err, req, res, next) => {
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
// });

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
});

// app.get("/", (req, res) => {
//   //   res.send("Hello, Express!");
//   res.sendFile(path.join(__dirname, "/view/index.html"));
// });

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기중 입니다.");
});
