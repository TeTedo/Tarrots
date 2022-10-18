import React, { useEffect } from "react";
import { WholeWrap, BuyBtn } from "./MyPageStyledComponents";
import MyPagePagination from "./MyPagePagination";
import { useDispatch, useSelector } from "react-redux";
import { shopAction } from "redux/middleware/shopAction";
const MyPageCart = () => {
  const dispatch = useDispatch();
  const user_id = useSelector((state) => state.login.user_id);
  useEffect(() => {
    dispatch(shopAction.getCartData(user_id));
  }, []);
  const cartData = useSelector((state) => state.shopCart);
  return (
    <WholeWrap>
      <MyPagePagination
        component={""}
        data={cartData ? cartData : {}}
      ></MyPagePagination>
      <BuyBtn>Buy</BuyBtn>
    </WholeWrap>
  );
};

export default MyPageCart;
