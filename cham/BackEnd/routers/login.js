const express = require("express");
const router = express.Router();
const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dot = require("dotenv");
//to use env Data
dot.config();
router.post("/login", async (req, res) => {
  const { user_id, user_pw } = req.body;
  const userData = await User.findOne({
    where: { user_id },
  })
    .then((result) => {
      const data = result.dataValues;
      bcrypt.compare(user_pw, data.user_pw, async (err, same) => {
        //로그인 성공
        if (same) {
          // access token
          const access_token = jwt.sign(
            {
              alg: "HS256",
              typ: "JWT",
              userId: data.user_id,
            },
            process.env.ACCSESS_TOKEN,
            {
              expiresIn: "10m",
            }
          );
          // refresh token
          const refresh_token = jwt.sign(
            {
              alg: "HS256",
              typ: "JWT",
              userId: data.user_id,
            },
            process.env.REFRESH_TOKEN,
            {
              expiresIn: "1h",
            }
          );

          req.session.access_token = access_token;
          req.session.refresh_token = refresh_token;
          res.send({ ...data });
        } else {
          res.send("비밀번호");
        }
      });
    })
    .catch(() => {
      res.send("아이디");
    });
});

module.exports = router;
