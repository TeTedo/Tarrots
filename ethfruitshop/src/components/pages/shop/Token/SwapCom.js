import React, { useRef } from "react";
import {
  SwapToken,
  TokenSwapWrap,
  TokenIcon,
  IconImg,
  TokenSymbol,
  SwapInput,
  MaxBtn,
} from "../shopstyledComponents";
const SwapCom = ({ src, sym, pos, set }) => {
  const value = useRef();
  const change = () => {
    set({ value: value.current.value });
  };
  return (
    <SwapToken>
      <TokenSwapWrap>
        <TokenIcon>
          <IconImg src={src} />
        </TokenIcon>
        <TokenSymbol>{sym}</TokenSymbol>
        <SwapInput onChange={change} ref={value} />
        <MaxBtn>MAX</MaxBtn>
      </TokenSwapWrap>
    </SwapToken>
  );
};

export default SwapCom;
