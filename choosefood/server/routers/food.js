const router = require("express").Router();
const { Food } = require("../Models");
router.get("/get", async (req, res) => {
  const fooddata = await Food.findAll({ raw: true });
  res.send(fooddata);
});
router.post("/add", async (req, res) => {
  const { name } = req.body;
  await Food.create({
    name,
  });
  res.send("끝");
});

module.exports = router;
