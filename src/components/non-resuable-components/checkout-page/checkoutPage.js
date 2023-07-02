import React, { useEffect, useState } from "react";
import "./checkoutPage.css";
import Layout from "../../../utils/layout/layout";
import { formatter } from "../../../utils/formatter/formatter";
import Cookies from "universal-cookie";
import { location } from "../../../utils/data/data";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const cart = cookies.get("Cart");
  const [subTotal, setSubTotal] = useState(0);
  const [state, setState] = useState("Lagos");
  useEffect(() => {
    if (cart.length === 0) {
      setSubTotal(0);
    } else if (cart.length === 1) {
      setSubTotal(cart[0].price * cart[0].count);
    } else {
      setSubTotal(
        cart?.reduce((a, b) => {
          return a.price * a.count + b.price * b.count;
        })
      );
    }
  }, [cart]);
  return (
    <Layout>
      <div className="checkout-page-container">
        <div className="checkout-page-wrapper">
          <h2>Contact Information</h2>
          <div className="checkout-page-single">
            <input type="text" placeholder="Email or mobile phone number" />
          </div>
          <div className="checkout-page-shipping">
            <h2>Shipping address</h2>
            <div className="checkout-page-double">
              <input type="text" placeholder="First name" />
              <input type="text" placeholder="Last name" />
            </div>
            <div className="checkout-page-single">
              <input type="text" placeholder="Address" />
            </div>
            <div className="checkout-page-single">
              <select
                onChange={(e) => {
                  setState(e.target.value);
                }}>
                <option value="Lagos">Lagos</option>
                {location?.map((item, index) => {
                  return (
                    <option value={item.state} key={index}>
                      {item.state}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="checkout-page-double">
              <input type="text" placeholder="City" />
              <input type="text" placeholder="Postal Code" />
            </div>
          </div>
        </div>
        <div className="checkout-page-price">
          <div className="cart-checkout-single">
            <h2>Subtotal</h2>
            <p>{formatter.format(subTotal)}</p>
          </div>
          <div className="cart-checkout-single">
            <h2>Shipping</h2>
            {state === "Lagos" ? (
              <p>Delivery Fee of N2000 to Mainland or N1500 to Island should be added.</p>
            ) : (
              <p>We will call you after you order to tell you your delivery fee.</p>
            )}
          </div>
          <button
            onClick={() => {
              navigate("/order-completed");
            }}>
            Place Order
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default CheckoutPage;
