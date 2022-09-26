import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Body } from '../components';
import '../style/signUp.css';
const SignUp = ({ user, setUser }) => {
  const navigate = useNavigate();
  function AddUser(e) {
    const tags = e.target.parentElement.children;
    const value = [tags[0].value, tags[1].value, tags[2].value, tags[3].value];
    // 중복검사
    for (let i = 0; i < user.length; i++) {
      if (user[i][0] === value[0]) {
        var overlap = true;
        break;
      }
    }
    if (!overlap) {
      setUser((user) => [...user, value]);
      navigate('/login');
    }
  }
  return (
    <div className="signUp">
      <div>
        아이디
        <input />
        닉네임
        <input />
        프로필이미지
        <input type="file" />
        비밀번호
        <input />
        <button onClick={AddUser}>가입</button>
      </div>
    </div>
  );
};

export default SignUp;
