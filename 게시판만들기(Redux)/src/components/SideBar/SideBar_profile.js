import React from 'react';
import { useSelector } from 'react-redux';

const SideBar_profile = () => {
  const loginUser = useSelector((state) => state.loginUser);
  const user = useSelector((state) => state.user);
  const userData = user.filter((el) => el[0] === loginUser)[0];
  return (
    <div className="sideBar_profile">
      {loginUser ? (
        <>
          <img src={userData[2]} />
          <div>
            <div>{loginUser}</div>
            <div>{userData[1]}</div>
          </div>
        </>
      ) : (
        ''
      )}
    </div>
  );
};

export default SideBar_profile;
