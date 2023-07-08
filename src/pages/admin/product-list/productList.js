import React from "react";
import "./productList.css";
import AdminLayout from "../../../utils/admin-layout/adminLayout";
import AdminProducts from "../../../components/reusable-components/admin-products/adminProducts";

const ProductList = () => {
  return (
    <AdminLayout page="Products">
      <AdminProducts />
    </AdminLayout>
  );
};

export default ProductList;
