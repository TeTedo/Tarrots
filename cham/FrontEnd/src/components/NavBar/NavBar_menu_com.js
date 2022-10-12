import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const NavBar_menu_com = ({ path, name }) => {
  const location = useLocation();

  return (
    <Link to={path} className={location.pathname === path ? "selected" : ""}>
      <span>{name}</span>
    </Link>
  );
};

export default NavBar_menu_com;
