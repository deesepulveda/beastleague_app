import { useState } from "react";
import "./App.css";
import Header from "./header/Header";
import NavMain from "./nav/NavMain";
import Screens from "./screens/Screens";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const onDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={
        darkMode
          ? "app background_dark_mode_black"
          : "app background_light_mode_white"
      }
    >
      <div className="components_container">
        <Header darkMode={darkMode} />
        <NavMain darkMode={darkMode} />
        <Screens darkMode={darkMode} onDarkMode={onDarkMode} />
      </div>
    </div>
  );
}

export default App;
