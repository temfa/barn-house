import React, { useEffect, useState } from "react";
import "./ordersDetail.css";
import { db } from "../../../utils/firebase/firebase-config";
import { ref, onValue, update } from "firebase/database";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../loader/loader";
import Added from "../../../assets/added.svg";
import Cards from "../../../assets/credit-card.svg";
import Ship from "../../../assets/truck.svg";
import Customer from "../../../assets/customer.svg";
import Email from "../../../assets/email.svg";
import Phone from "../../../assets/mobile.svg";
import Pin from "../../../assets/pin.svg";
import { formatter, formatterP } from "../../../utils/formatter/formatter";

const OrdersDetails = ({ id }) => {
  const [data, setData] = useState();
  const [total, setTotal] = useState(0);
  const [vat, setVat] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        setLoading(false);
        Object.entries(data.orders).filter((item) => {
          if (item[1].id === id) {
            setData(item[1]);
            setStatus(item[1].status);
          }
          return item;
        });
      } else {
        setLoading(false);
        toast.error("Something went wrong!!!Try again");
      }
    });
  }, [id]);
  useEffect(() => {
    if (data?.cart === undefined) {
      setSubTotal(0);
    } else {
      if (data?.cart.length === 0) {
        setSubTotal(0);
        setTotal(0);
        setVat(0);
      } else if (data?.cart.length === 1) {
        setSubTotal(data?.cart[0].price * data?.cart[0].count);
      } else {
        setSubTotal(
          data?.cart?.reduce((a, b) => {
            return a + b.price * b.count;
          }, 0)
        );
      }
    }
  }, [data]);

  useEffect(() => {
    setTotal(subTotal + vat);
  }, [subTotal, vat]);
  return (
    <div className="orders-details-container">
      <ToastContainer />
      <div className="orders-details-cont">
        <h2>Order Details </h2>
        <select
          onChange={(e) => {
            setStatus(e.target.value);
            update(ref(db, "orders/" + id), {
              status: e.target.value,
            });
          }}>
          <option value="">{status}</option>
          <option value="Processing">Processing</option>
          <option value="Shipped">Shipped</option>
          <option value="Delivered">Delivered</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="orders-details-wrapper">
          <div className="orders-details-head">
            <div className="orders-details-order">
              <h2>
                Order #{data?.id}
                <span className={status === "Shipped" ? "shipped" : status === "Delivered" ? "delivered" : status === "Cancelled" ? "cancelled" : "processing"}>{status}</span>
              </h2>
              <div className="orders-details-single">
                <div className="orders-details-img">
                  <div>
                    <img src={Added} alt="added" />
                  </div>
                  <p>Added</p>
                </div>
                <p>{data?.date}</p>
              </div>
              <div className="orders-details-single">
                <div className="orders-details-img">
                  <div>
                    <img src={Cards} alt="added" />
                  </div>
                  <p>Payment Method</p>
                </div>
                <p>Bank Transfer</p>
              </div>
              <div className="orders-details-single">
                <div className="orders-details-img">
                  <div>
                    <img src={Ship} alt="added" />
                  </div>
                  <p>Shipping Method</p>
                </div>
                <p>Land Transport</p>
              </div>
            </div>
            <div className="orders-details-customer">
              <h2>Customer</h2>
              <div className="orders-details-single">
                <div className="orders-details-img">
                  <div>
                    <img src={Customer} alt="added" />
                  </div>
                  <p>Customer</p>
                </div>
                <p>{`${data?.lastName} ${data?.firstName}`}</p>
              </div>
              <div className="orders-details-single">
                <div className="orders-details-img">
                  <div>
                    <img src={Email} alt="added" />
                  </div>
                  <p>Email</p>
                </div>
                <p>Null</p>
              </div>
              <div className="orders-details-single">
                <div className="orders-details-img">
                  <div>
                    <img src={Phone} alt="added" />
                  </div>
                  <p>Phone</p>
                </div>
                <p>{data?.phone}</p>
              </div>
            </div>
          </div>
          <div className="orders-details-body">
            <div className="orders-details-list">
              <h2>
                Order List <span>{data?.cart.length} Product(s)</span>
              </h2>
              <div className="orders-details-table">
                <div className="orders-details-table-head">
                  <p>Product</p>
                  <p>QTY</p>
                  <p>Price</p>
                  <p>Total</p>
                </div>
                {data?.cart?.map((item, index) => {
                  return (
                    <div className="orders-details-table-single" key={index}>
                      <div className="orders-details-product">
                        <div>
                          <img src={item.img} alt="product" />
                        </div>
                        <p>{item.name}</p>
                      </div>
                      <p>{item.count} pc(s)</p>
                      <p>{data?.currency === "Naira" ? formatter.format(item.price) : data?.currency === "Pound" ? formatterP.format(item.price) : null}</p>
                      <p>
                        {data?.currency === "Naira" ? formatter.format(item.price * item.count) : data?.currency === "Pound" ? formatterP.format(item.price * item.count) : null}
                      </p>
                    </div>
                  );
                })}
                <div className="orders-details-total">
                  <p>Subtotal</p>
                  <p>{data?.currency === "Naira" ? formatter.format(subTotal) : data?.currency === "Pound" ? formatterP.format(subTotal) : null}</p>
                </div>
                <div className="orders-details-total">
                  <p>VAT</p>
                  <p>{data?.currency === "Naira" ? formatter.format(vat) : data?.currency === "Pound" ? formatterP.format(vat) : null}</p>
                </div>
                <div className="orders-details-total">
                  <p>Grand Total</p>
                  <p className="grand-total">{data?.currency === "Naira" ? formatter.format(total) : data?.currency === "Pound" ? formatterP.format(total) : null}</p>
                </div>
              </div>
            </div>
            <div className="orders-details-address">
              <h2>Address</h2>
              <div className="orders-details-address-single">
                <div>
                  <img src={Pin} alt="pin" />
                </div>
                <div>
                  <p>Billing</p>
                  <h2>
                    {data?.address}, {data?.city}, {data?.state}
                  </h2>
                </div>
              </div>
              <div className="orders-details-address-single">
                <div>
                  <img src={Pin} alt="pin" />
                </div>
                <div>
                  <p>Shipping</p>
                  <h2>
                    {data?.address}, {data?.city}, {data?.state}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrdersDetails;
