import React from "react";
import "./App.css";
import Header from "./header/Header";
import Screen from "./screens/Screen";
import Footer from "./footer/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Screen />
      <Footer />
    </div>
  );
}

export default App;
