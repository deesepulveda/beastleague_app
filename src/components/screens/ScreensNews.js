import React from "react";
import NavSub from "../nav/NavSub";

const sportsArr = [
  { id: 1, task: "recent" },
  { id: 2, task: "media" },
  { id: 3, task: "following" },
];

const ScreensNews = () => {
  return (
    <>
      <div className="container_screen_top screens_news_container">
        <h1>News Screen</h1>
      </div>
      <NavSub>
        {sportsArr.map((s) => (
          <li key={s.id}>{s.task}</li>
        ))}
      </NavSub>
    </>
  );
};

export default ScreensNews;
