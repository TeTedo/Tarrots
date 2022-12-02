import React from "react";
import { Wrap, Nav } from "./NavStyledComponents";
import NavBarCom from "./NavBarCom";
const NavBar = () => {
  return (
    <Wrap>
      <NavBarCom text="홈" path="/" />
      <NavBarCom text="구매하기" path="/buy" />
      <NavBarCom text="판매하기" path="/sell" />
      <NavBarCom text="상점" path="/shop" />
    </Wrap>
  );
};

export default NavBar;
