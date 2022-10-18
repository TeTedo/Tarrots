import React, { useState } from "react";
import {
  WholeWrap,
  PaginationElem,
  PaginationNum,
} from "./MyPageStyledComponents";
import MyPageCartCom from "./MyPageCartCom";
const MyPagePagination = ({ data }) => {
  const [index, setIndex] = useState(0);
  const dataValue = Object.values(data);
  const pageLength = Math.ceil(dataValue.length / 10);
  const movePage = (e) => {
    setIndex(e.target.textContent - 1);
  };
  return (
    <>
      <WholeWrap>
        {dataValue
          .map((v, idx) => (
            <PaginationElem key={idx}>
              <MyPageCartCom data={v} />
            </PaginationElem>
          ))
          .slice(index * 10, (index + 1) * 10)
          .reverse()}
      </WholeWrap>
      <PaginationElem>
        {new Array(pageLength).fill(0).map((v, idx) => (
          <PaginationNum
            key={idx}
            style={{
              color: idx === index ? "green" : "",
              fontSize: idx === index ? "25px" : "",
            }}
            onClick={movePage}
          >
            {idx + 1}
          </PaginationNum>
        ))}
      </PaginationElem>
    </>
  );
};

export default MyPagePagination;
