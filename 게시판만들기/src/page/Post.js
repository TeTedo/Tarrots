import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Post.css';
const Post = ({ setPost, post, loginUser, user }) => {
  const navigate = useNavigate();
  async function Post(e) {
    let title = e.target.parentElement.children[0].value;
    let text = e.target.parentElement.children[1].value;
    text = text.replace(/(\n|\r\n)/g, '<br>').replace(/\s/g, '&nbsp;');
    const length = post.length;
    //시간
    function timestamp() {
      var today = new Date();
      today.setHours(today.getHours() + 9);
      return today.toISOString().replace('T', ' ').substring(0, 16);
    }
    const date = timestamp();
    const userData = user.filter((el) => el[0] === loginUser);
    await setPost((info) => [
      ...info,
      {
        id: length + 1,
        title,
        writer: loginUser,
        nickName: userData[0][1],
        profileImg: userData[0][2],
        text: text,
        date,
      },
    ]);
    navigate(`/posts/?id=${length + 1}`);
  }
  return (
    <div className="post">
      <div>
        <input placeholder="제목을 입력하세요" />
        <textarea placeholder="내용을 입력하세요"></textarea>

        <button onClick={Post}>글쓰기</button>
      </div>
    </div>
  );
};

export default Post;
