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
import { loginAction } from "redux/middleware/loginAction";
const BuyConfirm = ({ closeModal, setModal, data }) => {
  const dispatch = useDispatch();
  const [num, stateNum] = useState(1);
  const minusNum = () => {
    if (num !== 1) stateNum(num - 1);
  };
  const plusNum = () => stateNum(num + 1);
  const user_id = useSelector((state) => state.login.user_id);
  const BUY = () => {
    dispatch(loginAction.loginCheck()).then(() => {
      dispatch(
        shopAction.buyingData([
          {
            shop_id: data.id,
            user_id,
            num,
          },
        ])
      );
    });
    setModal(false);
  };
  return (
    <ModalWrap onClick={closeModal}>
      <Wrap>
        <Title>TO BUY</Title>
        <Content>
          <div style={{ display: "flex" }}>
            <LabelControl onClick={minusNum}>-</LabelControl>
            <LabelInput>{num}</LabelInput>
            <LabelControl onClick={plusNum}>+</LabelControl>
          </div>
          <BtnWrap>
            <LastBtn onClick={BUY}>BUY</LastBtn>
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

export default BuyConfirm;
