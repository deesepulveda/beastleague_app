import React from "react";
import "./ScreensSettings.css";
import NavSub from "../nav/NavSub";

const settingsArr = [
  { id: 1, task: "account" },
  { id: 2, task: "settings" },
  { id: 3, task: "privacy" },
  { id: 4, task: "help" },
];

const ScreensSettings = ({ darkMode, onDarkMode }) => {
  return (
    <>
      <div className="container_screen_top screens_settings_container">
        <h1>Settings</h1>
        <button onClick={onDarkMode}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
      <NavSub>
        {settingsArr.map((s) => (
          <li key={s.id}>{s.task}</li>
        ))}
      </NavSub>
    </>
  );
};

export default ScreensSettings;
