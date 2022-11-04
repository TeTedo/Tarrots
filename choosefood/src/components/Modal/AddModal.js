import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { Wrap, AddContent, AddMenu, AddBtn } from "./ModalStyledComponents";
import { foodAction } from "../../redux/middleware/foodAction";

const AddModal = ({ closeModal, setModal }) => {
  const dispatch = useDispatch();
  const input = useRef("");
  const addMenu = () => {
    dispatch(foodAction.AddFoodData({ value: input.current.value }));
    setModal(false);
  };
  return (
    <Wrap onClick={closeModal}>
      <AddContent>
        <AddMenu ref={input} />
        <AddBtn onClick={addMenu}>추가</AddBtn>
      </AddContent>
    </Wrap>
  );
};

export default AddModal;
