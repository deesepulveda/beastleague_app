import React from "react";
import "./NavSub.css";
import "../App.css";

const NavSub = (props) => {
  return (
    <div className="nav_sub_container">
      <div className="nav_sub_container_ul">{props.children}</div>
    </div>
  );
};

export default NavSub;
