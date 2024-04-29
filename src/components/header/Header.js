import React from "react";
import "../App.css";
import "./Header.css";

const Header = ({ darkMode }) => {
  return (
    <div
      className={
        darkMode
          ? "header background_dark_mode_softBlack"
          : "header background_light_mode_softGray"
      }
    >
      <div className="header_logo_icon">Logo</div>
      <div className="header_login_icon">Login</div>
    </div>
  );
};

export default Header;
