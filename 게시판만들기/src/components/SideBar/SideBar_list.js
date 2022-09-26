import React from 'react';
import { Link, useLocation } from 'react-router-dom';
const SideBar_list = ({ img, path, name }) => {
  const location = useLocation();
  return (
    <Link to={path} className={location.pathname === path ? 'selected' : 'not'}>
      <i className={img}></i>
      <li>{name}</li>
    </Link>
  );
};

export default SideBar_list;
