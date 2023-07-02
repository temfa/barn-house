import React from "react";
import "./shoppingCart.css";
import Header from "../../components/reusable-components/header/header";
import Banner from "../../components/reusable-components/banner/banner";
import Footer from "../../components/reusable-components/footer/footer";
import Cart from "../../components/non-resuable-components/cart/cart";

const ShoppingCart = () => {
  return (
    <>
      <Header />
      <Banner title="Shopping Cart" page="Shopping Cart" />
      <Cart />
      <Footer />
    </>
  );
};

export default ShoppingCart;
