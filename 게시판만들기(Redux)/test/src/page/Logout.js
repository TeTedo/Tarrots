import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../style/Logout.css';
const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function Confirm(param) {
    if (param) {
      dispatch({ type: 'LOGOUT', payload: '' });
    } else {
      navigate('/');
    }
  }
  return (
    <div className="logout">
      <div>
        정말로 로그아웃 하시겠습니까?
        <div>
          <button
            onClick={() => {
              Confirm(1);
            }}
          >
            예
          </button>
          <button
            onClick={() => {
              Confirm(0);
            }}
          >
            아니오
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
