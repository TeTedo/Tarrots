import React, { useContext, useEffect, useState } from "react";
import BuySellList from "components/BuySellList";
import { DeployedContext } from "App";
const Sell = () => {
  const { deployed } = useContext(DeployedContext);
  const [shopData, setShopData] = useState([]);
  useEffect(() => {
    (async () => {
      if (!deployed) return;
      const buyFruitList = await deployed.methods.getBuyFruitList().call();
      const data = [];
      for (const value of buyFruitList) {
        if (value) {
          const temp = await deployed.methods
            .getSellerList(value, "BUY")
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

export default Sell;
