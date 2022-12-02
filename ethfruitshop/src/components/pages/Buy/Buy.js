import React, { useContext, useEffect, useState } from "react";
import BuySellList from "components/BuySellList";
import { DeployedContext } from "App";
const Buy = () => {
  const { deployed } = useContext(DeployedContext);
  const [shopData, setShopData] = useState([]);
  useEffect(() => {
    (async () => {
      if (!deployed) return;
      const sellFruitList = await deployed.methods.getSellFruitList().call();
      const data = [];
      for (const value of sellFruitList) {
        if (value) {
          const temp = await deployed.methods
            .getSellerList(value, "SELL")
            .call();
          data.push(temp);
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
