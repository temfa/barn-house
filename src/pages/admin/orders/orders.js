import React from "react";
import "./orders.css";
import AdminLayout from "../../../utils/admin-layout/adminLayout";
import OrdersPage from "../../../components/reusable-components/orders-page/ordersPage";

const Orders = () => {
  return (
    <AdminLayout page="Orders">
      <OrdersPage />
    </AdminLayout>
  );
};

export default Orders;
