import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login_container">
      <div className="logo_box">
        <img src={require("../../assets/logo_icon.png")} alt="" />
      </div>
      <AccountStatus />
      <div className="login_box">
        <img src={require("../../assets/user_icon.png")} alt="" />
      </div>
    </div>
  );
};

const AccountStatus = () => {
  return (
    <div className="account_status_container">
      <p>Sign Up / Log In to Earn Points!</p>
    </div>
  );
};

export default Login;
