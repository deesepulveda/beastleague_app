import React from "react";
import NavSub from "../nav/NavSub";

const settingsArr = [
  { task: "account", hovered: false },
  { task: "display", hovered: true },
  { task: "privacy", hovered: false },
  { task: "help", hovered: false },
  { task: "misc", hovered: false },
];

const ScreenSettings = () => {
  return (
    <div>
      <div>
        <NavSub>
          <ul className="sub_nav_ul">
            {settingsArr.map((s, i) => (
              <li key={i} className={s.hovered ? "active_link" : ""}>
                {s.task}
              </li>
            ))}
          </ul>
        </NavSub>
      </div>
      <h2>Log In to View</h2>
    </div>
  );
};

export default ScreenSettings;
