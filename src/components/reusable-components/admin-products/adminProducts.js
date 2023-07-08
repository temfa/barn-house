import React from "react";
import "./adminProducts.css";
import { useNavigate } from "react-router-dom";
import AdminButton from "../admin-button/adminButton";
import ProductsTable from "../products-table/productsTable";

const AdminProducts = () => {
  const navigate = useNavigate();
  return (
    <div className="admin-products-container">
      <div className="admin-products-navigation">
        <h2>Products List</h2>
        <AdminButton
          text="+ Add Products"
          action={() => {
            navigate("/admin/product-list/add-products");
          }}
        />
      </div>
      {/* <div className="admin-products-search"></div> */}
      <ProductsTable />
    </div>
  );
};

export default AdminProducts;
