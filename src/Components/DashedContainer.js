import React from "react";
import "../styles/dashedContainer.scss";

const DashedContainer = () => {
  return (
    <div className="dashed-container">
      <div className="top">
        <span className="large"></span>
        <span className="small"></span>
        <span className="small"></span>
        <span className="ultra-small"></span>
      </div>
      <div className="middle">
        <span className="small"></span>
        <span className="medium"></span>
        <span className="ultra-medium"></span>
        <span className="ultra-small"></span>
      </div>
      <div className="bottom">
        <span className="ultra-small"></span>
        <span className="small"></span>
        <span className="small"></span>
        <span className="large"></span>
      </div>
    </div>
  );
};

export default DashedContainer;
