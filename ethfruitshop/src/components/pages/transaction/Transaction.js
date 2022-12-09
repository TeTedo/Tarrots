import React from "react";
import TransactionCom from "./TransactionCom";
import {
  Wrap,
  Header,
  HeaderDiv,
  PaginationWrap,
  Pagination,
} from "./styledComponents";
import { DeployedContext } from "App";
import { useContext } from "react";
import { useState } from "react";
const Transaction = () => {
  const { logs } = useContext(DeployedContext);
  const [index, setIndex] = useState(0);
  const pageLength = Math.ceil(logs.length / 5);
  return (
    <Wrap>
      <Header>
        <HeaderDiv>구매자 주소</HeaderDiv>
        <HeaderDiv>판매자 주소</HeaderDiv>
        <HeaderDiv>과일</HeaderDiv>
        <HeaderDiv>수량</HeaderDiv>
        <HeaderDiv>가격</HeaderDiv>
      </Header>
      {logs &&
        logs
          .map((v, idx) => <TransactionCom key={idx} data={v} />)
          .reverse()
          .slice(index * 5, (index + 1) * 5)}

      <PaginationWrap>
        {new Array(pageLength).fill(0).map((v, idx) => (
          <Pagination
            style={{ fontWeight: index === idx ? "bold" : "" }}
            key={idx}
            onClick={() => {
              setIndex(idx);
            }}
          >
            {idx + 1}
          </Pagination>
        ))}
      </PaginationWrap>
    </Wrap>
  );
};

export default Transaction;
