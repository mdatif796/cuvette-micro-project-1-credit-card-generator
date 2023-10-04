import React, { useState } from "react";
import "../styles/CardDetailsForm.scss";

const CardDetailsForm = ({ handleDetailsChange }) => {
  const [formInput, setFormInput] = useState({
    name: "",
    cardNumber: "",
    month: "",
    year: "",
    cvc: "",
  });

  let errMsg = {
    nameError: "",
    cardNumberError: "",
    monthError: "",
    cvcError: "",
  };

  const [errors, setError] = useState(errMsg);

  const handleInputChange = (e) => {
    let currValue = e.target.value;

    // check if the listed input value is number
    if (
      e.target.name === "cardNumber" ||
      e.target.name === "month" ||
      e.target.name === "year" ||
      e.target.name === "cvc"
    ) {
      currValue = currValue.replace(/\s/g, "");
      if (isNaN(currValue)) {
        return;
      }
    }

    // checking if the length of current input is exceed its limit
    if (e.target.name === "month" || e.target.name === "year") {
      if (currValue.length > 2) {
        return;
      }
    }

    if (e.target.name === "cvc") {
      if (currValue.length > 3) {
        return;
      }
    }

    if (e.target.name === "cardNumber") {
      if (currValue.length > 16) {
        return;
      }

      currValue = currValue
        .split("")
        .map((cur, ind) => {
          if (ind % 4 === 0) {
            cur = " " + cur;
          }
          return cur;
        })
        .join("")
        .trim();
    }
    setFormInput({ ...formInput, [e.target.name]: currValue.toString() });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (formInput.name.length === 0) {
      setError({ ...errMsg, nameError: "Cardholder name required" });
      return;
    }

    if (formInput.name.length < 4) {
      setError({ ...errMsg, nameError: "Length should be greater than 3" });
      return;
    }

    if (formInput.cardNumber.length === 0) {
      setError({ ...errMsg, cardNumberError: "Card Number required" });
      return;
    }

    if (formInput.cardNumber.length < 14) {
      setError({ ...errMsg, cardNumberError: "Invalid Card Number" });
      return;
    }

    if (formInput.month.length === 0 || formInput.year.length === 0) {
      setError({ ...errMsg, monthError: "Expiry Date required" });
      return;
    }

    if (
      formInput.month > 12 ||
      formInput.month < 1 ||
      formInput.year <= new Date().getFullYear().toString().slice(2) ||
      formInput.month.length < 2 ||
      formInput.year.length < 2
    ) {
      setError({ ...errMsg, monthError: "Invalid Expiry Date" });
      return;
    }

    if (formInput.cvc.length === 0) {
      setError({ ...errMsg, cvcError: "CVC must be required" });
      return;
    }

    if (formInput.cvc.length < 3) {
      setError({ ...errMsg, cvcError: "Invalid CVC" });
      return;
    }

    console.log("successfully submitted");
    handleDetailsChange(formInput);
    setError({ ...errMsg });
    setFormInput({
      name: "",
      cardNumber: "",
      month: "",
      year: "",
      cvc: "",
    });
  };

  return (
    <form onSubmit={handleFormSubmit} className="form">
      <label htmlFor="name">cardholder name</label>
      <input
        type="text"
        id="name"
        placeholder="e.g. Jane Appleseed"
        name="name"
        value={formInput.name}
        onChange={handleInputChange}
      />
      {errors.nameError && <p>{errors.nameError}</p>}
      <label htmlFor="card-number">card number</label>
      <input
        type="text"
        id="card-number"
        placeholder="e.g. 1234 5678 9123 0000"
        name="cardNumber"
        value={formInput.cardNumber}
        onChange={handleInputChange}
      />
      {errors.cardNumberError && <p>{errors.cardNumberError}</p>}
      <div className="expiry-cvc-container">
        <div className="expiry-date-container">
          <label htmlFor="date">exp. date (mm/yy)</label>
          <input
            type="text"
            id="date"
            name="month"
            placeholder="MM"
            value={formInput.month}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="year"
            placeholder="YY"
            value={formInput.year}
            onChange={handleInputChange}
          />
          {errors.monthError && <p>{errors.monthError}</p>}
        </div>
        <div className="cvc-container">
          <label htmlFor="cvc">cvc</label>
          <input
            type="text"
            id="cvc"
            name="cvc"
            placeholder="e.g. 123"
            value={formInput.cvc}
            onChange={handleInputChange}
          />
          {errors.cvcError && <p>{errors.cvcError}</p>}
        </div>
      </div>
      <button>Confirm</button>
    </form>
  );
};

export default CardDetailsForm;
