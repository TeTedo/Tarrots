import React from 'react';
import { Link } from 'react-router-dom';
const SideBar_login = () => {
  return (
    <div className="sideBar_login">
      <Link to="/login">로그인</Link>
    </div>
  );
};

export default SideBar_login;
