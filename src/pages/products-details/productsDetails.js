import React, { useMemo } from "react";
import "./productsDetails.css";
import Header from "../../components/reusable-components/header/header";
import Footer from "../../components/reusable-components/footer/footer";
import Banner from "../../components/reusable-components/banner/banner";
import { useLocation } from "react-router-dom";
import ProductDetails from "../../components/non-resuable-components/product-details/productDetails";

const ProductsDetails = () => {
  const useQuery = () => {
    const { search } = useLocation();

    return useMemo(() => new URLSearchParams(search), [search]);
  };
  let query = useQuery();

  const name = query.get("name");
  return (
    <>
      <Header />
      <Banner title="Product Details" page="Product Details" />
      <ProductDetails name={name} />
      <Footer />
    </>
  );
};

export default ProductsDetails;
