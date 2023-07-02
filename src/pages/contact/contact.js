import React from "react";
import "./contact.css";
import Header from "../../components/header/header";
import Banner from "../../components/banner/banner";
import Footer from "../../components/footer/footer";
import ContactUs from "../../components/contact-us/contactUs";

const Contact = () => {
  return (
    <>
      <Header />
      <Banner title="Contact Us" page="Contact Us" />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Contact;
