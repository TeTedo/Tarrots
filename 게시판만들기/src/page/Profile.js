import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Body } from '../components';
import '../style/Profile.css';
const Profile = ({ loginUser, user, setUser }) => {
  const navigate = useNavigate();
  function ModifyUser(e) {
    const tags = e.target.parentElement.children;
    const value = [tags[1].value, tags[2].value, tags[3].value];
    for (let i = 0; i < user.length; i++) {
      if (user[i][0] === loginUser) {
        user.splice(i, 1);
        setUser((user) => [...user, [loginUser, ...value]]);
        navigate('/');
        break;
      }
    }
  }
  return (
    <div className="profile">
      <div>
        아이디
        <div>{loginUser}</div>
        닉네임
        <input />
        프로필이미지
        <input type="file" />
        비밀번호
        <input />
        <button onClick={ModifyUser}>수정</button>
      </div>
    </div>
  );
};

export default Profile;
