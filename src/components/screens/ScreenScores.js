import React from "react";
import "./ScreenScores.css";
import NavSub from "../nav/NavSub";

const sportsArr = [
  { league: "mlb", hovered: true },
  { league: "nfl", hovered: false },
  { league: "nba", hovered: false },
  { league: "nhl", hovered: false },
  { league: "mls", hovered: false },
  { league: "ncaaf", hovered: false },
  { league: "ncaab", hovered: false },
  { league: "pga", hovered: false },
  { league: "ufc", hovered: false },
  { league: "nascar", hovered: false },
  { league: "f1", hovered: false },
];

const ScreenScores = () => {
  return (
    <div>
      <div>
        <NavSub>
          <ul className="sub_nav_ul">
            {sportsArr.map((s) => (
              <li className={s.hovered ? "active_link" : ""}>{s.league}</li>
            ))}
          </ul>
        </NavSub>
      </div>
    </div>
  );
};

export default ScreenScores;
