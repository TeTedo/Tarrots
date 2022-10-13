import React from "react";
import Slide from "./Slide";
import ShopMain from "./Shop/ShopMain";
import "../styles/Shop/Shop.css";
const Shoppage = () => {
  return (
    <div className="shop">
      <Slide></Slide>
      <ShopMain></ShopMain>
    </div>
  );
};

export default Shoppage;
