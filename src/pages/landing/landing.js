import React from "react";
import "./landing.css";
import Header from "../../components/reusable-components/header/header";
import Welcome from "../../components/non-resuable-components/welcome/welcome";
import LandingProducts from "../../components/non-resuable-components/landing-products/landingProducts";
import WeOffer from "../../components/non-resuable-components/we-offer/weOffer";
import Footer from "../../components/reusable-components/footer/footer";

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
