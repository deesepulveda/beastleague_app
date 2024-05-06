import React from "react";
import { NavLink } from "react-router-dom";
import "./NavMain.css";

const NavMain = ({ onActiveLink }) => {
  return (
    <div className="nav_main_container">
      <NavLink to="/news" onClick={onActiveLink}>
        news
      </NavLink>
      <NavLink to="/" onClick={onActiveLink}>
        scores
      </NavLink>
      <NavLink to="/home" onClick={onActiveLink}>
        home
      </NavLink>
      <NavLink to="/play" onClick={onActiveLink}>
        play
      </NavLink>
      <NavLink to="/settings" onClick={onActiveLink}>
        settings
      </NavLink>
    </div>
  );
};

export default NavMain;
