import React from "react";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";
import LogoutModal from "./LogoutModal";
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
  }
};

export default Modal;
