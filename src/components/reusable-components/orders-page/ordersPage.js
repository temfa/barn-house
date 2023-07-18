import React, { useState, useEffect } from "react";
import "./ordersPage.css";
import OrdersTable from "../orders-table/ordersTable";
import { db } from "../../../utils/firebase/firebase-config";
import { ref, onValue } from "firebase/database";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../loader/loader";
import Delete from "../../../assets/trash.svg";
import { formatter, formatterP } from "../../../utils/formatter/formatter";
import { useNavigate } from "react-router-dom";

const OrdersPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        setLoading(false);
        if (data.orders !== undefined) {
          setData(data.orders);
        } else {
          setData([]);
        }
      } else {
        setLoading(false);
        setData([]);
        toast.error("Something went wrong!!!Try again");
      }
    });
  }, []);
  return (
    <div className="orders-page-container">
      <ToastContainer />
      <div className="orders-page-header">
        <h2>Orders</h2>
        <select
          onChange={(e) => {
            setStatus(e.target.value);
          }}>
          <option value="">All</option>
          <option value="Processing">Processing</option>
          <option value="Shipped">Shipped</option>
          <option value="Delivered">Delivered</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </div>
      <div className="orders-page-table">
        <div className="orders-table-head">
          <p>Order ID</p>
          <p>Product</p>
          <p>Date</p>
          <p>Customer</p>
          <p>Total</p>
          <p>Status</p>
          {/* <p>Action</p> */}
        </div>
        {loading ? (
          <Loader />
        ) : data.length === 0 ? (
          <p className="no-orders">You don't have any Orders!!!!</p>
        ) : (
          <>
            {Object.entries(data)
              ?.sort((x, y) => {
                let a = new Date(x[1].date),
                  b = new Date(y[1].date);
                return b - a;
              })
              ?.filter((el) => el[1]?.status.toLowerCase().includes(status.toLowerCase()))
              ?.map((item, index) => {
                return (
                  <OrdersTable
                    name={`${item[1].lastName}  ${item[1].firstName}`}
                    key={index}
                    number={item[1].phone}
                    total={item[1].subTotal}
                    date={item[1].date}
                    id={item[1].id}
                    productName={item[1].cart[0].name}
                    status={item[1].status}
                    cart={item[1].cart}
                    currency={item[1].currency}
                  />
                );
              })}
            <table className="table">
              <tbody>
                {Object.entries(data)?.map((items, index) => {
                  return (
                    <tr key={index}>
                      <td
                        data-label="Order ID"
                        className="order-id"
                        onClick={() => {
                          navigate(`/admin/single-order?id=${items[1].id}`);
                        }}>
                        {items[1].id}
                      </td>
                      <td data-label="Product">{items[1].cart[0].name}</td>
                      <td data-label="Date">{items[1].date}</td>
                      <td data-label="Customer">{`${items[1].lastName}  ${items[1].firstName}`}</td>
                      <td data-label="Total">
                        {items[1].currency === "Naira" ? formatter.format(items[1].subTotal) : items[1].currency === "Pounds" ? formatterP.format(items[1].subTotal) : null}
                      </td>
                      <td data-label="Status">
                        <span
                          className={
                            items[1].status === "Shipped" ? "shipped" : items[1].status === "Delivered" ? "delivered" : items[1].status === "Cancelled" ? "cancelled" : "processing"
                          }>
                          {items[1].status}
                        </span>
                      </td>
                      <td data-label="Action">
                        <img src={Delete} alt="edit" />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
};

export default OrdersPage;
