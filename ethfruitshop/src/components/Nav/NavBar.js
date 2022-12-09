import React from "react";
import { Wrap, Nav } from "./NavStyledComponents";
import NavBarCom from "./NavBarCom";
const NavBar = () => {
  return (
    <Wrap>
      <NavBarCom text="사용 설명" path="/" />
      <NavBarCom text="구매하기" path="/buy" />
      <NavBarCom text="판매하기" path="/sell" />
      <NavBarCom text="상점" path="/shop" />
      <NavBarCom text="판매기록" path="/transaction" />
    </Wrap>
  );
};

export default NavBar;
