import React, { useRef, useState } from "react";
import {
  ModalWrap,
  Title,
  PermissionWrap,
  PermissionContent,
} from "../../ModalStyledComponents";
import PermissionPagination from "./PermissionPagination";
import PermissionCom from "./PermissionCom";
const Permission = ({ closeModal, setModal }) => {
  const inputWrap = useRef(null);
  const [index, setIndex] = useState(0);
  // 전체 개수
  const templength = 11;
  // 페이지당 개수
  const num = 10;
  return (
    <ModalWrap onClick={closeModal}>
      <PermissionWrap>
        <Title>Permission</Title>
        <PermissionContent>
          {new Array(templength)
            .fill(0)
            .slice(index * num, index * num + num)
            .map((v, idx) => (
              <PermissionCom key={idx}></PermissionCom>
            ))}
          <PermissionPagination
            index={index}
            pageLength={Math.ceil(templength / 10)}
            setIndex={setIndex}
          ></PermissionPagination>
        </PermissionContent>
      </PermissionWrap>
    </ModalWrap>
  );
};

export default Permission;
