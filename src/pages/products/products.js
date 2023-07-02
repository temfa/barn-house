import React from "react";
import "./products.css";
import Header from "../../components/reusable-components/header/header";
import Footer from "../../components/reusable-components/footer/footer";
import Banner from "../../components/reusable-components/banner/banner";
import ProductsPage from "../../components/non-resuable-components/products-page/productsPage";

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
