const express = require("express");
const router = express.Router();
const { User } = require("../models");

router.post("/login", async (req, res) => {
  const { user_id, user_pw } = req.body;
  const userData = await User.findOne({
    where: { user_id, user_pw },
  })
    .then((result) => {
      res.send({ ...result.dataValues });
    })
    .catch(() => {
      res.send(false);
    });
});

module.exports = router;
