import React, { useEffect, useState } from "react";
import "./dashboardBody.css";
import OrdersPage from "../orders-page/ordersPage";
import Cash from "../../../assets/cash-checked.svg";
import Cart from "../../../assets/process.svg";
import Scan from "../../../assets/scan.svg";
import { db } from "../../../utils/firebase/firebase-config";
import { ref, onValue } from "firebase/database";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../loader/loader";

const DashboardBody = () => {
  const [revenue, setRevenue] = useState([]);
  const [process, setProcess] = useState([]);
  const [product, setProduct] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        setLoading(false);
        if (data.orders !== undefined) {
          Object.entries(data.orders).map((item) => {
            if (item[1].status === "Processing") {
              setProcess((arr) => [...arr, `${arr.length}`]);
            }
            if (item[1].status === "Delivered") {
              setRevenue((arr) => [...arr, item[1]]);
            }
            return item;
          });
        }
        if (data.products !== undefined) {
          setProduct(Object.entries(data.products).length);
        }
      } else {
        setLoading(false);
        toast.error("Something went wrong!!!Try again");
      }
    });
  }, []);
  return (
    <div className="dashboard-body-container">
      <ToastContainer />
      {loading ? (
        <Loader />
      ) : (
        <div className="dashboard-body-header">
          <div className="dashboard-body-single">
            <div className="scan">
              <img src={Scan} alt="cash" />
            </div>
            <p>Total Products</p>
            <h2>{product}</h2>
          </div>
          <div className="dashboard-body-single">
            <div className="cart">
              <img src={Cart} alt="cash" />
            </div>
            <p>Total Pending Orders</p>
            <h2>{process.length}</h2>
          </div>
          <div className="dashboard-body-single">
            <div className="cash">
              <img src={Cash} alt="cash" />
            </div>
            <p>Total Delivered Orders</p>
            <h2>{revenue.length}</h2>
          </div>
        </div>
      )}
      <OrdersPage />
    </div>
  );
};

export default DashboardBody;
