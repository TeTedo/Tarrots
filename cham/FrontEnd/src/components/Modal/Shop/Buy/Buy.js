import React, { useState } from "react";
import {
  ModalWrap,
  Wrap,
  Title,
  Content,
  LastBtn,
  BtnWrap,
  ContentWrap,
} from "../../ModalStyledComponents";
import { useDispatch, useSelector } from "react-redux";
import { shopAction } from "redux/middleware/shopAction";
const Buy = ({ closeModal, setModal, data }) => {
  const dispatch = useDispatch();
  const buyData = useSelector((state) => state.buying);
  const BUY = () => {
    if (buyData[0]) {
      dispatch(shopAction.buyingData(buyData)).then(() => {
        dispatch({ type: "SHOPBUYEND" });
      });
    } else {
      alert("구매할 물건을 선택해주세요.");
    }
    setModal(false);
  };
  return (
    <ModalWrap onClick={closeModal}>
      <Wrap>
        <Title>TO BUY</Title>
        <Content>
          <div style={{ display: "flex" }}>
            <ContentWrap>총 금액 : {data}원</ContentWrap>
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

export default Buy;
