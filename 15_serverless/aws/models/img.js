const Sequelize = require("sequelize");

module.exports = class Img extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        path: {
          type: Sequelize.STRING(500),
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: true,
        paranoid: false,
        underscored: false,
        modelName: "Img",
        tableName: "img",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {}
};
