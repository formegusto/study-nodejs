const express = require("express");
const nunjucks = require("nunjucks");
const dotenv = require("dotenv");
const path = require("path");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const { sequelize } = require("./models");

dotenv.config();

const app = express();
app.set("port", process.env.PORT || 8000);
app.set("view engine", "html");
nunjucks.configure("views", {
  express: app,
  watch: true,
});
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Sequelize Connected");
  })
  .catch((err) => {
    console.error(err);
  });

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use("/img", express.static(path.join(__dirname, "upload")));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const indexRouter = require("./routes");

app.use("/", indexRouter);

app.use((req, res, next) => {});

app.use((err, req, res, next) => {});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트 대기 중");
});
