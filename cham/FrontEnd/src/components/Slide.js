import React, { useRef, useState } from "react";
import "../styles/Slide/Slide.css";
import SlideCom from "./Slide/SlideCom";
const Slide = () => {
  const [index, setIndex] = useState(0);
  const [posX, setPosX] = useState(0);
  const [onDrag, setOnDrag] = useState(false);
  const [left, setLeft] = useState(0);
  const slideWrapper = useRef(null);
  const dragStart = (e) => {
    setPosX(e.clientX);
    setOnDrag(true);
  };
  const dragEnd = (e) => {
    if (Math.abs(posX - e.clientX) > 200) {
      if (posX > e.clientX) {
        setIndex((state) => state + 1);
        console.log("왼쪽");
      }
      if (posX < e.clientX && index > 0) {
        setIndex((state) => state - 1);
        console.log("오른쪽");
      }
    }
    setOnDrag(false);
  };
  const drag = (e) => {
    if (onDrag === true) {
      setLeft(left + e.clientX - posX);
    }
  };
  return (
    <div className="slide" onMouseDown={dragStart} onMouseUp={dragEnd} onMouseMove={drag}>
      <div className="slide_wrap" ref={slideWrapper} style={{ left: left }}>
        <SlideCom></SlideCom>
        <SlideCom></SlideCom>
        <SlideCom></SlideCom>
      </div>
    </div>
  );
};

export default Slide;
