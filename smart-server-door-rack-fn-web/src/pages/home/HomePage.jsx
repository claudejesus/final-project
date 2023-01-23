import React from "react";
import "./homePage.css";
import backgroundImage from "../../assets/images/backgroundColor.png";
import { Link } from "react-router-dom";
function HomePage() {
  return (
    <div className="homeContain">
      <div className="backgroundImage">
        <img src={backgroundImage} alt="" />
      </div>
      <div className="button__container">
        <Link to="/login-page">
          <button className="loginButton">Get Into Server Loom</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
