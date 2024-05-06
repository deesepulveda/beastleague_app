import React from "react";
import NavSub from "../nav/NavSub";

const settingsArr = [
  { task: "account", hovered: true },
  { task: "display", hovered: false },
  { task: "privacy", hovered: false },
  { task: "help", hovered: false },
  { task: "misc", hovered: false },
];

const ScreenSettings = () => {
  return (
    <div className="screen_container_pages">
      <NavSub>
        <ul className="sub_nav_ul">
          {settingsArr.map((s, i) => (
            <li key={i} className={s.hovered ? "active_link" : ""}>
              {s.task}
            </li>
          ))}
        </ul>
      </NavSub>

      <p style={{ fontSize: "1.75rem", marginTop: "5rem" }}>
        Sign Up or Log In to View/Access
      </p>
    </div>
  );
};

export default ScreenSettings;
