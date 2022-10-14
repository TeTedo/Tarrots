import React from "react";
import Pagination from "../Pagination/Pagination";
import ShopGoods from "../Pagination/ShopGoods";
const ShopShoes = ({ page, name }) => {
  return (
    <>
      <Pagination component={ShopGoods} data="" />
    </>
  );
};

export default ShopShoes;
