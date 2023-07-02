import React from "react";
import "./input.css";

const Input = ({ placeholder, action, type }) => {
  return type === "input" ? (
    <input type="text" placeholder={placeholder} onChange={action} className="inputs" />
  ) : (
    <textarea placeholder={placeholder} onChange={action} className="text-area"></textarea>
  );
};
export default Input;
