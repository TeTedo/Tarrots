import React, { useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import '../style/Posts.css';
const Posts = ({ post, loginUser, user }) => {
  const [query, setQeury] = useSearchParams();
  const index = query.get('id') - 1;
  const content = post[index];
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
        </div>
        <div className="content" dangerouslySetInnerHTML={LoadContent()}></div>
      </div>
    </div>
  );
};

export default Posts;
