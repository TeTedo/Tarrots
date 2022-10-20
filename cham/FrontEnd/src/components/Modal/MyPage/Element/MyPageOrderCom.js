import React, { useContext, useRef } from "react";
import { ComponentWrap, ComponentSpan, Img } from "./MyPageStyledComponents";
import { MakeReview } from "../MyPageModal";
const MyPageOrderCom = ({ data }) => {
  const reivew = useRef(null);
  const { setReview, setReviewData } = useContext(MakeReview);
  const writeReview = () => {
    if (reivew.current.textContent === "미작성") {
      setReviewData(data);
      setReview(true);
    }
  };
  const mouseEnter = (e) => {
    if (reivew.current.textContent === "미작성") {
      e.currentTarget.style.cursor = "pointer";
      e.currentTarget.style.backgroundColor = "gray";
    }
  };
  const mouseLeave = (e) => {
    if (reivew.current.textContent === "미작성") {
      e.currentTarget.style.backgroundColor = "white";
    }
  };
  return (
    <ComponentWrap
      onClick={writeReview}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <ComponentSpan>
        <Img src={Object.values(data)[11]} />
      </ComponentSpan>
      <ComponentSpan>{Object.values(data)[9]}</ComponentSpan>
      <ComponentSpan>{data.num}</ComponentSpan>
      <ComponentSpan>{Object.values(data)[15] * data.num}</ComponentSpan>
      <ComponentSpan ref={reivew}>
        {data.review === "none" ? "미작성" : "작성"}
      </ComponentSpan>
    </ComponentWrap>
  );
};

export default MyPageOrderCom;
