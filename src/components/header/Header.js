import React from "react";
import "./Header.css";
import NavMain from "../nav/NavMain";
import Login from "../login/Login";

const Header = () => {
  return (
    <div className="header_container">
      <Login />
      <NavMain />
    </div>
  );
};

export default Header;
