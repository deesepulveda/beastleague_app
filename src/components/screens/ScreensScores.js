import React from "react";
import NavSub from "../nav/NavSub";
import "../App.css";
import "./ScreensScores.css";

const sportsArr = [
  { id: 1, sports: "mlb" },
  { id: 2, sports: "nfl" },
  { id: 3, sports: "nba" },
  { id: 4, sports: "nhl" },
  { id: 5, sports: "mls" },
  { id: 6, sports: "ncaa football" },
  { id: 7, sports: "ncaa basketball" },
];

const ScreensScores = ({ darkMode }) => {
  return (
    <>
      <div className="container_screen_top screens_scores_container">
        <div className="score_card_container">
          {Array.from({ length: 15 }, (_, i) => i + 1).map((i) => (
            <ScoreCard title={i} darkMode={darkMode} />
          ))}
        </div>
      </div>
      <NavSub>
        {sportsArr.map((s) => (
          <li key={s.id}>{s.sports}</li>
        ))}
      </NavSub>
    </>
  );
};

const ScoreCard = ({ title, darkMode }) => {
  return (
    <div className="score_card_box">
      <div
        className={
          darkMode
            ? "score_card_box_inner_content background_dark_mode_gray box_shadow_dark"
            : "score_card_box_inner_content background_light_mode_white box_shadow_light"
        }
      >
        Game: {title}
      </div>
    </div>
  );
};

export default ScreensScores;
