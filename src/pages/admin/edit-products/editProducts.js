import React from "react";
import "./editProducts.css";
import AdminLayout from "../../../utils/admin-layout/adminLayout";
import Edit from "../../../components/non-resuable-components/edit/edit";

const EditProduct = () => {
  return (
    <AdminLayout page="Edit Product">
      <Edit />
    </AdminLayout>
  );
};

export default EditProduct;
