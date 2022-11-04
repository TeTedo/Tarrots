import "./App.css";
import React, { useState } from "react";
import Selector from "./components/Selector";
import Modal from "./components/Modal/Modal";
import { useDispatch } from "react-redux";
import { foodAction } from "./redux/middleware/foodAction";
function App() {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [type, setType] = useState("");
  const add = () => {
    setModal(true);
    setType("add");
  };
  const check = () => {
    setModal(true);
    setType("check");
    dispatch(foodAction.GetFoodData());
  };
  return (
    <div className="App">
      {modal ? <Modal setModal={setModal} type={type} /> : ""}
      <div className="Wrap">
        <nav>
          <div className="navMenu" onClick={add}>
            <i className="fa-solid fa-plus fa-beat"></i>
            &nbsp;메뉴 추가
          </div>
          <div className="navMenu" onClick={check}>
            <i className="fa-solid fa-list fa-bounce"></i>
            &nbsp;메뉴 확인
          </div>
        </nav>
        <div className="content">
          <Selector></Selector>
        </div>
      </div>
    </div>
  );
}

export default App;
