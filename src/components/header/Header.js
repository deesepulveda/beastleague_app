import React, { useState } from "react";
import "./Header.css";
import NavMain from "../nav/NavMain";
import Login from "../login/Login";
import NavSub from "../nav/NavSub";

const newsArr = [
  { type: "recent", hovered: true },
  { type: "media", hovered: false },
  { type: "following", hovered: false },
  { type: "misc", hovered: false },
];

const scoresArr = [
  { type: "mlb", hovered: false },
  { type: "nfl", hovered: true },
  { type: "nba", hovered: false },
  { type: "nhl", hovered: false },
  { type: "mls", hovered: false },
  { type: "ncaaf", hovered: false },
  { type: "ncaab", hovered: false },
  { type: "pga", hovered: false },
  { type: "ufc", hovered: false },
  { type: "nascar", hovered: false },
  { type: "f1", hovered: false },
];

const homeArr = [
  { type: "avatar", hovered: true },
  { type: "favorites", hovered: false },
  { type: "learn", hovered: false },
  { type: "friends", hovered: false },
  { type: "misc", hovered: false },
];

const playArr = [
  { type: "active", hovered: true },
  { type: "public", hovered: false },
  { type: "private", hovered: false },
  { type: "free", hovered: false },
];

const settingsArr = [
  { type: "account", hovered: true },
  { type: "display", hovered: false },
  { type: "privacy", hovered: false },
  { type: "help", hovered: false },
  { type: "misc", hovered: false },
];

const Header = () => {
  const [showArr, setShowArr] = useState(scoresArr);

  const onActiveLink = (e) => {
    let curVal = e.currentTarget.textContent;

    if (curVal === "scores") {
      setShowArr(scoresArr);
    }
    if (curVal === "news") {
      setShowArr(newsArr);
    }
    if (curVal === "home") {
      setShowArr(homeArr);
    }
    if (curVal === "play") {
      setShowArr(playArr);
    }
    if (curVal === "settings") {
      setShowArr(settingsArr);
    }
  };

  return (
    <div className="header_container">
      <Login />
      <NavMain onActiveLink={onActiveLink} />
      <NavSub showArr={showArr} />
    </div>
  );
};

export default Header;
