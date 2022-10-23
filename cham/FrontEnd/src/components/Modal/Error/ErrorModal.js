import React from "react";
import {
  ModalWrap,
  Wrap,
  ErrorTitle,
  ErrorMsg,
  Title,
  Btn,
} from "./ErrorStyledComponent";
const ErrorModal = ({ closeModal }) => {
  return (
    <ModalWrap onClick={closeModal}>
      <Wrap>
        <Title>REPORT ERROR</Title>
        <ErrorTitle placeholder="에러 제목" />
        <ErrorMsg placeholder="에러 내용" />
        <Btn>에러 신고</Btn>
      </Wrap>
    </ModalWrap>
  );
};

export default ErrorModal;
