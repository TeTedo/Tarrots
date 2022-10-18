import React, { useState } from "react";
import {
  WholeWrap,
  PaginationElem,
  PaginationNum,
} from "./MyPageStyledComponents";
const MyPagePagination = ({ component: Component, data }) => {
  const [index, setIndex] = useState(0);
  const dataValue = Object.values(data);

  return (
    <WholeWrap>
      <PaginationElem>1</PaginationElem>
      <PaginationElem>1</PaginationElem>
      <PaginationElem>1</PaginationElem>
      <PaginationElem>1</PaginationElem>
      <PaginationElem>1</PaginationElem>
      <PaginationElem>1</PaginationElem>
      <PaginationElem>1</PaginationElem>
      <PaginationElem>1</PaginationElem>
      <PaginationElem>1</PaginationElem>
      <PaginationElem>1</PaginationElem>
      <PaginationElem>Index</PaginationElem>
    </WholeWrap>
  );
};

export default MyPagePagination;
