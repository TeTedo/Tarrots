import React from "react";

const ShopList = ({ name, price, num, buyPrice }) => {
  return (
    <div className="shopList">
      <div>과일 이름 : {name}</div>
      <div>남은 수량 : {price}ETH</div>
      <div>판매 가격 : {num}</div>
      <div>매입 가격 : {buyPrice}</div>
      <div>
        <input type="text" placeholder="수량" />
        <button>구입</button>
        <button>판매</button>
      </div>
    </div>
  );
};

export default ShopList;
