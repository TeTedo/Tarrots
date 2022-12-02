import React, { useEffect, useState } from "react";
import { Nav } from "./NavStyledComponents";
import { Link, useLocation } from "react-router-dom";

const NavBarCom = ({ text, path }) => {
  const location = useLocation();
  return (
    <Link to={path} style={{ textDecoration: "none", color: "black" }}>
      <Nav
        style={{
          color: location.pathname === path ? "white" : "black",
          backgroundColor: location.pathname === path ? "black" : "white",
        }}
      >
        {text}
      </Nav>
    </Link>
  );
};

export default NavBarCom;
