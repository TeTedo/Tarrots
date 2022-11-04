const Sequelize = require("sequelize");

class Foods extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      },
      {
        sequelize: sequelize,
        timestamps: true,
        underscored: true,
        modelName: "foods",
        tableName: "foodss",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
}

module.exports = Foods;
