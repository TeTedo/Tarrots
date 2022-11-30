import React from "react";

const ShopList = () => {
  return (
    <div className="shopList">
      <div>과일 이름 : </div>
      <div>남은 수량 : </div>
      <div>판매 가격 : </div>
      <div>매입 가격 : </div>
      <div>
        <input type="text" placeholder="수량" />
        <button>구입</button>
        <button>판매</button>
      </div>
    </div>
  );
};

export default ShopList;
