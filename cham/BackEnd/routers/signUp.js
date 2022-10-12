const express = require("express");
const router = express.Router();
const { User } = require("../models");
const path = require("path");
router.post("/signUp", async (req, res) => {
  const randomProfile = ~~(Math.random() * 7) + 1;
  await User.create({
    ...req.body,
    profile_img: path.join(__dirname, "..", "public/images", `defaultImage${randomProfile}.jpg`),
    type: "C",
  });

  res.send("끝");
});

module.exports = router;
