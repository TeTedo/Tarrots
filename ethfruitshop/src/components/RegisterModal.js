import React, { useContext, useRef, useState } from "react";
import { DeployedContext } from "../App";

const RegisterModal = ({ setRegister }) => {
  const { deployed, account, CA, web3 } = useContext(DeployedContext);
  const [isChecked, setIsChecked] = useState(true);
  const value1 = useRef();
  const value2 = useRef();
  const value3 = useRef();
  const value4 = useRef();
  const select = useRef();
  const register = async () => {
    const name = value1.current.value.toString();
    const price = value2.current.value;
    const num = value3.current.value;
    const typeIs = value4.current.checked ? "BUY" : "SELL";
    const unit = select.current.value;
    if (!name || !price || !num) {
      alert("모든 값을 입력해주세요.");
      return;
    }
    if (typeIs === "BUY") {
      await deployed.methods
        .registerFruit(name, price, num, typeIs, unit)
        .send({
          from: account,
          to: CA,
          value: web3.utils.toWei(String(price * num), "ether"),
        });
    } else {
      await deployed.methods
        .registerFruit(name, price, num, typeIs, unit)
        .send({ from: account });
    }

    setRegister(false);
  };
  return (
    <div className="registerModal">
      <div className="buySellBtns">
        <label htmlFor="BUY">구매</label>
        <input
          id="BUY"
          type="checkbox"
          value="BUY"
          checked={isChecked}
          onChange={() => {
            setIsChecked(!isChecked);
          }}
          ref={value4}
        />{" "}
        <label htmlFor="SELL">판매</label>
        <input
          id="SELL"
          value="SELL"
          type="checkbox"
          checked={!isChecked}
          onChange={() => {
            setIsChecked(!isChecked);
          }}
        />
      </div>
      <div className="registerDiv">
        과일 이름 :{" "}
        <select ref={value1} style={{ width: 177 }}>
          <option value="carrot">당근</option>
          <option value="apple-whole">사과</option>
          <option value="lemon">레몬</option>
        </select>
      </div>
      <div className="registerDiv">
        {isChecked ? "구매" : "판매"} 수량 :
        <input type="number" ref={value3} />
      </div>
      <div className="registerDiv">
        가격 단위 :{" "}
        <select ref={select} style={{ width: 177 }}>
          <option value="ETH">ETH</option>
          <option value="FRT">FRT</option>
        </select>
      </div>
      <div className="registerDiv">
        {isChecked ? "구매" : "판매"} 가격 :{" "}
        <input type="number" ref={value2} />
      </div>
      <div className="registerBtns">
        <button
          onClick={() => {
            setRegister(false);
          }}
        >
          취소
        </button>
        <button onClick={register}>등록</button>
      </div>
    </div>
  );
};

export default RegisterModal;
