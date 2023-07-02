import React from "react";
import "./orderCompleted.css";
import Header from "../../components/reusable-components/header/header";
import Banner from "../../components/reusable-components/banner/banner";
import Footer from "../../components/reusable-components/footer/footer";
import CompleteOrder from "../../components/non-resuable-components/complete-order/completeOrder";

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
