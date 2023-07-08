import React from "react";
import "./admin-login.css";
import Header from "../../../components/reusable-components/header/header";
import Banner from "../../../components/reusable-components/banner/banner";
import Footer from "../../../components/reusable-components/footer/footer";
import LoginForm from "../../../components/non-resuable-components/login-form/loginForm";

const AdminLogin = () => {
  return (
    <>
      <Header />
      <Banner page="Admin Login" title="Admin Login" />
      <LoginForm user="admin" />
      <Footer />
    </>
  );
};

export default AdminLogin;
