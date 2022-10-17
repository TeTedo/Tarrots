import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Shoppage } from "../components";
import { ShopMain, ShopTop, ShopBottom, ShopShoes } from "../components/Shop/";
import Slide from "../components/Slide";
import ShopSlideCom from "../components/Slide/ShopSlideCom";
import Modal_btn from "../components/Modal/Modal_btn";
import { useDispatch, useSelector } from "react-redux";
import { shopAction } from "redux/middleware/shopAction";
const Shop = () => {
  const slideData = useSelector((state) => state.shopSlide);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(shopAction.getSlideData());
  }, []);
  return (
    <div className="shop">
      <Slide
        component={ShopSlideCom}
        length={Object.keys(slideData).length || 1}
        data={slideData}
      />
      <Routes>
        <Route exact path="/" element={<Shoppage component={ShopMain} />} />;
        <Route exact path="/top" element={<Shoppage component={ShopTop} />} />;
        <Route
          exact
          path="/bottom"
          element={<Shoppage component={ShopBottom} />}
        />
        ;
        <Route
          exact
          path="/shoes"
          element={<Shoppage component={ShopShoes} />}
        />
        ;
      </Routes>
      <Modal_btn text={"물건올리기"} />
      <Modal_btn text={"슬라이드 관리"} />
      <Modal_btn text={"판매승인"} />
      <Modal_btn text={"판매승인 확인"} />
    </div>
  );
};

export default Shop;
