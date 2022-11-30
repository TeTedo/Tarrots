const fruitShop = artifacts.require("FruitShop");

contract("FruitShop", () => {
  describe("hello", () => {
    let instance;
    it("contract", async () => {
      instance = await fruitShop.deployed();
      console.log(instance);
      await instance.registerFruit("apple");
      console.log(instance.fruitList.call(0));
      await instance.registerFruit("peach");
      console.log(instance.fruitList.call(1));
    });
  });
});

// 터미널 콘솔 테스트 인스턴스
// FruitShop.deployed().then(its=>it=its)
