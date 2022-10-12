import React, { useState } from "react";
import Modal from "../Modal/Modal";
const NavBar_login_btn = ({ text }) => {
  const [modal, setModal] = useState(false);
  const showModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <button className="navBar_btns__" onClick={showModal}>
        {text}
      </button>
      {modal ? <Modal type={text} setModal={setModal} /> : ""}
    </>
  );
};

export default NavBar_login_btn;
