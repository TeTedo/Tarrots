import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { ProductModal } from "pages/Shop";
const ShopSlideCom = ({ data }) => {
  const shopData = useSelector((state) => state.shopData);
  const { setProductModal, setProductData } = useContext(ProductModal);
  const product = () => {
    setProductData(
      ...Object.values(shopData).filter((v) => v.id === data?.shop_id)
    );
    setProductModal(true);
  };

  return (
    <div className="shop_slide_com">
      <div className="shop_slide_com_top">
        <img
          src={data && Object.values(data) ? Object.values(data)[9] : ""}
          alt=""
          onClick={product}
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
};

export default ShopSlideCom;
