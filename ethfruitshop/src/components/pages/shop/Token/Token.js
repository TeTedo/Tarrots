import React, { useState } from "react";
import {
  TokenWrap,
  TokenBtnWrap,
  SwapWrap,
  SwapIcon,
  IconImg,
} from "../shopstyledComponents";
import SwapCom from "./SwapCom";
const Token = () => {
  const [pos, setPos] = useState(true);
  const [up, setUp] = useState({});
  const [down, setDown] = useState({});
  return (
    <TokenWrap>
      <SwapWrap>
        {pos ? (
          <SwapCom src={"/assets/eth.png"} sym="ETH" pos={pos} set={setUp} />
        ) : (
          <SwapCom
            src={"/assets/FruitLogo.png"}
            sym="FRT"
            pos={pos}
            set={setUp}
          />
        )}
        <SwapIcon>
          <IconImg
            src="/assets/arrow.png"
            onClick={() => {
              setPos(!pos);
            }}
          />
        </SwapIcon>
        {pos ? (
          <SwapCom
            src={"/assets/FruitLogo.png"}
            sym="FRT"
            pos={pos}
            set={setDown}
          />
        ) : (
          <SwapCom src={"/assets/eth.png"} sym="ETH" pos={pos} set={setDown} />
        )}
      </SwapWrap>
      <TokenBtnWrap>Change</TokenBtnWrap>
    </TokenWrap>
  );
};

export default Token;
