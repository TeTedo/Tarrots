import React from "react";
import LoginModal from "./LoginAction/LoginModal";
import SignUpModal from "./SignUpModal/SignUpModal";
import LogoutModal from "./LoginAction/LogoutModal";
import UploadGoods from "./UploadGoods/UploadGoods";
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
    default:
      return;
  }
};

export default Modal;
