import React from "react";
import { Routes, Route } from "react-router-dom";
import ScreensHome from "./ScreensHome";
import ScreensNews from "./ScreensNews";
import ScreensPlay from "./ScreensPlay";
import ScreensScores from "./ScreensScores";
import ScreensSettings from "./ScreensSettings";
import MultiBar from "../multi_bar/MultiBar";
import "../App.css";
import "./Screens.css";

const Screens = ({ darkMode, onDarkMode }) => {
  return (
    <div
      className={
        darkMode
          ? "container_screen background_dark_mode_softBlack"
          : "container_screen background_light_mode_softGray"
      }
    >
      <MultiBar />
      <Routes>
        <Route
          path="/beastleague_app/home"
          element={<ScreensHome darkMode={darkMode} />}
        />
        <Route
          path="/beastleague_app/"
          element={<ScreensScores darkMode={darkMode} />}
        />
        <Route
          path="/beastleague_app/news"
          element={<ScreensNews darkMode={darkMode} />}
        />
        <Route
          path="/beastleague_app/play"
          element={<ScreensPlay darkMode={darkMode} />}
        />
        <Route
          path="/beastleague_app/settings"
          element={
            <ScreensSettings darkMode={darkMode} onDarkMode={onDarkMode} />
          }
        />
      </Routes>
    </div>
  );
};

export default Screens;
