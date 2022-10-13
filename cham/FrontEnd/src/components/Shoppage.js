import React from "react";
import Slide from "./Slide";
import ShopMain from "./Shop/ShopMain";
import "../styles/Shop/Shop.css";
import ShopSlideCom from "./Slide/ShopSlideCom";
const Shoppage = () => {
  return (
    <div className="shop">
      <Slide component={ShopSlideCom} length="3"></Slide>
      <ShopMain></ShopMain>
    </div>
  );
};

export default Shoppage;
