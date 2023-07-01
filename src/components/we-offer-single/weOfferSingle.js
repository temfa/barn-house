import React from "react";
import "./weOfferSingle.css";

const WeOfferSingle = ({ img, title, text }) => {
  return (
    <div className="we-offer-single-container">
      <div>
        <img src={img} alt="offer" />
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default WeOfferSingle;
