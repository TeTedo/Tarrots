import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import '../style/Delete.css';
const Delete = () => {
  const num = useRef();
  const input = useRef();
  const id = useSearchParams()[0].get('id');
  const dispatch = useDispatch();
  const nav = useNavigate();
  function Delete() {
    if (num.current.innerText === input.current.value) {
      dispatch({ type: 'POSTDELETE', payload: id });
      nav('/');
    }
  }
  return (
    <div className="delete">
      <div>
        삭제하려면 아래 숫자를 입력하세요
        <div ref={num}>{Math.floor(Math.random() * 10000)}</div>
        <input type="text" ref={input} />
        <button onClick={Delete}>삭제</button>
      </div>
    </div>
  );
};

export default Delete;
