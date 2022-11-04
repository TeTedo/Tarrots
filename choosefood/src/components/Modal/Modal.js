import React from "react";
import CheckModal from "./CheckModal";
import AddModal from "./AddModal";
const Modal = ({ type, setModal }) => {
  const closeModal = (e) => {
    if (e.currentTarget === e.target) {
      setModal(false);
    }
  };
  switch (type) {
    case "add":
      return <AddModal closeModal={closeModal} setModal={setModal}></AddModal>;
    case "check":
      return <CheckModal setModal={setModal}></CheckModal>;
    default:
      return;
  }
};

export default Modal;
