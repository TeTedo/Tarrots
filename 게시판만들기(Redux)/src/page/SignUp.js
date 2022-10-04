import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../style/signUp.css';
const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const id = useRef(null);
  const nickName = useRef(null);
  const profileImg = useRef(null);
  const pw = useRef(null);
  function AddUser() {
    const value = [
      id.current.value,
      nickName.current.value,
      profileImg.current.value,
      pw.current.value,
    ];

    const overlap = user.filter((el) => el[0] === value[0]);
    if (!overlap[0]) {
      dispatch({ type: 'SIGNUP', payload: [value] });
      navigate('/login');
    }
  }
  return (
    <div className="signUp">
      <div>
        아이디
        <input ref={id} />
        닉네임
        <input ref={nickName} />
        프로필이미지
        <input type="file" ref={profileImg} />
        비밀번호
        <input ref={pw} />
        <button onClick={AddUser}>가입</button>
      </div>
    </div>
  );
};

export default SignUp;
