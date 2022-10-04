import React, { useRef } from 'react';
import '../style/Login.css';
import { useDispatch, useSelector } from 'react-redux';
const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const id = useRef(null);
  const pw = useRef(null);
  function loginFun() {
    const value = [id.current.value, pw.current.value];
    const userData = user.filter((el) => el[0] === value[0] && el[3] === value[1]);
    if (userData[0]) {
      dispatch({ type: 'LOGIN' });
      dispatch({ type: 'LOGINUSER', payload: userData[0][0] });
    }
  }
  return (
    <div className="login">
      <div>
        아이디
        <input ref={id} />
        비밀번호
        <input ref={pw} />
        <button onClick={loginFun}>로그인</button>
      </div>
    </div>
  );
};

export default Login;
