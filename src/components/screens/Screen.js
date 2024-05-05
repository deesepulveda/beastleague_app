import React from "react";
import { Routes, Route } from "react-router-dom";
import "./Screen.css";
import ScreenScores from "./ScreenScores";
import ScreenHome from "./ScreenHome";
import ScreenNews from "./ScreenNews";
import ScreenPlay from "./ScreenPlay";
import ScreenSettings from "./ScreenSettings";

const Screen = () => {
  return (
    <div className="screen_container">
      <Routes>
        <Route path="/" element={<ScreenScores />} />
        <Route path="/home" element={<ScreenHome />} />
        <Route path="/news" element={<ScreenNews />} />
        <Route path="/play" element={<ScreenPlay />} />
        <Route path="/settings" element={<ScreenSettings />} />
      </Routes>
    </div>
  );
};

export default Screen;
