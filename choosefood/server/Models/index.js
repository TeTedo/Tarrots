const Sequelize = require("sequelize");

const config = {
  dev: {
    username: "root",
    password: "Admin123!",
    database: "food",
    host: "127.0.0.1",
    dialect: "mysql",
    timezone: "+09:00",
  },
};

const sequelize = new Sequelize(
  config.dev.database,
  config.dev.username,
  config.dev.password,
  config.dev
);

const db = {};

const Food = require("./foods");
db.sequelize = sequelize;
db.Food = Food;
Food.init(sequelize);

module.exports = db;
