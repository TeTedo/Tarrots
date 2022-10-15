import React from "react";
import LoginModal from "./LoginAction/LoginModal";
import SignUpModal from "./SignUpModal/SignUpModal";
import LogoutModal from "./LoginAction/LogoutModal";
import UploadGoods from "./Shop/UploadGoods/UploadGoods";
import ShopMainSlide from "./Shop/Slide/ShopMainSlide";
import Permission from "./Shop/Permission/Permission";
import PermissionCheck from "./Shop/Permission/PermissionCheck";
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
    case "물건올리기":
      return <UploadGoods closeModal={closeModal} setModal={setModal} />;
    case "슬라이드올리기":
      return <ShopMainSlide closeModal={closeModal} setModal={setModal} />;
    case "판매승인":
      return <Permission closeModal={closeModal} setModal={setModal} />;
    case "판매승인 확인":
      return <PermissionCheck closeModal={closeModal} setModal={setModal} />;
    default:
      return;
  }
};

export default Modal;
