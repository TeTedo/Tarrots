import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { shopAction } from "redux/middleware/shopAction";
import { loginAction } from "redux/middleware/loginAction";
import MyPageCalender from "./MyPageCalender";
import {
  WholeWrap,
  SellDataDiv,
  SellDiv,
  SellDivReverse,
} from "./MyPageStyledComponents";
const MyPageSeller = () => {
  const dispatch = useDispatch();
  const buyData = useSelector((state) => state.shopCart);
  const user_id = useSelector((state) => state.login.user_id);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);
  useEffect(() => {
    dispatch(loginAction.loginCheck()).then(() => {
      dispatch(shopAction.boughtData(user_id));
    });
  }, []);
  return (
    <WholeWrap>
      <SellDataDiv>
        <SellDiv>총 판매금액</SellDiv>
        <SellDivReverse>100000원</SellDivReverse>
      </SellDataDiv>
      <SellDataDiv>
        <SellDiv>
          {year}년 {month}월 판매금액
        </SellDiv>
        <SellDivReverse>290290원</SellDivReverse>
        <MyPageCalender
          month={month}
          setMonth={setMonth}
          year={year}
          setYear={setYear}
        ></MyPageCalender>
      </SellDataDiv>
    </WholeWrap>
  );
};

export default MyPageSeller;
