import React from 'react';
import { SideBar_list, SideBar_profile, SideBar_login } from './SideBar/';
import '../style/SideBar.css';
import { useSelector } from 'react-redux';
const SideBar = () => {
  const login = useSelector((state) => state.login.login);
  return (
    <div className="SideBar">
      <ul>
        <SideBar_list img="fa-solid fa-house" name="Home" path="/" />
        <SideBar_list img="fa-solid fa-id-card" name="Profile" path="/profile" />
        <SideBar_list img="fa-solid fa-pen" name="Post" path="/post" />
        {login ? (
          <SideBar_list img="fa-solid fa-right-from-bracket" name="LogOut" path="/logout" />
        ) : (
          <SideBar_list img="fa-solid fa-user-plus" name="SignUp" path="/signup" />
        )}
      </ul>

      {login ? <SideBar_profile /> : <SideBar_login />}
    </div>
  );
};

export default SideBar;
