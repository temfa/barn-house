import React from "react";
import "./shoppingCart.css";
import Header from "../../components/header/header";
import Banner from "../../components/banner/banner";
import Footer from "../../components/footer/footer";
import Cart from "../../components/cart/cart";

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
