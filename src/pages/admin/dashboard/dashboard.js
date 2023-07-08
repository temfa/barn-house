import React from "react";
import "./dashboard.css";
import AdminLayout from "../../../utils/admin-layout/adminLayout";
import DashboardBody from "../../../components/reusable-components/dashboard-body/dashboardBody";

const Dashboard = () => {
  return (
    <AdminLayout page="Dashboard">
      <DashboardBody />
    </AdminLayout>
  );
};

export default Dashboard;
