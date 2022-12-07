const Sequelize = require("sequelize");

class Transaction extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        from: {
          type: Sequelize.STRING(42),
          allowNull: false,
        },
        to: {
          type: Sequelize.STRING(42),
          allowNull: false,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        num: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        value: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },
        date: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        pay: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      },
      {
        sequelize: sequelize,
        timestamps: true,
        underscored: true,
        modelName: "Transaction",
        tableName: "transactions",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
}

module.exports = Transaction;
