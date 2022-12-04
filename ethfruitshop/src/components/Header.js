import React, { useContext, useEffect, useState } from "react";
import RegisterModal from "./RegisterModal";
import { DeployedContext } from "../App";
import HasModal from "./HasModal";
const Header = () => {
  const [register, setRegister] = useState(false);
  const [balance, setBalance] = useState();
  const { web3, account, deployed } = useContext(DeployedContext);
  const [hasFruit, setHasFruit] = useState(false);
  useEffect(() => {
    if (!account) return;
    const init = async () => {
      const balance = await web3.eth.getBalance(account);
      setBalance((balance / 10 ** 18).toFixed(2));
    };
    init();
  }, [account]);
  return (
    <>
      {hasFruit ? <HasModal setHasFruit={setHasFruit} /> : ""}
      <div className="Header">
        <div>주소 : {account}</div>
        <div>잔액 : {balance}ETH</div>
        <div
          onClick={() => {
            setHasFruit(true);
          }}
          style={{ cursor: "pointer" }}
        >
          보유 과일
        </div>
        <button
          onClick={() => {
            setRegister(!register);
          }}
        >
          과일 등록
        </button>
        {register ? <RegisterModal setRegister={setRegister} /> : ""}
      </div>
    </>
  );
};

export default Header;
