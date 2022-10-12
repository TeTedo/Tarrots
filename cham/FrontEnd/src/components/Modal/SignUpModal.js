import React, { useEffect, useRef, useState } from "react";
import { loginAction } from "../../redux/middleware/loginAction";
import {
  ModalWrap,
  Wrap,
  Title,
  Content,
  LabelWrap,
  Label,
  Input,
  InputWrap,
  Btn,
  BtnWrap,
  LastBtn,
} from "./ModalStyledComponents";
import { useDispatch } from "react-redux";
const SignUpModal = ({ closeModal, setModal }) => {
  const inputWrap = useRef(null);
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();
  const moveLeft = () => {
    if (index !== 0) setIndex(index - 1);
  };
  const moveRight = () => {
    if (index !== inputWrap.current.children.length - 1) setIndex(index + 1);
  };
  const signup = (e) => {
    const input = Object.values(inputWrap.current.children).map((v) => v.value);
    const [user_id, user_pw, name, nick_name, mobile_number, email, address] = input;
    dispatch(loginAction.signup({ user_id, user_pw, name, nick_name, mobile_number, email, address }));
    setModal(false);
  };
  return (
    <ModalWrap onClick={closeModal}>
      <Wrap>
        <Title>Sign Up</Title>
        <Content>
          <LabelWrap>
            <Label style={{ backgroundColor: index === 0 ? "green" : "black" }} />
            <Label style={{ backgroundColor: index === 1 ? "green" : "black" }} />
            <Label style={{ backgroundColor: index === 2 ? "green" : "black" }} />
            <Label style={{ backgroundColor: index === 3 ? "green" : "black" }} />
            <Label style={{ backgroundColor: index === 4 ? "green" : "black" }} />
            <Label style={{ backgroundColor: index === 5 ? "green" : "black" }} />
            <Label style={{ backgroundColor: index === 6 ? "green" : "black" }} />
            <Label style={{ backgroundColor: index === 7 ? "green" : "black" }} />
          </LabelWrap>
          <InputWrap ref={inputWrap}>
            <Input placeholder="ID" style={{ display: index === 0 ? "block" : "none" }} />
            <Input placeholder="PassWord" style={{ display: index === 1 ? "block" : "none" }} />
            <Input placeholder="Name" style={{ display: index === 2 ? "block" : "none" }} />
            <Input placeholder="Nick Name" style={{ display: index === 3 ? "block" : "none" }} />
            <Input placeholder="Mobile-number" style={{ display: index === 4 ? "block" : "none" }} />
            <Input placeholder="E-mail" style={{ display: index === 5 ? "block" : "none" }} />
            <Input placeholder="Address" style={{ display: index === 6 ? "block" : "none" }} />
            <LastBtn style={{ display: index === 7 ? "block" : "none" }} onClick={signup}>
              Sign Up!!
            </LastBtn>
          </InputWrap>
          <BtnWrap>
            <Btn onClick={moveLeft}>
              <i className="fa-sharp fa-solid fa-arrow-left"></i>
            </Btn>
            <Btn onClick={moveRight}>
              <i className="fa-solid fa-arrow-right"></i>
            </Btn>
          </BtnWrap>
        </Content>
      </Wrap>
    </ModalWrap>
  );
};

export default SignUpModal;
