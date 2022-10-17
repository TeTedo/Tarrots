import React from "react";

const ShopSlideCom = ({ data }) => {
  return (
    <div className="shop_slide_com">
      <div className="shop_slide_com_top">
        <img
          src={data && Object.values(data) ? Object.values(data)[9] : ""}
          alt=""
        />
      </div>
      <div className="shop_slide_com_bottom">
        <div className="shop_slide_com_bottom_cart">ADD TO CART</div>
      </div>
    </div>
  );
};

export default ShopSlideCom;
