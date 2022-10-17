import React from "react";
import { useDispatch } from "react-redux";
import { PermissionArgWrap, PermissionSpan } from "../../ModalStyledComponents";
import { shopAction } from "../../../../redux/middleware/shopAction";
const ShopSlideCom = ({ data }) => {
  data = Object.values(data);
  const dispatch = useDispatch();
  const result = (e) => {
    dispatch(shopAction.deleteSlideData(data[1]));
  };
  return (
    <PermissionArgWrap>
      <PermissionSpan>{data[7]}</PermissionSpan>
      <PermissionSpan>{data[8]}</PermissionSpan>
      <PermissionSpan>{data[13]}</PermissionSpan>
      <PermissionSpan>
        <img src={data[2]} alt="" style={{ width: "50px", height: "50px" }} />
      </PermissionSpan>
      <PermissionSpan>
        <img src={data[9]} alt="" style={{ width: "50px", height: "50px" }} />
      </PermissionSpan>
      <button onClick={result}>삭제</button>
    </PermissionArgWrap>
  );
};

export default ShopSlideCom;
