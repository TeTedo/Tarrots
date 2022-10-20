import React, { createContext, useState } from "react";
import {
  ModalWrap,
  Title,
  MyPageContent,
  MiniNav,
  MyPageElem,
  MyPageWrap,
} from "../ModalStyledComponents";
import MyPageMiniNav from "./MyPageMiniNav";
import MyPageCart from "./Element/Cart/MyPageCart";
import MyPageProfile from "./Element/Profile/MyPageProfile";
import MyPageOrder from "./Element/Order/MyPageOrder";
import Modal from "../Modal";
import MyPageSellerEnter from "./Element/Seller/MyPageSellerEnter";
import { useSelector } from "react-redux";
export const BuyContext = createContext();
export const MakeReview = createContext();
const MyPageModal = ({ closeModal, setModal }) => {
  const [index, setIndex] = useState(0);
  const [modify, setModify] = useState(false);
  const [modifyData, setModifyData] = useState(null);
  const [buyConfirm, setBuyConfirm] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [review, setReview] = useState(false);
  const [reviewData, setReviewData] = useState(null);
  const [seller, setSeller] = useState(false);
  const [sellerData, setSellerData] = useState(null);
  const user_type = useSelector((state) => state.login.type);
  const confirmSeller = user_type === "S" ? true : false;
  const menu = confirmSeller
    ? ["PROFILE", "CART", "ORDER", "SELLER"]
    : ["PROFILE", "CART", "ORDER"];
  const elem = [
    <MyPageProfile
      key={0}
      setModify={setModify}
      setModifyData={setModifyData}
      setSeller={setSeller}
      setSellerData={setSellerData}
    />,
    <BuyContext.Provider key={1} value={{ buyConfirm }}>
      <MyPageCart setBuyConfirm={setBuyConfirm} setTotalPrice={setTotalPrice} />
    </BuyContext.Provider>,
    <MakeReview.Provider key={2} value={{ setReview, setReviewData }}>
      <MyPageOrder />
    </MakeReview.Provider>,
    <MyPageSellerEnter key={3}></MyPageSellerEnter>,
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
        {review ? (
          <Modal type={"SHOP리뷰작성"} setModal={setReview} data={reviewData} />
        ) : (
          ""
        )}
        {seller ? (
          <Modal type={"판매자신청"} setModal={setSeller} data={sellerData} />
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
