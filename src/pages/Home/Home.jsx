import React from "react";
import Logo from "../../assets/logo.svg";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-container-main">
      <div className="home-container">
        <img src={Logo} alt="" className="main-logo" />

        <div>
          <h1 className="logo-name">
            <i className="fas fa-bolt"></i>FlashUI
          </h1>
        </div>

        <p className="app-description">
          FlashUI is a component library designed to streamline the
          development of user interfaces. Lightweight and easy to integrate,
          offering a variety of UI elements.
        </p>

        <button className="home-button" onClick={() => navigate("/components")}>
          Let's Start
        </button>
      </div>
    </div>
  );
};

export default Home;
