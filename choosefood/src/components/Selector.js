import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { foodAction } from "../redux/middleware/foodAction";

const Selector = () => {
  const dispatch = useDispatch();
  const foodData = useSelector((state) => state.food);
  const selector = useRef();
  const [top, setTop] = useState(0);
  const choose = () => {
    let tempTop = 0;
    let count = 10;
    const menuLen = selector.current.children.length;
    for (let i = 0; i < count; i++) {
      for (let k = 0; k < menuLen; k++) {
        const makeChild = document.createElement("div");
        makeChild.innerText = selector.current.children[k].innerText;
        makeChild.classList.add("selector_menu");
        selector.current.appendChild(makeChild);
      }
    }
    const pickLen = selector.current.children.length - 1;
    const randNum = Math.floor(Math.random() * menuLen);
    for (let i = 0; i < pickLen - randNum; i++) {
      tempTop -= 200;
      setTop(tempTop);
    }
  };
  useEffect(() => {
    dispatch(foodAction.GetFoodData());
  }, []);
  return (
    <>
      <div className="selector">
        <div
          className="selector_wrap"
          ref={selector}
          style={{ top: top, transition: "3s" }}
        >
          {foodData.map((v, idx) => (
            <div key={idx} className="selector_menu">
              {v.name}
            </div>
          ))}
        </div>
      </div>
      <div className="spinBtn" onClick={choose}>
        Go!
      </div>
    </>
  );
};

export default Selector;
