import React from "react";
import "./ScreenScores.css";
import NavSub from "../nav/NavSub";

const sportsArr = [
  { type: "mlb", hovered: true },
  { type: "nfl", hovered: false },
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

const ScreenScores = () => {
  return (
    <div className="screen_container_pages">
      <NavSub>
        <ul className="sub_nav_ul">
          {sportsArr.map((s, i) => (
            <li key={i} className={s.hovered ? "active_link" : ""}>
              {s.type}
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
