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
import { useDispatch } from "react-redux";
const BuyConfirm = ({ closeModal, setModal }) => {
  const dispatch = useDispatch();
  const [num, stateNum] = useState(1);
  const minusNum = () => {
    if (num !== 1) stateNum(num - 1);
  };
  const plusNum = () => stateNum(num + 1);
  const BUY = () => {
    setModal(false);
  };
  return (
    <ModalWrap onClick={closeModal}>
      <Wrap>
        <Title>TO BUY</Title>
        <Content>
          <div style={{ display: "flex" }}>
            <LabelControl onClick={minusNum}>-</LabelControl>
            <LabelInput htmlFor="num">{num}</LabelInput>
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
