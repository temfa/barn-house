import React from "react";
import "./adminButton.css";

const AdminButton = ({ text, action }) => {
  return (
    <button className="admin-button" onClick={action}>
      {text}
    </button>
  );
};

export default AdminButton;
