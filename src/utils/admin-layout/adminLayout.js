import React, { useState, useEffect } from "react";
import "./adminLayout.css";
import AdminHeader from "../../components/reusable-components/admin-header/adminHeader";
import Sidebar from "../../components/reusable-components/sidebar/sidebar";
import { auth } from "../firebase/firebase-config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Idle from "react-idle";
import Cookies from "universal-cookie";

const AdminLayout = ({ children, page }) => {
  const [click, setClick] = useState(true);
  const cookies = new Cookies();
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/admin-login");
      }
    });
  }, [navigate]);
  const preloadCornify = () => {
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
  };
  return (
    <div className="admin-layout-container">
      <Idle
        timeout={300000}
        onChange={({ idle }) => {
          if (idle) {
            preloadCornify();
          }
        }}
      />
      <Sidebar
        click={click}
        action={() => {
          setClick(!click);
        }}
        logoutAction={preloadCornify}
      />
      <div className="admin-layout-body">
        <AdminHeader
          click={click}
          action={() => {
            setClick(!click);
          }}
          page={page}
        />
        <div className="admin-layout-wrapper">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
