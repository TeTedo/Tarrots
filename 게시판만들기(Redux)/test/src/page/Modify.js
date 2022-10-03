import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Modify = (ref) => {
  let title = useRef();
  let text = useRef();
  const post = useSelector((state) => state.post);
  const index = useSearchParams()[0].get('id') - 1;
  const dispatch = useDispatch();
  const content = post[index];
  const nav = useNavigate();
  useEffect(() => {
    title.current.value = content.title;
    text.current.innerHTML = content.text;
  }, [title, text]);

  function Post() {
    title = title.current.value;
    text = text.current.innerHTML.replace(/(\n|\r\n)/g, '<br>').replace(/\s/g, '&nbsp;');
    dispatch({
      type: 'POSTMODIFY',
      payload: {
        id: index + 1,
        title,
        text,
      },
    });
    nav('/');
  }
  return (
    <div className="post">
      <div>
        <input ref={title} placeholder="제목을 입력하세요" />
        <div contentEditable="true" ref={text} placeholder="내용을 입력하세요"></div>

        <button onClick={Post}>글쓰기</button>
      </div>
    </div>
  );
};

export default Modify;
