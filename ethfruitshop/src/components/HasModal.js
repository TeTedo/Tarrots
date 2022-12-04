import React, { useContext, useEffect, useState } from "react";
import { DeployedContext } from "App";
import { isCompositeComponent } from "react-dom/test-utils";
const HasModal = ({ setHasFruit }) => {
  const { deployed, account, web3 } = useContext(DeployedContext);
  const [fruitList, setFruitList] = useState({});
  const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      setHasFruit(false);
    }
  };
  useEffect(() => {
    (async () => {
      if (!deployed) return;
      const hasFruit = await deployed.methods.hasFruit().call();
      const fruitWallet = await deployed.methods.getFruitWallet().call();
      let temp = {};
      for (let i = 0; i < hasFruit.length; i++) {
        temp[hasFruit[i]] = fruitWallet[i];
      }
      setFruitList(temp);
    })();
  }, [deployed]);
  return (
    <div className="modalWrap" onClick={closeModal}>
      <div className="hasWrap">
        {Object.keys(fruitList).map((v, idx) => (
          <div className="hasFruit" key={idx}>
            <span className="hasFruitIcon">
              <i className={`fa-solid fa-3x fa-beat fa-${v}`}></i>
            </span>
            <span className="hasFruitnum">{fruitList[v]} 개</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HasModal;
