import React, { useState, useEffect } from "react";
import "./sidebar.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { db } from "../../../utils/firebase/firebase-config";
import { ref, onValue } from "firebase/database";
import { signOut } from "firebase/auth";
import { auth } from "../../../utils/firebase/firebase-config";
import SidebarData from "../../../utils/data/sidebar";
import Logout from "../../../assets/logout.svg";
import Close from "../../../assets/times.svg";
import Logo from "../../../assets/logo.png";
import Cookies from "universal-cookie";

const Sidebar = ({ click, action }) => {
  const location = useLocation();
  const cookies = new Cookies();
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [color1, setColor1] = useState("#667085");
  const [color2, setColor2] = useState("#667085");
  const [color3, setColor3] = useState("#667085");
  const [color4, setColor4] = useState("#667085");
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        if (data.orders !== undefined) {
          setCount(Object.entries(data.orders).length);
        } else {
          setCount(0);
        }
      } else {
        setCount(0);
      }
    });
  }, []);
  const mouseOver = (e) => {
    // if (e === "/admin/dashboard") {
    //   setColor1("#fff");
    // }
    // if (e === "/admin/product-list") {
    //   setColor2("#fff");
    // }
    // if (e === "/admin/orders") {
    //   setColor3("#fff");
    // }
    // if (e === "/admin/create-admin") {
    //   setColor4("#fff");
    // }
  };
  const mouseOut = (e) => {
    // if (e === "/admin/dashboard") {
    //   setColor1("#fff");
    // }
    // if (e === "/admin/product-list") {
    //   setColor2("#fff");
    // }
    // if (e === "/admin/orders") {
    //   setColor3("#fff");
    // }
    // if (e === "/admin/create-admin") {
    //   setColor4("#fff");
    // }
  };

  useEffect(() => {
    SidebarData()?.filter((item) => {
      if (location.pathname === item.link) {
        if (location.pathname === "/admin/dashboard") {
          setColor1("#fff");
        }
        if (location.pathname === "/admin/product-list") {
          setColor2("#fff");
        }
        if (location.pathname === "/admin/orders") {
          setColor3("#fff");
        }
        if (location.pathname === "/admin/create-admin") {
          setColor4("#fff");
        }
      }
      return item;
    });
  }, [color1, color2, color3, color4, location.pathname]);
  return (
    <div className={click ? "sidebar-container" : "sidebar-container sidebar-active"}>
      <div className="sidebar-container-header">
        <div>
          <img src={Logo} alt="logo" />
        </div>
        <img src={Close} alt="bars" onClick={action} />
      </div>
      <div className="sidebar-nav">
        {SidebarData(color1, color2, color3, color4)?.map((item, index) => {
          return (
            <NavLink
              to={item.link}
              className={location.pathname === item.link ? "sidebar-nav-active" : "sidebar-nav-single"}
              key={index}
              onMouseOver={mouseOver(item.link)}
              onMouseOut={mouseOut(item.link)}>
              <div>
                {item.img}
                <p>{item.name}</p>
              </div>
              {item.name === "Orders" ? <span>{count}</span> : null}
            </NavLink>
          );
        })}
        <div
          className="sidebar-nav-single"
          onClick={() => {
            signOut(auth)
              .then(() => {
                cookies.remove("admin");
                navigate("/admin-login");
                console.log("Signed out successfully");
              })
              .catch((error) => {
                // An error happened.
                console.log(error);
              });
          }}>
          <div>
            <img src={Logout} alt="logout" />
            <p>Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
