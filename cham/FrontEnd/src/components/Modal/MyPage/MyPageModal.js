import React, { useState } from "react";
import {
  ModalWrap,
  Title,
  PermissionWrap,
  MyPageContent,
  MiniNav,
  MyPageElem,
} from "../ModalStyledComponents";
import MyPageMiniNav from "./MyPageMiniNav";
import { shopAction } from "redux/middleware/shopAction";
import MyPageCart from "./Element/MyPageCart";
import MyPageProfile from "./Element/MyPageProfile";
import MyPageOrder from "./Element/MyPageOrder";
const MyPageModal = ({ closeModal, setModal }) => {
  const [index, setIndex] = useState(0);
  const menu = ["PROFILE", "CART", "ORDER"];
  const elem = [
    <MyPageProfile key={0} />,
    <MyPageCart key={1} />,
    <MyPageOrder key={2} />,
  ];
  return (
    <ModalWrap onClick={closeModal}>
      <PermissionWrap>
        <Title>MY PAGE</Title>
        <MyPageContent>
          <MiniNav>
            {menu.map((v, idx) => (
              <MyPageMiniNav
                text={v}
                key={idx}
                setIndex={setIndex}
                index={index}
                idx={idx}
              />
            ))}
          </MiniNav>
          <MyPageElem>
            {elem.map((v, idx) => (idx === index ? v : ""))}
          </MyPageElem>
        </MyPageContent>
      </PermissionWrap>
    </ModalWrap>
  );
};

export default MyPageModal;
