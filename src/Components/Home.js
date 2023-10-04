import React, { useState } from "react";
import "../styles/home.scss";
import CardDetailsForm from "./CardDetailsForm";
import CardFront from "./CardFront";
import CardBack from "./CardBack";

const Home = () => {
  const [cardDetails, setCardDetails] = useState({
    name: "jane appleseed",
    cardNumber: "OOOO OOOO OOOO OOOO",
    month: "OO",
    year: "OO",
    cvc: "OOO",
  });

  const handleDetailsChange = (formDetails) => {
    setCardDetails({ ...formDetails });
  };

  return (
    <div className="home-container">
      <div className="left"></div>
      <div className="right">
        <CardDetailsForm handleDetailsChange={handleDetailsChange} />
      </div>
      <CardFront cardDetails={cardDetails} />
      <CardBack cvc={cardDetails.cvc} />
    </div>
  );
};

export default Home;
