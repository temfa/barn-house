import React from "react";
import "./faq.css";
import Header from "../../components/reusable-components/header/header";
import Banner from "../../components/reusable-components/banner/banner";
import Footer from "../../components/reusable-components/footer/footer";
import FaqBody from "../../components/non-resuable-components/faq-body/faqBody";

const Faq = () => {
  return (
    <>
      <Header />
      <Banner page="FAQs" title="FAQs" />
      <FaqBody />
      <Footer />
    </>
  );
};

export default Faq;
