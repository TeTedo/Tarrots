import React, { useState } from "react";
import { BtnWrap, Btn, Container } from "./shopstyledComponents";
import Fruits from "./Fruits/Fruits";
import Token from "./Token/Token";
const Shop = () => {
  const [onFruit, setOnFruit] = useState(true);
  return (
    <>
      <BtnWrap>
        <Btn
          onClick={() => {
            setOnFruit(true);
          }}
          style={{
            color: onFruit ? "white" : "black",
            backgroundColor: onFruit ? "black" : "white",
          }}
        >
          Fruit
        </Btn>
        <Btn
          onClick={() => {
            setOnFruit(false);
          }}
          style={{
            color: onFruit ? "black" : "white",
            backgroundColor: onFruit ? "white" : "black",
          }}
        >
          Token
        </Btn>
      </BtnWrap>
      <Container>{onFruit ? <Fruits /> : <Token />}</Container>
    </>
  );
};

export default Shop;
