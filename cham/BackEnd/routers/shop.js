const express = require("express");
const router = express.Router();
const { ShopList, ShopSlideMain, User } = require("../models");
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
    image: path.join("/assets/imgs", req.file.filename),
    price,
    grade: 0,
    review: 0,
    permission: "N",
  });
  res.send("끝");
});

//슬라이드 데이터 올리기
router.post(
  "/shop/uploadsSlide",
  imgUpload.single("file"),
  async (req, res) => {
    await ShopSlideMain.create({
      shop_id: req.body.data,
      backgroundImg: path.join("/assets/imgs", req.file.filename),
    });
    const slideData = await ShopSlideMain.findAll({
      include: [{ model: ShopList }],
      raw: true,
    });
    res.send(slideData);
  }
);

router.get("/shop/data", async (req, res) => {
  const shopData = await ShopList.findAll({
    where: { permission: "Y" },
    raw: true,
  });
  res.send(shopData);
});
router.get("/shop/permission", async (req, res) => {
  const shopData = await ShopList.findAll({
    where: { permission: "N" },
    raw: true,
  });
  res.send(shopData);
});

// 슬라이드 데이터 받아오기
router.get("/shop/slide", async (req, res) => {
  const slideData = await ShopSlideMain.findAll({
    include: [{ model: ShopList }],
    raw: true,
  });
  res.send(slideData);
});

router.post("/shop/permissionCheck", async (req, res) => {
  const { user_id } = req.body;
  const shopData = await ShopList.findAll({
    where: { user_id },
    raw: true,
  });
  res.send(shopData);
});
router.post("/shop/deleteSlide", async (req, res) => {
  const { id } = req.body;
  await ShopSlideMain.destroy({
    where: { shop_id: id },
  });
  const shopData = await ShopSlideMain.findAll({
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
