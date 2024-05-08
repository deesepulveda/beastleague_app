import React from "react";
import "./ScreenNews.css";

const playersArr = [
  { type: "nfl", player: "calebwilliams" },
  { type: "mlb", player: "justinsteele" },
  { type: "nfl", player: "romeodunze" },
  { type: "nba", player: "lonzoball" },
  { type: "mlb", player: "shotaimanaga" },
  { type: "nhl", player: "connorbedard" },
  { type: "ufc", player: "islammakhachev" },
  { type: "mls", player: "lionelmessi" },
  { type: "mlb", player: "shoheiohtani" },
];

const ScreenNews = () => {
  return (
    <div className="screen_container_pages">
      <div className="news_container_content">
        {playersArr.map((p, i) => (
          <NewsCard key={i} name={p.player} title={p.type} />
        ))}
      </div>
    </div>
  );
};

const NewsCard = ({ name, title }) => {
  return (
    <div className="news_card_box">
      <div className="news_card_inner_content">
        <div className="news_card_inner_content_image_box">
          <img src={require(`../../assets/${name}.jpg`)} alt="" />
        </div>
        <div className="news_card_inner_content_title">{title}</div>
      </div>
    </div>
  );
};

export default ScreenNews;
