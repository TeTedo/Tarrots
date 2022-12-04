import React from "react";
import { FruitsWrap } from "../shopstyledComponents";
import FruitsCom from "./FruitsCom";
const Fruits = () => {
  return (
    <FruitsWrap>
      <FruitsCom name="carrot" />
      <FruitsCom name="apple-whole" />
      <FruitsCom name="lemon" />
    </FruitsWrap>
  );
};

export default Fruits;
