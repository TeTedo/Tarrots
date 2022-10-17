import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "redux/middleware/loginAction";
import {
  WholeWrap,
  Wrap,
  Input,
  Preview,
  PreviewImg,
  BtnWrap,
} from "./MyPageStyledComponents";
import previewImg from "util/previewImg";
const MyPageProfile = () => {
  const previewTarget = useRef();
  const uploadTarget = useRef();
  const modifyData = useRef();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loginAction.loginCheck());
  }, []);
  const userData = useSelector((state) => state.login);
  const imgPreview = (e) => {
    previewImg(e.target, previewTarget.current);
  };
  console.log(userData);
  return (
    <WholeWrap ref={modifyData}>
      <Wrap>
        ID
        <Input value={userData.user_id} readOnly />
      </Wrap>
      <Wrap>
        PROFILE IMAGE
        <Preview>
          <PreviewImg src={userData.profile_img} ref={previewTarget} />
        </Preview>
        <Input type="file" ref={uploadTarget} onChange={imgPreview} />
      </Wrap>
      <Wrap>
        NAME
        <Input value={userData.name} readOnly />
      </Wrap>
      <Wrap>
        NICKNAME
        <Input value={userData.nick_name} />
      </Wrap>
      <Wrap>
        MOBILE NUMBER
        <Input value={userData.mobile_number} />
      </Wrap>
      <Wrap>
        ADDRESS
        <Input value={userData.address} />
      </Wrap>
      <BtnWrap>수정하기</BtnWrap>
    </WholeWrap>
  );
};

export default MyPageProfile;
