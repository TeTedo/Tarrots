import React from 'react';
import '../style/Login.css';
const Login = ({ user, setLogin, setloginUser }) => {
  function loginFun(e) {
    const tags = e.target.parentElement.children;
    const value = [tags[0].value, tags[1].value];
    for (let i = 0; i < user.length; i++) {
      if (user[i][0] === value[0] && user[i][3] === value[1]) {
        setLogin(true);
        setloginUser(value[0]);
        break;
      }
    }
  }
  return (
    <div className="login">
      <div>
        아이디
        <input />
        비밀번호
        <input />
        <button onClick={loginFun}>로그인</button>
      </div>
    </div>
  );
};

export default Login;
