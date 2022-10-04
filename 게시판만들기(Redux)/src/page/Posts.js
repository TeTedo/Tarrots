import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import '../style/Posts.css';
const Posts = () => {
  const nav = useNavigate();
  const [query, setQeury] = useSearchParams();
  const index = query.get('id') - 1;
  const post = useSelector((state) => state.post);
  const content = post[index];
  const loginUser = useSelector((state) => state.loginUser);
  function Modify() {
    nav('/posts/modify/?id=' + query.get('id'));
  }
  function Delete() {
    nav('/posts/delete/?id=' + query.get('id'));
  }
  function LoadContent(e) {
    return { __html: `${content?.text}` };
  }
  return (
    <div className="posts">
      <div>
        <div className="userInfo">
          <div className="userImg">
            <img src={content?.profileImg} />
          </div>
          <div className="user">
            <div className="user_id">{content?.nickName}</div>
          </div>
          <div className="time">
            <div>{content?.date}</div>
          </div>
          {content?.writer == loginUser ? (
            <div className="modify">
              <div onClick={Modify}>수정</div>
              <div onClick={Delete}>삭제</div>
            </div>
          ) : (
            ''
          )}
        </div>
        <div className="content" dangerouslySetInnerHTML={LoadContent()}></div>
      </div>
    </div>
  );
};

export default Posts;
