import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import "./NavMain.css";

const navLinksList = [
  { id: 1, title: "news", hovered: false },
  { id: 2, title: "scores", hovered: true },
  { id: 3, title: "home", hovered: false },
  { id: 4, title: "play", hovered: false },
  { id: 5, title: "settings", hovered: false },
];

const NavMain = ({ darkMode }) => {
  return (
    <div className="nav_main_container">
      <ul
        className={
          darkMode
            ? "nav_main_container_ul background_dark_mode_gray"
            : "nav_main_container_ul background_light_mode_white"
        }
      >
        {navLinksList.map((li) => (
          <NavLink
            to={li.title === "scores" ? "/" : li.title}
            key={li.id}
            value={li.hovered}
          >
            <p
              className={
                darkMode
                  ? "nav_main_link_titles dark_mode_font_color"
                  : "nav_main_link_titles"
              }
            >
              {li.title}
            </p>
            <div className="nav_main_link_icons">
              <img
                src={
                  darkMode
                    ? require(`../../assets/${li.title}_icon_dark.png`)
                    : require(`../../assets/${li.title}_icon.png`)
                }
                alt=""
              />
            </div>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default NavMain;
