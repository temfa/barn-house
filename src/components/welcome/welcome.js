import React from "react";
import "./welcome.css";
import Layout from "../../utils/layout/layout";
import Garri from "../../assets/garri.png";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <Layout>
        <div className="welcome-wrapper">
          <div className="welcome-text">
            <p>Best Food Item For Your Home....</p>
            <h2>New Food Item Trends in 2020</h2>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</h4>
            <button>Shop Now</button>
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
