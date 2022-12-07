import React from "react";
import TransactionCom from "./TransactionCom";
import { Wrap, Header, PaginationWrap, Pagination } from "./styledComponents";
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
        <div>구매자 주소</div>
        <div>판매자 주소</div>
        <div>과일</div>
        <div>수량</div>
        <div>가격</div>
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
