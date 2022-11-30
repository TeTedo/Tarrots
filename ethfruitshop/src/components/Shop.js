import React, { useContext } from "react";
import ShopList from "./ShopList";
import { DeployedContext } from "../App";
import { useSelector } from "react-redux";
const Shop = () => {
  const { deployed } = useContext(DeployedContext);
  const shopData = useSelector((state) => state.addShopList);
  console.log(shopData);
  console.log(deployed);
  return (
    <div className="shopWrap">
      {shopData &&
        shopData.map((v, idx) => (
          <ShopList
            name={v.name}
            price={v.price}
            num={v.num}
            buyPrice={v.buyPrice}
            key={idx}
          />
        ))}
    </div>
  );
};

export default Shop;
