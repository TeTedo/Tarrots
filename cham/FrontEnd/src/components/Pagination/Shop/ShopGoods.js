import React, { useState } from "react";
import { Wrap, Img } from "../Pagination_styledComponents";
const ShopGoods = ({ shopData, change }) => {
  const [enter, setEnter] = useState(false);
  const enterCheck = (e) => {
    e._reactName === "onMouseEnter" ? setEnter(true) : setEnter(false);
  };
  return (
    <>
      <Wrap onMouseEnter={enterCheck} onMouseLeave={enterCheck}>
        <Img src={shopData.image} alt="이미지 오류" />
        {enter ? (
          change ? (
            // 9개일때 마우스엔터
            <></>
          ) : (
            //4개일때 엔터
            <></>
          )
        ) : (
          // 마우스 안올려놨을때
          <></>
        )}
      </Wrap>
    </>
  );
};

export default ShopGoods;
