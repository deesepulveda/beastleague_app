import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login_container">
      <div className="logo_box">
        <img src={require("../../assets/logo_icon.png")} alt="" />
      </div>
      <div className="login_box">
        <img src={require("../../assets/user_icon.png")} alt="" />
      </div>
    </div>
  );
};

export default Login;
