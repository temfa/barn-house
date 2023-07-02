import React from "react";
import "./aboutUs.css";
import Layout from "../../../utils/layout/layout";
import WeOffer from "../we-offer/weOffer";
import About from "../../../assets/about-pic.png";
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
            <h2>Know About Our Ecomerce Business, History</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor
              lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
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
