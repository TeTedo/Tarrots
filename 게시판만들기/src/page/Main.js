import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Body } from '../components';
const Main = ({ post }) => {
  const navigate = useNavigate();
  function ToPost(index) {
    navigate(`/posts/?id=${index}`);
  }
  return (
    <div className="main">
      <div>
        {post.map((el, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                ToPost(index + 1);
              }}
            >
              <div>{el.id}</div>
              <div>{el.nickName}</div>
              <div>{el.title}</div>
              <div>{el.date}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
