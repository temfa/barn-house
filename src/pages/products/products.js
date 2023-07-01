import React from "react";
import "./products.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Banner from "../../components/banner/banner";
import ProductsPage from "../../components/products-page/productsPage";

const Products = () => {
  return (
    <>
      <Header />
      <Banner title="Barn House Products" page="Products" />
      <ProductsPage />
      <Footer />
    </>
  );
};

export default Products;
