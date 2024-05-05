import React from "react";
import NavSub from "../nav/NavSub";

const newsArr = [
  { task: "recent", hovered: true },
  { task: "media", hovered: false },
  { task: "following", hovered: false },
  { task: "misc", hovered: false },
];

const ScreenNews = () => {
  return (
    <div>
      <div>
        <NavSub>
          <ul className="sub_nav_ul">
            {newsArr.map((s) => (
              <li className={s.hovered ? "active_link" : ""}>{s.task}</li>
            ))}
          </ul>
        </NavSub>
      </div>
      <h1>News</h1>
    </div>
  );
};

export default ScreenNews;
