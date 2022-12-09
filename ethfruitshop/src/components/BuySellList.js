import React, { useContext, useEffect, useState } from "react";
import { DeployedContext } from "App";
const BuySellList = ({ name, price, num, owner, type, unit }) => {
  const { deployed, account, web3, CA } = useContext(DeployedContext);
  const [count, setCount] = useState();
  const [sold, setSold] = useState(false);
  const buy = async () => {
    if (+num < +count) {
      alert("수량을 잘 입력해주세요");
      return;
    }
    if (unit === "ETH") {
      await deployed.methods.buyFruit(name, count, type, owner, unit).send({
        from: account,
        to: CA,
        value: count * price,
      });
    } else {
      await deployed.methods.buyFruit(name, count, type, owner, unit).send({
        from: account,
        to: CA,
      });
    }
  };

  const sell = async () => {
    if (+num < +count) {
      alert("수량을 잘 입력해주세요");
      return;
    }
    await deployed.methods.sellFruit(name, count, type, owner, unit).send({
      from: account,
      to: CA,
    });
  };
  const deleteList = async () => {
    await deployed.methods.deleteFruit(name, type, unit).send({
      from: account,
      to: CA,
    });
  };
  useEffect(() => {
    if (num <= 0) setSold(true);
  }, [num]);
  return (
    <div className="shopList">
      {owner.toLowerCase() === account ? (
        <div className="deleteBtn" onClick={deleteList}>
          X
        </div>
      ) : (
        ""
      )}
      <div className="imgWrap">
        <i className={`fa-solid fa-4x fa-beat fa-${name}`}></i>
      </div>
      <div className="boxWrap">
        <div>
          {type === "BUY" ? "구매" : "판매"}자 :{" "}
          {owner.slice(0, 5) + "..." + owner.slice(38)}
        </div>
        <div>
          과일 이름 :{" "}
          {name === "lemon" ? "레몬" : name === "carrot" ? "당근" : "사과"}
        </div>
        <div>남은 수량 : {num}</div>
        <div>
          {type === "BUY" ? "구매" : "판매"} 가격 : {price / 10 ** 18}
          {unit === "ETH" ? "ETH" : "FRT"}
        </div>
        <div>
          {sold ? (
            ""
          ) : (
            <input
              type="text"
              placeholder="수량"
              onChange={(e) => {
                setCount(e.target.value);
              }}
            />
          )}
          {sold ? (
            <button>종료</button>
          ) : type === "BUY" ? (
            <button onClick={sell}>판매</button>
          ) : (
            <button onClick={buy}>구입</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BuySellList;
