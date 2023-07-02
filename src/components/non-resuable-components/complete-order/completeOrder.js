import React from "react";
import "./completeOrder.css";
import Layout from "../../../utils/layout/layout";
import Check from "../../../assets/check.svg";
import { useNavigate } from "react-router-dom";

const CompleteOrder = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="complete-order-container">
        <div className="complete-order-check">
          <img src={Check} alt="check" />
        </div>
        <h2>Your Order Is Completed! </h2>
        <p>Thank you for your order! Your order is being processed and will be completed within 3-6 hours. </p>
        <div className="bank-details">
          <h2>Our bank details</h2>
          <h3>Barn House Nigeria LTD</h3>
          <div className="bank-name">
            <div className="cart-checkout-single">
              <p>Bank</p>
              <h2>Zenith bank</h2>
            </div>
            <div className="cart-checkout-single">
              <p>Account Number</p>
              <h2>1013226180</h2>
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            navigate("/products");
          }}>
          Continue Shopping
        </button>
      </div>
    </Layout>
  );
};

export default CompleteOrder;
