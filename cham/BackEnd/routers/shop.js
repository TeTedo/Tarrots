const express = require("express");
const router = express.Router();
const { ShopList } = require("../models");
const imgUpload = require("../middleware/imgUpload");
const path = require("path");
router.post("/shop/uploads", imgUpload.single("file"), async (req, res) => {
  console.log(req.file);
  console.log(JSON.parse(req.body.data));
  const { user_id, name, introduction, category, price } = JSON.parse(
    req.body.data
  );
  ShopList.create({
    user_id,
    name,
    introduction,
    category,
    image: path.join("/imgs", req.file.originalname),
    price,
    grade: 0,
    review: 0,
    permission: "N",
  });
  res.send("끝");
});

module.exports = router;
