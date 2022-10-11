const Sequelize = require("sequelize");
const config = require("../config");
const sequelize = new Sequelize(config.dev.database, config.dev.username, config.dev.password, config.dev);
const db = {};

const User = require("./users");

db.sequelize = sequelize;
db.User = User;

User.init(sequelize);

module.exports = db;
