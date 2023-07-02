import React from "react";
import "./about.css";
import Header from "../../components/reusable-components/header/header";
import Banner from "../../components/reusable-components/banner/banner";
import Footer from "../../components/reusable-components/footer/footer";

const About = () => {
  return (
    <>
      <Header />
      <Banner title="About Us" page="About Us" />
      <Footer />
    </>
  );
};

export default About;
