import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import '../style/Profile.css';
const Profile = () => {
  const loginUser = useSelector((state) => state.loginUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const nickName = useRef(null);
  const profileImg = useRef(null);
  const pw = useRef(null);
  function ModifyUser() {
    const value = [nickName.current.value, profileImg.current.value, pw.current.value];
    dispatch({ type: 'MODIFY', payload: [loginUser, ...value] });
    navigate('/');
  }
  return (
    <div className="profile">
      <div>
        아이디
        <div>{loginUser}</div>
        닉네임
        <input ref={nickName} />
        프로필이미지
        <input type="file" ref={profileImg} />
        비밀번호
        <input ref={pw} />
        <button onClick={ModifyUser}>수정</button>
      </div>
    </div>
  );
};

export default Profile;
