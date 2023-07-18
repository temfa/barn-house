import React from "react";
import "./aboutUs.css";
import Layout from "../../../utils/layout/layout";
import WeOffer from "../we-offer/weOffer";
import About from "../../../assets/garri.png";
import Button from "../../reusable-components/button/button";

const AboutUs = () => {
  return (
    <>
      <Layout>
        <div className="aboutus-container">
          <div className="aboutus-img">
            <img src={About} alt="aboutpic" />
          </div>
          <div className="aboutus-text">
            <h2>About Barn House</h2>
            <p>
              Welcome to Barn House, your trusted online destination for all your agricultural needs. We are passionate about connecting farmers, growers, and agricultural
              enthusiasts with high-quality products and services in a convenient and efficient manner. Thank you for choosing Barn House as your trusted agro e-commerce partner.
              We look forward to serving you and being a part of your agricultural success story.
            </p>
            <Button text="Contact us" />
          </div>
        </div>
      </Layout>
      <WeOffer />
    </>
  );
};

export default AboutUs;
