import React from "react";
import "./welcome.css";
import Layout from "../../../utils/layout/layout";
import Garri from "../../../assets/garri.png";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div className="welcome-container">
      <Layout>
        <div className="welcome-wrapper">
          <div className="welcome-text">
            <p>Best Food Item For Your Home....</p>
            <h2>New Food Item Trends in 2023</h2>
            <h4>
              Welcome to Barn House, your premier destination for all your agro-related needs! At Barn House, we understand the vital role agriculture plays in our lives and the
              importance of providing farmers, growers, and agricultural enthusiasts with a seamless online platform to access top-quality products and services.
            </h4>
            <button
              onClick={() => {
                navigate("/products");
              }}>
              Shop Now
            </button>
          </div>
          <div className="welcome-img">
            <div className="first-circle"></div>
            <img src={Garri} alt="garri" />
            <div className="second-circle"></div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Welcome;
