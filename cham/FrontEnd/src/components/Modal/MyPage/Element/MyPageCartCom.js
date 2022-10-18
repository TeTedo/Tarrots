import React, { useEffect, useState } from "react";
import {
  ComponentWrap,
  ComponentSpan,
  Img,
  NumCount,
} from "./MyPageStyledComponents";
const MyPageCartCom = ({ data }) => {
  const [num, setNum] = useState(data.num);
  const minus = () => {
    if (num !== 0) setNum(num - 1);
  };
  const plus = () => {
    setNum(num + 1);
  };
  return (
    <ComponentWrap>
      <ComponentSpan>
        <Img src={Object.values(data)[10]} />
      </ComponentSpan>
      <ComponentSpan>{Object.values(data)[8]}</ComponentSpan>
      <ComponentSpan>
        <NumCount onClick={minus}>-</NumCount>
        {num}
        <NumCount onClick={plus}>+</NumCount>
      </ComponentSpan>
      <ComponentSpan>{+Object.values(data)[14] * num}원</ComponentSpan>
    </ComponentWrap>
  );
};

export default MyPageCartCom;
