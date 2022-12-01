import React, { useContext, useEffect, useState } from "react";
import RegisterModal from "./RegisterModal";
import { DeployedContext } from "../App";
const Header = () => {
  const [register, setRegister] = useState(false);
  const [balance, setBalance] = useState();
  const { web3, account, deployed } = useContext(DeployedContext);
  const [hasFruit, setHasFruit] = useState({});
  useEffect(() => {
    if (!account) return;
    const init = async () => {
      const balance = await web3.eth.getBalance(account);
      setBalance((balance / 10 ** 18).toFixed(2));
    };
    init();
  }, [account]);
  useEffect(() => {
    (async () => {
      if (!deployed) return;
      const getHasFruit = await deployed.methods
        .hasFruit()
        .call({ from: account });
      const getFruitWallet = await deployed.methods
        .getFruitWallet()
        .call({ from: account });
      let temp = {};
      for (let i = 0; i < getHasFruit.length; i++) {
        temp[getHasFruit[i]] = getFruitWallet[i];
      }
      setHasFruit(temp);
    })();
  }, [deployed]);
  return (
    <div className="Header">
      <div>주소 : {account}</div>
      <div>잔액 : {balance}ETH</div>
      <div>
        보유 과일
        <div></div>
        {Object.keys(hasFruit).map((v, idx) => (
          <div key={idx}>
            {v} : {hasFruit[v]}개
          </div>
        ))}
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
  );
};

export default Header;
