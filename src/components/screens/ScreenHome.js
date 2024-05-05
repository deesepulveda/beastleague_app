import React from "react";
import NavSub from "../nav/NavSub";

const homeArr = [
  { task: "avatar", hovered: false },
  { task: "favorites", hovered: true },
  { task: "learn", hovered: false },
  { task: "friends", hovered: false },
  { task: "misc", hovered: false },
];

const ScreenHome = () => {
  return (
    <div>
      <div>
        <NavSub>
          <ul className="sub_nav_ul">
            {homeArr.map((s, i) => (
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

export default ScreenHome;
