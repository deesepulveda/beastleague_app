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
    <div className="screen_container_pages">
      <NavSub>
        <ul className="sub_nav_ul">
          {sportsArr.map((s, i) => (
            <li key={i} className={s.hovered ? "active_link" : ""}>
              {s.league}
            </li>
          ))}
        </ul>
      </NavSub>
      <div className="score_card_container">
        {Array.from({ length: 15 }, (_, i) => i + 1).map((card, i) => (
          <ScoreCard key={i} title={card} />
        ))}
      </div>
    </div>
  );
};

const ScoreCard = ({ title }) => {
  return (
    <div className="card_box">
      <div className="card_box_inner">{title}</div>
    </div>
  );
};

export default ScreenScores;
