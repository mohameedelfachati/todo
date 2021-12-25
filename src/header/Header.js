import React from "react";
import "./header.css";
import icon from "../img/skull-logo.png";
import Deconnection from "../svg/Deconnection/DeconnectionIcon";

const Header = () => {
  return (
    <div className="header">
      <img src={icon} alt="nfjzenf" className="icon" />
      <button className="button_container">
        <Deconnection />
        <span className="text_deconnection">Déconnection</span>
      </button>
    </div>
  );
};

export default Header;
