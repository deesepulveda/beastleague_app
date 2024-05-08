import React from "react";
import "./ScreenScores.css";

const ScreenScores = () => {
  return (
    <div className="screen_container_pages">
      <div className="score_card_container">
        {Array.from({ length: 15 }, (_, i) => i + 1).map((card, i) => (
          <ScoreCard key={i} title={card} />
        ))}
      </div>
    </div>
  );
};

const ScoreCard = () => {
  return (
    <div className="card_box">
      <div className="card_box_inner">
        <div className="card_box_inner_content_teams">
          <div className="card_box_inner_content_visitor">
            <div className="card_box_inner_content_visitor_top inner_content_teams">
              <p style={{ fontSize: "1.25rem", fontWeight: "600" }}>packers</p>
              <p>(2 - 2)</p>
              <p style={{ color: "green", fontWeight: "800" }}>
                +3.5, -150, O/U 42.5
              </p>
            </div>
            <div className="card_box_inner_content_visitor_bottom inner_content_teams">
              <p>j love:</p>
              <p>avg 2.25 tds / 325 ypg</p>
            </div>
          </div>
          <div className="card_box_inner_content_divider"></div>
          <div className="card_box_inner_content_home">
            <div className="card_box_inner_content_home_top inner_content_teams">
              <p
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "600",
                }}
              >
                bears
              </p>
              <p>(2 - 2)</p>
              <p style={{ color: "green", fontWeight: "800" }}>
                -3.5, +150, O/U 42.5
              </p>
            </div>
            <div className="card_box_inner_content_home_bottom inner_content_teams">
              <p>c williams:</p>
              <p>avg 2.5 tds / 355 ypg</p>
            </div>
          </div>
        </div>
        <div className="card_box_inner_content_schedule">
          <p style={{ textTransform: "capitalize" }}>espn / fox</p>
          <p style={{ fontSize: "1.75rem", fontWeight: "600" }}>7:00 pm</p>
          <p style={{ textTransform: "capitalize" }}>temp 78 deg</p>
          <p style={{ textTransform: "capitalize" }}>soldier field</p>
        </div>
      </div>
    </div>
  );
};

export default ScreenScores;
