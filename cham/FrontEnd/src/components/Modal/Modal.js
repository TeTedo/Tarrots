import React from "react";
import LoginModal from "./LoginAction/LoginModal";
import SignUpModal from "./SignUpModal/SignUpModal";
import LogoutModal from "./LoginAction/LogoutModal";
import UploadGoods from "./Shop/UploadGoods/UploadGoods";
import ShopMainSlide from "./Shop/Slide/ShopMainSlide";
import Permission from "./Shop/Permission/Permission";
import PermissionCheck from "./Shop/Permission/PermissionCheck";
import ShopSlideAdd from "./Shop/Slide/ShopSlideAdd";
import MyPageModal from "./MyPage/MyPageModal";
const Modal = ({ setModal, type }) => {
  const closeModal = (e) => {
    if (e.currentTarget === e.target) setModal(false);
  };
  switch (type) {
    case "SIGN UP":
      return <SignUpModal closeModal={closeModal} setModal={setModal} />;
    case "LOGIN":
      return <LoginModal closeModal={closeModal} setModal={setModal} />;
    case "LOGOUT":
      return <LogoutModal closeModal={closeModal} setModal={setModal} />;
    case "MY PAGE":
      return <MyPageModal closeModal={closeModal} setModal={setModal} />;
    case "물건올리기":
      return <UploadGoods closeModal={closeModal} setModal={setModal} />;
    case "슬라이드 관리":
      return <ShopMainSlide closeModal={closeModal} setModal={setModal} />;
    case "판매승인":
      return <Permission closeModal={closeModal} setModal={setModal} />;
    case "판매승인 확인":
      return <PermissionCheck closeModal={closeModal} setModal={setModal} />;
    case "슬라이드추가":
      return <ShopSlideAdd closeModal={closeModal} setModal={setModal} />;
    default:
      return;
  }
};

export default Modal;
