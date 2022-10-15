const Sequelize = require("sequelize");

class ShopList extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        shop_id: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        backgroundImg: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        image: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      },
      {
        sequelize: sequelize,
        timestamps: true,
        underscored: true,
        modelName: "ShopList",
        tableName: "shopLists",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.ShopList.belongsTo(db.User, {
      foreignKey: "user_id",
      targetKey: "user_id",
    });
  }
}

module.exports = ShopList;
