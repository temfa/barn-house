import React, { useMemo } from "react";
import "./singleOrder.css";
import AdminLayout from "../../../utils/admin-layout/adminLayout";
import OrdersDetails from "../../../components/reusable-components/orders-detail/ordersDetail";
import { useLocation } from "react-router-dom";

const SingleOrder = () => {
  const useQuery = () => {
    const { search } = useLocation();

    return useMemo(() => new URLSearchParams(search), [search]);
  };
  let query = useQuery();

  const id = query.get("id");
  return (
    <AdminLayout page={"Orders"}>
      <OrdersDetails id={id} />
    </AdminLayout>
  );
};

export default SingleOrder;
