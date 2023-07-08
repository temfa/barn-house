import React from "react";
import "./ordersTable.css";
import Delete from "../../../assets/trash.svg";
import { formatter } from "../../../utils/formatter/formatter";
import { useNavigate } from "react-router-dom";
import { db } from "../../../utils/firebase/firebase-config";
import { ref, remove } from "firebase/database";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OrdersTable = ({ id, productName, date, name, number, total, status, cart }) => {
  const navigate = useNavigate();
  return (
    <>
      <ToastContainer />
      <div className="orders-table-container">
        <p>#{id}</p>
        <p
          onClick={() => {
            navigate(`/admin/single-order?id=${id}`);
          }}>
          {productName}
          {cart.length > 1 ? (
            <>
              <br /> <span>+{cart.length - 1} other products</span>
            </>
          ) : null}
        </p>
        <p>{date}</p>
        <div className="name">
          <h2>{name}</h2>
          <p>{number}</p>
        </div>
        <p>{formatter.format(total)}</p>
        <p>
          <span className={status === "Shipped" ? "shipped" : status === "Delivered" ? "delivered" : status === "Cancelled" ? "cancelled" : "processing"}>{status}</span>
        </p>
        <div className="action">
          <img
            src={Delete}
            alt="delete"
            onClick={() => {
              remove(ref(db, "orders/" + id)).then(() => {
                toast.success("Deleted Successfully");
              });
            }}
          />
        </div>
      </div>
    </>
  );
};

export default OrdersTable;
