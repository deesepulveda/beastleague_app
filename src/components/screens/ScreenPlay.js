import React from "react";
import NavSub from "../nav/NavSub";

const playArr = [
  { task: "active", hovered: true },
  { task: "public", hovered: false },
  { task: "private", hovered: false },
  { task: "free", hovered: false },
];

const ScreenPlay = () => {
  return (
    <div>
      <div>
        <NavSub>
          <ul className="sub_nav_ul">
            {playArr.map((s) => (
              <li className={s.hovered ? "active_link" : ""}>{s.task}</li>
            ))}
          </ul>
        </NavSub>
      </div>
      <h2>Log In to View</h2>
    </div>
  );
};

export default ScreenPlay;
