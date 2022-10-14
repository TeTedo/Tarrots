import React from "react";
import ShopGoods from "../Pagination/ShopGoods";
import Pagination from "../Pagination/Pagination";
const ShopTop = ({ page, name }) => {
  return (
    <>
      <Pagination component={ShopGoods} data="" />
    </>
  );
};

export default ShopTop;
