import React from "react";
import "./singleFaq.css";

const SingleFaq = ({ title, answer }) => {
  return (
    <div className="single-faq-container">
      <h2>{title}</h2>
      <p>{answer}</p>
    </div>
  );
};

export default SingleFaq;
