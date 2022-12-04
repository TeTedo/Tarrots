import React, { useContext, useEffect, useRef, useState } from "react";
import {
  FruitsComWrap,
  FruitsTop,
  FruitsBottom,
  FruitAttr,
  FruitBuy,
  FruitBuyBtn,
  FruitInput,
  FruitBuyTypeWrap,
} from "../shopstyledComponents";
import { DeployedContext } from "App";
const FruitsCom = ({ name }) => {
  const [shopInfo, setShopInfo] = useState();
  const [isChecked, setIsChecked] = useState(true);
  const input = useRef();
  const { deployed, account, CA } = useContext(DeployedContext);
  useEffect(() => {
    (async () => {
      if (!deployed) return;
      const getInfo = await deployed.methods.getFruitShop(name).call();
      setShopInfo(getInfo);
    })();
  }, [deployed]);

  const buyFruit = async () => {
    const amount = input.current.value;
    if (!amount) {
      alert("1개 이상 구매해주세요");
      return;
    }
    if (isChecked) {
      await deployed.methods.buyFruitsByETH(name, amount).send({
        from: account,
        to: CA,
        value: amount * shopInfo.price,
      });
    } else {
      await deployed.methods.buyFruitsByFRT(name, amount).send({
        from: account,
        to: CA,
      });
    }
  };
  return (
    <>
      {shopInfo && (
        <FruitsComWrap>
          <FruitsTop>
            <i className={`fa-solid fa-10x fa-beat fa-${name}`}></i>
          </FruitsTop>
          <FruitsBottom>
            <FruitAttr>남은 수량 : {shopInfo?.num} 개</FruitAttr>
            <FruitAttr>
              가격 : {shopInfo?.price / 10 ** 18} ETH or{" "}
              {(shopInfo?.price / 10 ** 18) * 200} FRT
            </FruitAttr>
            <FruitBuyTypeWrap>
              <label htmlFor={name}>ETH 구매</label>
              <input
                id={name}
                type="checkbox"
                checked={isChecked}
                onChange={() => {
                  setIsChecked(!isChecked);
                }}
              ></input>
              <label htmlFor={name}>FRT 구매</label>
              <input
                id={name}
                type="checkbox"
                checked={!isChecked}
                onChange={() => {
                  setIsChecked(!isChecked);
                }}
              ></input>
            </FruitBuyTypeWrap>
            <FruitAttr>
              구매 수량 :{" "}
              <FruitInput
                type="number"
                ref={input}
                min="0"
                max={shopInfo?.num}
              />
            </FruitAttr>
            <FruitBuy>
              <FruitBuyBtn onClick={buyFruit}>구매</FruitBuyBtn>
            </FruitBuy>
          </FruitsBottom>
        </FruitsComWrap>
      )}
    </>
  );
};

export default FruitsCom;
