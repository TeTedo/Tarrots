import React, { useContext, useRef } from "react";
import { useDispatch } from "react-redux";
import { DeployedContext } from "../App";
import FroutShopContract from "../contracts/FruitShop.json";
const RegisterModal = ({ setRegister }) => {
  const { deployed, web3, account } = useContext(DeployedContext);
  const value1 = useRef();
  const value2 = useRef();
  const value3 = useRef();
  const value4 = useRef();
  const dispatch = useDispatch();
  const register = async () => {
    const name = value1.current.value.toString();
    const price = value2.current.value;
    const num = value3.current.value;
    const buyPrice = value4.current.value;
    if (!name || !price || !num || !buyPrice) {
      alert("모든 값을 입력해주세요.");
      return;
    }
    const data = await deployed.methods
      .registerFruit(name, price, num, buyPrice)
      .encodeABI();
    const nonce = await web3.eth.getTransactionCount(account);
    const networkId = await web3.eth.net.getId();
    const CA = FroutShopContract.networks[networkId].address;
    await web3.eth.sendTransaction({ nonce, from: account, to: CA, data });
    // dispatch({ type: "ADD", payload: { name, price, num, buyPrice } });
    setRegister(false);
  };
  return (
    <div className="registerModal">
      <div className="registerDiv">
        과일 이름 : <input type="text" ref={value1} />
      </div>
      <div className="registerDiv">
        판매 가격 : <input type="number" ref={value2} />
      </div>
      <div className="registerDiv">
        판매 수량 : <input type="number" ref={value3} />
      </div>
      <div className="registerDiv">
        매입 가격 : <input type="number" ref={value4} />
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
