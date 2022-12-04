import React, { useContext, useEffect, useRef, useState } from "react";
import {
  TokenWrap,
  TokenBtnWrap,
  SwapWrap,
  SwapIcon,
  IconImg,
  SwapToken,
  TokenSwapWrap,
  TokenIcon,
  TokenSymbol,
  SwapInput,
  MaxBtn,
} from "../shopstyledComponents";
import { DeployedContext } from "App";
const Token = () => {
  const { deployed, account, CA } = useContext(DeployedContext);
  const [pos, setPos] = useState(true);
  const [up, setUp] = useState({});
  const [down, setDown] = useState({});
  const value1 = useRef();
  const value2 = useRef();
  const change = () => {
    const sym = pos ? "ETH" : "FRT";
    const counter = !pos ? "ETH" : "FRT";
    setUp({ sym: counter, value: value2.current.value });
    setDown({ sym: sym, value: value1.current.value });
    setPos(!pos);
  };
  const swap = async () => {
    if (up.sym === "ETH") {
      await deployed.methods.transferEthToFrt().send({
        from: account,
        to: CA,
        value: up.value * 10 ** 18,
      });
    } else {
      await deployed.methods.transferFrtToEth(up.value).send({
        from: account,
        to: CA,
      });
    }
  };
  const input1 = () => {
    const sym = pos ? "ETH" : "FRT";
    const counter = !pos ? "ETH" : "FRT";
    setUp({ sym, value: value1.current.value });
    value2.current.value = pos
      ? value1.current.value * 200
      : value1.current.value / 200;
    setDown({ sym: counter, value: value2.current.value });
  };
  const input2 = () => {
    const sym = !pos ? "ETH" : "FRT";
    const counter = pos ? "ETH" : "FRT";
    setDown({ sym, value: value2.current.value });
    value1.current.value = !pos
      ? value2.current.value * 200
      : value2.current.value / 200;
    setUp({ sym: counter, value: value1.current.value });
  };
  useEffect(() => {
    const temp = value1.current.value;
    value1.current.value = value2.current.value;
    value2.current.value = temp;
  }, [pos]);
  useEffect(() => {
    const sym = pos ? "ETH" : "FRT";
    setUp({ sym: sym, value: 0 });
    value1.current.focus();
  }, []);
  return (
    <TokenWrap>
      <SwapWrap>
        <SwapToken>
          <TokenSwapWrap>
            <TokenIcon>
              <IconImg
                src={pos ? "/assets/eth.png" : "/assets/FruitLogo.png"}
              />
            </TokenIcon>
            <TokenSymbol>{pos ? "ETH" : "FRT"}</TokenSymbol>
            <SwapInput ref={value1} onChange={input1} type="number" min="0" />
            <MaxBtn>MAX</MaxBtn>
          </TokenSwapWrap>
        </SwapToken>
        <SwapIcon>
          <IconImg src="/assets/arrow.png" onClick={change} />
        </SwapIcon>
        <SwapToken>
          <TokenSwapWrap>
            <TokenIcon>
              <IconImg
                src={pos ? "/assets/FruitLogo.png" : "/assets/eth.png"}
              />
            </TokenIcon>
            <TokenSymbol>{pos ? "FRT" : "ETH"}</TokenSymbol>
            <SwapInput
              ref={value2}
              onChange={input2}
              style={{ width: 280 }}
              type="number"
            />
          </TokenSwapWrap>
        </SwapToken>
      </SwapWrap>
      <TokenBtnWrap onClick={swap}>Change</TokenBtnWrap>
    </TokenWrap>
  );
};

export default Token;
