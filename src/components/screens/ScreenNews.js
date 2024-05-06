import React from "react";
// import NavSub from "../nav/NavSub";
import "./ScreenNews.css";

// const newsArr = [
//   { task: "recent", hovered: true },
//   { task: "media", hovered: false },
//   { task: "following", hovered: false },
//   { task: "misc", hovered: false },
// ];

const ScreenNews = () => {
  return (
    <div className="screen_container_pages">
      {/* <NavSub>
        <ul className="sub_nav_ul">
          {newsArr.map((s, i) => (
            <li key={i} className={s.hovered ? "active_link" : ""}>
              {s.task}
            </li>
          ))}
        </ul>
      </NavSub> */}
      <div className="news_container_content">
        <NewsCard name="calebwilliams" />
        <NewsCard name="shoheiohtani" />
        <NewsCard name="justinsteele" />
        <NewsCard name="romeodunze" />
        <NewsCard name="calebwilliams" />
        <NewsCard name="justinsteele" />
        <NewsCard name="shoheiohtani" />
      </div>
    </div>
  );
};

const NewsCard = ({ name }) => {
  return (
    <div className="news_card_box">
      <div className="news_card_inner_content">
        <div className="news_card_inner_content_image_box">
          <img src={require(`../../assets/${name}.jpg`)} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ScreenNews;
