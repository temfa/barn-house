import React from "react";
import "./orderCompleted.css";
import Header from "../../components/header/header";
import Banner from "../../components/banner/banner";
import Footer from "../../components/footer/footer";
import CompleteOrder from "../../components/complete-order/completeOrder";

const OrderCompleted = () => {
  return (
    <>
      <Header />
      <Banner page="Order Completed" title="Order Completed" />
      <CompleteOrder />
      <Footer />
    </>
  );
};

export default OrderCompleted;
