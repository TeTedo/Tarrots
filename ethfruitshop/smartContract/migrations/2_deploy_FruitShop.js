const FruitShop = artifacts.require("FruitShop");
module.exports = function (deployer) {
  deployer.deploy(FruitShop, "FRUIT", "FRT", 100000000, 100, 100, 100, 1);
};
