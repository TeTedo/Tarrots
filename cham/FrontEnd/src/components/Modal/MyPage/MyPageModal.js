import React, { useState } from "react";
import {
  ModalWrap,
  Title,
  PermissionWrap,
  MyPageContent,
  MiniNav,
  MyPageElem,
  MyPageWrap,
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
  const [buyConfirm, setBuyConfirm] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const menu = ["PROFILE", "CART", "ORDER"];
  const elem = [
    <MyPageProfile
      key={0}
      setModify={setModify}
      setModifyData={setModifyData}
    />,
    <MyPageCart
      key={1}
      setBuyConfirm={setBuyConfirm}
      setTotalPrice={setTotalPrice}
    />,
    <MyPageOrder key={2} />,
  ];
  return (
    <ModalWrap onClick={closeModal}>
      <MyPageWrap>
        {modify ? (
          <Modal
            type={"프로필수정확인"}
            setModal={setModify}
            data={modifyData}
          />
        ) : (
          ""
        )}
        {buyConfirm ? (
          <Modal
            type={"장바구니물건구매"}
            setModal={setBuyConfirm}
            data={totalPrice}
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
      </MyPageWrap>
    </ModalWrap>
  );
};

export default MyPageModal;
