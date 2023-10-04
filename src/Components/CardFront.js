import React from "react";
import "../styles/cardFront.scss";

const CardFront = ({ cardDetails }) => {
  let { cardNumber, name, month, year } = cardDetails;
  return (
    <div className="card-front-container">
      <div className="circle">
        <span className="fill-circle"></span>
        <span className="empty-circle"></span>
      </div>
      <h1 className="card-number">{cardNumber}</h1>
      <div className="name-and-expiry">
        <h3 className="name">{name.toUpperCase()}</h3>
        <h3 className="expiry">
          {month}/{year}
        </h3>
      </div>
    </div>
  );
};

export default CardFront;
