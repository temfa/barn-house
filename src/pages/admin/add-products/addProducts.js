import React from "react";
import "./addProducts.css";
import AdminLayout from "../../../utils/admin-layout/adminLayout";
import NewProduct from "../../../components/reusable-components/new-product/newProduct";

const AddProducts = () => {
  return (
    <AdminLayout page="Products">
      <NewProduct />
    </AdminLayout>
  );
};
export default AddProducts;
