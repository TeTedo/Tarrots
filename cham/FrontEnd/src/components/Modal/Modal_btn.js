import React, { useState } from "react";
import Modal from "./Modal";
const Modal_btn = ({ text, className }) => {
  const [modal, setModal] = useState(false);
  const showModal = () => {
    setModal(true);
  };
  return (
    <>
      <button className={className} onClick={showModal}>
        {text}
      </button>
      {modal ? <Modal type={text} setModal={setModal} /> : ""}
    </>
  );
};

export default Modal_btn;
