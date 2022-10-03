import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import '../style/Post.css';
const Post = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const loginUser = useSelector((state) => state.loginUser);
  const post = useSelector((state) => state.post);
  let title = useRef(null);
  let text = useRef(null);
  function Post() {
    title = title.current.value;
    text = text.current.value.replace(/(\n|\r\n)/g, '<br>').replace(/\s/g, '&nbsp;');
    const length = post.length;
    //시간
    function timestamp() {
      var today = new Date();
      today.setHours(today.getHours() + 9);
      return today.toISOString().replace('T', ' ').substring(0, 16);
    }
    const date = timestamp();
    const userData = user.filter((el) => el[0] === loginUser);
    dispatch({
      type: 'POST',
      payload: {
        id: length + 1,
        title,
        writer: loginUser,
        nickName: userData[0][1],
        profileImg: userData[0][2],
        text,
        date,
      },
    });
    navigate(`/posts/?id=${length + 1}`);
  }
  return (
    <div className="post">
      <div>
        <input ref={title} placeholder="제목을 입력하세요" />
        <textarea ref={text} placeholder="내용을 입력하세요"></textarea>

        <button onClick={Post}>글쓰기</button>
      </div>
    </div>
  );
};

export default Post;
