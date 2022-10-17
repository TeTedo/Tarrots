import React, { useEffect, useState } from "react";
import {
  ModalWrap,
  Title,
  PermissionWrap,
  MyPageContent,
  MyPageMiniNav,
  MyPageElem,
} from "../ModalStyledComponents";

import { useDispatch, useSelector } from "react-redux";
import { shopAction } from "../../../redux/middleware/shopAction";
const MyPageModal = ({ closeModal, setModal }) => {
  const [index, setIndex] = useState(0);
  // 전체 개수

  // 페이지당 개수
  const num = 10;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(shopAction.getPermissionData());
  }, []);
  const permissionData = useSelector((state) => state.shopPermission);
  const dataLength = Object.keys(permissionData).length;
  return (
    <ModalWrap onClick={closeModal}>
      <PermissionWrap>
        <Title>MY PAGE</Title>
        <MyPageContent>
          <MyPageMiniNav></MyPageMiniNav>
          <MyPageElem></MyPageElem>
        </MyPageContent>
      </PermissionWrap>
    </ModalWrap>
  );
};

export default MyPageModal;
