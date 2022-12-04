import React, { useContext, useEffect, useState } from "react";
import BuySellList from "components/BuySellList";
import { DeployedContext } from "App";
const Buy = () => {
  const { deployed } = useContext(DeployedContext);
  const [shopData, setShopData] = useState([]);
  useEffect(() => {
    (async () => {
      if (!deployed) return;
      const fruitList = await deployed.methods.getFruitInitList().call();
      const fruitTrader = await deployed.methods.getFruitTrader("SELL").call();
      const data = [];
      for (const value of fruitList) {
        for (const trader of fruitTrader) {
          const temp = await deployed.methods
            .getSellerList(value, "SELL", trader)
            .call();
          if (temp.status === "on") data.push(temp);
        }
      }
      setShopData(data);
    })();
  }, [deployed]);

  return (
    <div className="shopWrap">
      {shopData &&
        shopData.map((v, idx) => (
          <BuySellList
            key={idx}
            owner={v.owner}
            name={v.name}
            price={v.price}
            num={v.num}
            type={v.typeIs}
          />
        ))}
    </div>
  );
};

export default Buy;
