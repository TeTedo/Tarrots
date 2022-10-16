const express = require("express");
const router = express.Router();
const { ShopList } = require("../models");
const imgUpload = require("../middleware/imgUpload");
const path = require("path");
router.post("/shop/uploads", imgUpload.single("file"), async (req, res) => {
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

router.get("/shop/permission", async (req, res) => {
  const shopData = await ShopList.findAll({
    where: { permission: "N" },
    raw: true,
  });
  res.send(shopData);
});
router.post("/shop/permissionCheck", async (req, res) => {
  const { user_id } = req.body;
  const shopData = await ShopList.findAll({
    where: { user_id },
    raw: true,
  });
  res.send(shopData);
});

router.post("/shop/permission", async (req, res) => {
  let { type, id } = req.body;
  type = type == "승인" ? "Y" : "D";
  await ShopList.update({ permission: type }, { where: { id } });
  const shopData = await ShopList.findAll({
    where: { permission: "N" },
    raw: true,
  });
  res.send(shopData);
});

module.exports = router;
