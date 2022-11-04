const express = require("express");
const app = express();
const cors = require("cors");
const { sequelize } = require("./Models");
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("연결 성공");
  })
  .catch(() => {
    console.log("연결 실패");
  });

app.use(express.json());

const options = {
  origin: "http://192.168.0.128:3000",
};
app.use(cors(options));

const food = require("./routers/food");
app.use(food);

app.listen(8000, () => {
  console.log("서버 열림");
});
