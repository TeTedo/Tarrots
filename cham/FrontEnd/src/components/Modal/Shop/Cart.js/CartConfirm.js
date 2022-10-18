import React, { useState } from "react";
import {
  ModalWrap,
  Wrap,
  Title,
  Content,
  LastBtn,
  BtnWrap,
  LabelInput,
  LabelControl,
} from "../../ModalStyledComponents";
import { useDispatch, useSelector } from "react-redux";
import { shopAction } from "redux/middleware/shopAction";
const CartConfirm = ({ closeModal, setModal, data }) => {
  const dispatch = useDispatch();
  const [num, stateNum] = useState(1);
  const minusNum = () => {
    if (num !== 1) stateNum(num - 1);
  };
  const plusNum = () => stateNum(num + 1);
  const userData = useSelector((state) => state.login.user_id);
  const addToCart = () => {
    dispatch(shopAction.addToCart({ ...data, userData, num }));
    setModal(false);
  };
  return (
    <ModalWrap onClick={closeModal}>
      <Wrap>
        <Title>TO CART</Title>
        <Content>
          <div style={{ display: "flex" }}>
            <LabelControl onClick={minusNum}>-</LabelControl>
            <LabelInput htmlFor="num">{num}</LabelInput>
            <LabelControl onClick={plusNum}>+</LabelControl>
          </div>
          <BtnWrap>
            <LastBtn onClick={addToCart}>ADD</LastBtn>
            <LastBtn
              onClick={() => {
                setModal(false);
              }}
            >
              No
            </LastBtn>
          </BtnWrap>
        </Content>
      </Wrap>
    </ModalWrap>
  );
};

export default CartConfirm;
