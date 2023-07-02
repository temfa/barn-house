import React from "react";
import "./contact.css";
import Header from "../../components/reusable-components/header/header";
import Banner from "../../components/reusable-components/banner/banner";
import Footer from "../../components/reusable-components/footer/footer";
import ContactUs from "../../components/non-resuable-components/contact-us/contactUs";

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
