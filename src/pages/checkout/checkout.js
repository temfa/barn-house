import React from "react";
import "./checkout.css";
import Header from "../../components/header/header";
import Banner from "../../components/banner/banner";
import Footer from "../../components/footer/footer";
import CheckoutPage from "../../components/checkout-page/checkoutPage";

const Checkout = () => {
  return (
    <>
      <Header />
      <Banner page="Checkout" title="Checkout" />
      <CheckoutPage />
      <Footer />
    </>
  );
};

export default Checkout;
