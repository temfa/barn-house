import React from "react";
import "./landing.css";
import Header from "../../components/header/header";
import Welcome from "../../components/welcome/welcome";
import LandingProducts from "../../components/landing-products/landingProducts";
import WeOffer from "../../components/we-offer/weOffer";
import Footer from "../../components/footer/footer";

const Landing = () => {
  return (
    <>
      <Header />
      <Welcome />
      <LandingProducts />
      <WeOffer />
      <Footer />
    </>
  );
};

export default Landing;
