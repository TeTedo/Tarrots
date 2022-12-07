const Sequelize = require("sequelize");
const config = require("../config");
const sequelize = new Sequelize(
  config.dev.database,
  config.dev.username,
  config.dev.password,
  config.dev
);
const db = {};
const Transaction = require("./transactions");
db.sequelize = sequelize;
db.Transaction = Transaction;
Transaction.init(sequelize);

module.exports = db;
