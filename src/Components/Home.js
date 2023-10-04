import React from "react";
import "../styles/home.scss";
import CardDetailsFrom from "./CardDetailsFrom";

const Home = () => {
  return (
    <div className="home-container">
      <div className="left"></div>
      <div className="right">
        <CardDetailsFrom />
      </div>
    </div>
  );
};

export default Home;
