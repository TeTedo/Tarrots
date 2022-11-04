import React from "react";
import { useSelector } from "react-redux";
import {
  Wrap,
  CheckContent,
  CheckWrap,
  CheckMenu,
  CheckSapn,
} from "./ModalStyledComponents";
const CheckModal = ({ setModal }) => {
  const getData = (e) => {
    if (e.currentTarget === e.target) {
      setModal(false);
    }
  };
  const foodData = useSelector((state) => state.food);
  return (
    <Wrap onClick={getData}>
      <CheckContent>
        <CheckWrap>
          {foodData.map((v, idx) => (
            <CheckMenu key={idx}>
              <CheckSapn>{idx + 1}</CheckSapn>
              <CheckSapn>{v.name}</CheckSapn>
            </CheckMenu>
          ))}
        </CheckWrap>
      </CheckContent>
    </Wrap>
  );
};

export default CheckModal;
