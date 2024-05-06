import React from "react";
import "./NavSub.css";

const NavSub = ({ showArr }) => {
  return (
    <div className="nav_sub_container">
      <ul className="sub_nav_ul">
        {showArr.map((s, i) => (
          <li key={i} className={s.hovered ? "active_link" : ""}>
            {s.type}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavSub;
