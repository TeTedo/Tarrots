const express = require("express");
const router = express.Router();
const { Transaction } = require("../models");

router.post("/getTransaction", async (req, res) => {
  console.log(req.body);
  const { from, to, name, num, value, date, pay } = req.body;

  await Transaction.create({
    from,
    to,
    name,
    num,
    value,
    date,
    pay,
  });

  res.send("gd");
});

router.get("/getTransaction", async (req, res) => {
  const result = await Transaction.findAll({ raw: true });
  res.send(result);
});

module.exports = router;
