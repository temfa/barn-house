import React from "react";
import "./adminHeader.css";
import Bars from "../../../assets/bars.svg";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

const AdminHeader = ({ click, action, page }) => {
  const cookies = new Cookies();
  const user = cookies.get("admin");
  const navigate = useNavigate();
  if (user === undefined) {
    navigate("/admin-login");
  }
  return (
    <div className="admin-header-container">
      <div className="admin-header-page">
        <img src={Bars} alt="bars" onClick={action} />
        <h2>{page}</h2>
      </div>
      <div className="admin-header-details">
        <h2>{user?.name}</h2>
        <p>{user?.role}</p>
      </div>
    </div>
  );
};

export default AdminHeader;
