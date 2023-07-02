import React from "react";
import "./about.css";
import Header from "../../components/header/header";
import Banner from "../../components/banner/banner";
import Footer from "../../components/footer/footer";

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
