import React from "react";
import NavSub from "../nav/NavSub";

const homeArr = [
  { id: 1, task: "avatar" },
  { id: 2, task: "favorites" },
  { id: 3, task: "points" },
];

const ScreensHome = () => {
  return (
    <>
      <div className="container_screen_top screens_home_container">
        <h1>Home Screen</h1>
      </div>
      <NavSub>
        {homeArr.map((s) => (
          <li key={s.id}>{s.task}</li>
        ))}
      </NavSub>
    </>
  );
};

export default ScreensHome;
