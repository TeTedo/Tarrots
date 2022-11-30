import React, { useContext, useEffect, useState } from "react";
import RegisterModal from "./RegisterModal";
import { DeployedContext } from "../App";
const Header = () => {
  const [register, setRegister] = useState(false);
  const [balance, setBalance] = useState();
  const { web3, account } = useContext(DeployedContext);
  useEffect(() => {
    const init = async () => {
      const balance = await web3?.eth.getBalance(account);
      setBalance((balance / 10 ** 18).toFixed(2));
    };
    init();
  }, [account]);
  return (
    <div className="Header">
      <div>주소 : {account}</div>
      <div>잔액 : {balance}ETH</div>
      <div>보유 과일 : </div>
      <button
        onClick={() => {
          setRegister(!register);
        }}
      >
        과일 등록
      </button>
      {register ? <RegisterModal setRegister={setRegister} /> : ""}
    </div>
  );
};

export default Header;
