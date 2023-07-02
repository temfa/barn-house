import React from "react";
import "./navbar.css";
import { NavLink, useLocation } from "react-router-dom";
import { navbar } from "../../../utils/data/data";

const Navbar = ({ mobile }) => {
  const location = useLocation();
  return (
    <div className={mobile ? "header-nav" : "header-nav actived"}>
      {navbar?.map((item, index) => {
        return (
          <NavLink to={item.link} key={index} className={location.pathname === item.link ? "header-active" : ""}>
            {item.name}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Navbar;
