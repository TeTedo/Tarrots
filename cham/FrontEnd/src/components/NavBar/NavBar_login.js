import React from "react";
import { useSelector } from "react-redux";
import NavBar_login_btn from "./NavBar_login_btn";
const NavBar_login = () => {
  const loginStatus = useSelector((state) => state.login.status);
  const userData = useSelector((state) => state.login);
  const { profile_img } = userData;
  console.log(userData);
  return (
    <div className="navBar_btns">
      {loginStatus ? (
        <>
          <img src={profile_img} />
          <NavBar_login_btn text="MY PAGE" />
          <NavBar_login_btn text="LOGOUT" />
        </>
      ) : (
        <>
          <NavBar_login_btn text="SIGN UP" />
          <NavBar_login_btn text="LOGIN" />
        </>
      )}
    </div>
  );
};

export default NavBar_login;
