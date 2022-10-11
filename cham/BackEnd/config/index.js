const dot = require("dotenv").config();
const config = {
  dev: {
    username: "root",
    password: process.env.DB_PASSWORD,
    database: "cham",
    host: "localhost",
    dialect: "mysql",
    timezone: "+09:00",
    dialectOptions: {
      dateStrings: true,
      typeCast: true, // DB에서 가져올 때 시간 설정
    },
    define: {
      timestamps: true,
    },
  },
};

module.exports = config;
