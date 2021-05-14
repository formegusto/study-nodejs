const express = require("express");
const nunjucks = require("nunjucks");
const dotenv = require("dotenv");
const path = require("path");
const morgan = require("morgan");

dotenv.config();

const app = express();
app.set("port", process.env.PORT || 8000);
app.set("view engine", "html");
nunjucks.configure("views", {
  express: app,
  watch: true,
});
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));

const indexRouter = require("./routes");

app.use("/", indexRouter);

app.use((req, res, next) => {});

app.use((err, req, res, next) => {});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트 대기 중");
});
