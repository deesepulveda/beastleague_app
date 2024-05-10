import React from "react";
import "./LoginModal.css";

const LoginModal = ({ onShowModal }) => {
  return (
    <div className="login_modal_container">
      <h1 onClick={onShowModal}>x</h1>
    </div>
  );
};

export default LoginModal;
