import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();
  const post = useSelector((state) => state.post);
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
