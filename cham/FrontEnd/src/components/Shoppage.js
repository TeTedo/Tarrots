import React from "react";
import "../styles/Shop/Shop.css";
import MiniNavBar from "./MiniNavBar/MiniNavBar";
const Shoppage = ({ component: Component }) => {
  const page = ["/shop", "/shop/top", "/shop/bottom", "/shop/shoes"];
  const name = ["MAIN", "TOP", "BOTTOM", "SHOES"];

  return (
    <div className="shopMain">
      <MiniNavBar page={page} name={name} />
      <Component page={page} name={name}></Component>
    </div>
  );
};

export default Shoppage;
