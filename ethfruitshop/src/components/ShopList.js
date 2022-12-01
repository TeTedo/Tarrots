import React, { useContext, useState } from "react";
import { DeployedContext } from "../App";
const ShopList = ({ name, price, num, owner, type }) => {
  const { deployed, account, web3, CA } = useContext(DeployedContext);
  const [count, setCount] = useState();

  const buy = async () => {
    await deployed.methods.buyFruit(name, count, type).send({
      from: account,
      to: CA,
      value: count * price,
    });
  };
  const sell = async () => {
    await deployed.methods.sellFruit(name, count, type).send({
      from: account,
      to: CA,
    });
  };
  const deleteList = async () => {
    await deployed.methods.deleteFruit(name, type).send({
      from: account,
      to: CA,
    });
  };
  return (
    <div className="shopList">
      {owner.toLowerCase() === account ? (
        <div className="deleteBtn" onClick={deleteList}>
          X
        </div>
      ) : (
        ""
      )}
      <div>판매자 : {owner.slice(0, 5) + "..." + owner.slice(38)}</div>
      <div>과일 이름 : {name}</div>
      <div>남은 수량 : {num}</div>
      <div>
        {type === "BUY" ? "구매" : "판매"} 가격 : {price / 10 ** 18}ETH
      </div>
      <div>
        <input
          type="text"
          placeholder="수량"
          onChange={(e) => {
            setCount(e.target.value);
          }}
        />
        {type === "BUY" ? (
          <button onClick={sell}>판매</button>
        ) : (
          <button onClick={buy}>구입</button>
        )}
      </div>
    </div>
  );
};

export default ShopList;
