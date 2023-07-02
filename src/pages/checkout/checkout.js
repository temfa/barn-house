import React from "react";
import "./checkout.css";
import Header from "../../components/reusable-components/header/header";
import Banner from "../../components/reusable-components/banner/banner";
import Footer from "../../components/reusable-components/footer/footer";
import CheckoutPage from "../../components/non-resuable-components/checkout-page/checkoutPage";

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
