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
import MyPageCart from "./Element/MyPageCart";
import MyPageProfile from "./Element/MyPageProfile";
import MyPageOrder from "./Element/MyPageOrder";
import Modal from "../Modal";
const MyPageModal = ({ closeModal, setModal }) => {
  const [index, setIndex] = useState(0);
  const [modify, setModify] = useState(false);
  const [modifyData, setModifyData] = useState(null);
  const menu = ["PROFILE", "CART", "ORDER"];
  const elem = [
    <MyPageProfile
      key={0}
      setModify={setModify}
      setModifyData={setModifyData}
    />,
    <MyPageCart key={1} />,
    <MyPageOrder key={2} />,
  ];
  return (
    <ModalWrap onClick={closeModal}>
      <PermissionWrap>
        {modify ? (
          <Modal
            type={"프로필수정확인"}
            setModal={setModify}
            data={modifyData}
          />
        ) : (
          ""
        )}
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
