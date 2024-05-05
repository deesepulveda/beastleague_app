import React from "react";
import { NavLink } from "react-router-dom";
import "./NavMain.css";

const NavMain = () => {
  return (
    <div className="nav_main_container">
      <NavLink to="/news">news</NavLink>
      <NavLink to="/">scores</NavLink>
      <NavLink to="/home">home</NavLink>
      <NavLink to="/play">play</NavLink>
      <NavLink to="/settings">settings</NavLink>
    </div>
  );
};

export default NavMain;
