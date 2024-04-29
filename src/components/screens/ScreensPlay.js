import React from "react";
import NavSub from "../nav/NavSub";

const sportsArr = [
  { id: 1, games: "active" },
  { id: 2, games: "private" },
  { id: 3, games: "public" },
  { id: 4, games: "free" },
];

const ScreensPlay = () => {
  return (
    <>
      <div className="container_screen_top screens_play_container">
        <h1>Play Screen</h1>
      </div>
      <NavSub>
        {sportsArr.map((s) => (
          <li key={s.id}>{s.games}</li>
        ))}
      </NavSub>
    </>
  );
};

export default ScreensPlay;
