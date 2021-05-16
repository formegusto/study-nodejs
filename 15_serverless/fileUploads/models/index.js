const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require("../config/config.json")[env];

const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

const Img = require("./img");
db.sequelize = sequelize;
db.Img = Img;

Img.init(sequelize);

module.exports = db;
