import React from "react";
import { Route, Routes } from "react-router-dom";
import { Shoppage } from "../components";
import { ShopMain, ShopTop, ShopBottom, ShopShoes } from "../components/Shop/";
import Slide from "../components/Slide";
import ShopSlideCom from "../components/Slide/ShopSlideCom";
import Modal_btn from "../components/Modal/Modal_btn";
const Shop = () => {
  return (
    <div className="shop">
      <Slide component={ShopSlideCom} length="3"></Slide>
      <Routes>
        <Route exact path="/" element={<Shoppage component={ShopMain} />} />;
        <Route exact path="/top" element={<Shoppage component={ShopTop} />} />;
        <Route exact path="/bottom" element={<Shoppage component={ShopBottom} />} />;
        <Route exact path="/shoes" element={<Shoppage component={ShopShoes} />} />;
      </Routes>
      <Modal_btn text={"물건올리기"} />
    </div>
  );
};

export default Shop;
