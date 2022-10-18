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
import { useDispatch } from "react-redux";
const Buy = ({ closeModal, setModal, data }) => {
  const dispatch = useDispatch();
  const BUY = () => {
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
