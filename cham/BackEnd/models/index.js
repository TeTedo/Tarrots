const Sequelize = require("sequelize");
const config = require("../config");
const sequelize = new Sequelize(
  config.dev.database,
  config.dev.username,
  config.dev.password,
  config.dev
);
const db = {};

const User = require("./users");
const ShopList = require("./shopList");
const ShopSlideMain = require("./shopSlideMain");
db.sequelize = sequelize;
db.User = User;
db.ShopList = ShopList;
db.ShopSlideMain = ShopSlideMain;

User.init(sequelize);
ShopList.init(sequelize);
ShopSlideMain.init(sequelize);

User.associate(db);
ShopList.associate(db);
ShopSlideMain.associate(db);
module.exports = db;
