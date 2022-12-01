import React, { useContext, useEffect, useState } from "react";
import ShopList from "./ShopList";
import { DeployedContext } from "../App";
const Shop = () => {
  const { deployed } = useContext(DeployedContext);
  const [shopData, setShopData] = useState([]);
  useEffect(() => {
    (async () => {
      if (!deployed) return;
      const buyFruitList = await deployed.methods.getBuyFruitList().call();
      const sellFruitList = await deployed.methods.getSellFruitList().call();
      const data = [];
      for (const value of buyFruitList) {
        if (value) {
          const temp = await deployed.methods
            .getSellerList(value, "BUY")
            .call();
          data.push(temp);
        }
      }
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
          <ShopList
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

export default Shop;
