import React from "react";
import "./footer.css";
import Layout from "../../../utils/layout/layout";
import Facebook from "../../../assets/facebook.png";
import Instagram from "../../../assets/instagram.png";
import Twitter from "../../../assets/twitter.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <Layout>
        <div className="footer-wrapper">
          <p>©Barn House - All Rights Reserved</p>
          <div className="footer-socials">
            <img src={Facebook} alt="facebook" />
            <img src={Instagram} alt="Instagram" />
            <img src={Twitter} alt="Twitter" />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Footer;
