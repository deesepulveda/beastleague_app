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
            {playArr.map((s, i) => (
              <li key={i} className={s.hovered ? "active_link" : ""}>
                {s.task}
              </li>
            ))}
          </ul>
        </NavSub>
      </div>
      <p style={{ fontSize: "1.75rem", marginTop: "5rem" }}>
        Sign Up or Log In to View/Access
      </p>
    </div>
  );
};

export default ScreenPlay;
