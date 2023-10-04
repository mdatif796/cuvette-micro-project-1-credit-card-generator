import React from "react";
import "../styles/cardback.scss";
import DashedContainer from "./DashedContainer";

const CardBack = ({ cvc }) => {
  return (
    <div className="card-back-container">
      <div className="black-strap"></div>
      <div className="cvc-container">
        <p className="cvc">{cvc}</p>
      </div>
      <DashedContainer />
    </div>
  );
};

export default CardBack;
