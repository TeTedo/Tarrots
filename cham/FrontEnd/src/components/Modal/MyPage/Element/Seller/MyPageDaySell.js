import React, { useState } from "react";

import {
  WholeWrap,
  SellDataDiv,
  SellDiv,
  SellDivReverse,
  CallenderDayNav,
  CallenderDayNavSpan,
  CallenderSellWrap,
  CallenderSell,
  CallenderSellImg,
  CallenderPagination,
  CallenderPaginationSpan,
} from "../MyPageStyledComponents";
const MyPageDaySell = ({ dayData, month, year, date }) => {
  const [index, setIndex] = useState(0);
  const totalPrice = dayData
    .map((v) => +v["ShopBuys.num"] * +v.price)
    .reduce((acc, cur) => acc + cur, 0);
  const length = Math.ceil(dayData.length / 7);
  return (
    <WholeWrap>
      <SellDataDiv>
        <SellDiv>
          {year}년 {month}월 {date}일
        </SellDiv>
        <SellDivReverse>{totalPrice}원</SellDivReverse>
        <CallenderDayNav>
          <CallenderDayNavSpan>상품</CallenderDayNavSpan>
          <CallenderDayNavSpan>이름</CallenderDayNavSpan>
          <CallenderDayNavSpan>수량</CallenderDayNavSpan>
          <CallenderDayNavSpan>가격</CallenderDayNavSpan>
        </CallenderDayNav>
        {dayData.map((v, idx) => (
          <CallenderSellWrap key={idx}>
            <CallenderSell>
              <CallenderSellImg src={v.image} />
            </CallenderSell>
            <CallenderSell>{v.name}</CallenderSell>
            <CallenderSell>{v["ShopBuys.num"]}</CallenderSell>
            <CallenderSell>{v["ShopBuys.num"] * v.price}</CallenderSell>
          </CallenderSellWrap>
        ))}
        <CallenderPagination>
          {new Array(length).fill(0).map((v, idx) => (
            <CallenderPaginationSpan
              key={idx}
              onClick={() => {
                setIndex(idx);
              }}
              style={{
                color: index === idx ? "green" : "black",
                fontSize: index === idx ? "25px" : "",
              }}
            >
              1
            </CallenderPaginationSpan>
          ))}
        </CallenderPagination>
      </SellDataDiv>
    </WholeWrap>
  );
};

export default MyPageDaySell;
