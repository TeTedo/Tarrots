import React from 'react';

const SideBar_profile = ({ user, loginUser }) => {
  for (let i = 0; i < user.length; i++) {
    if (user[i][0] === loginUser) {
      var name = user[i][1];
      var img = user[i][2];
    }
  }
  return (
    <div className="sideBar_profile">
      <img src={img} />
      <div>
        <div>{loginUser}</div>
        <div>{name}</div>
      </div>
    </div>
  );
};

export default SideBar_profile;
