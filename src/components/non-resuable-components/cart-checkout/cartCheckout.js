import React, { useState, useEffect } from "react";
import "./cartCheckout.css";
import { formatter, formatterP } from "../../../utils/formatter/formatter";
import Check from "../../../assets/check.svg";
import { location } from "../../../utils/data/data";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const CartCheckout = ({ cart }) => {
  const navigate = useNavigate();
  const [state, setState] = useState("Lagos");
  const [LocalGovt, setLocalGovt] = useState();
  const [total, setTotal] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const cookies = new Cookies();
  const currency = cookies.get("Cur") === undefined ? "Naira" : cookies.get("Cur");
  useEffect(() => {
    if (cart === undefined) {
      setSubTotal(0);
    } else {
      if (cart.length === 0) {
        setSubTotal(0);
        setTotal(0);
      } else if (cart.length === 1) {
        setSubTotal(cart[0].price * cart[0].count);
      } else {
        setSubTotal(
          cart?.reduce((a, b) => {
            return a + b.price * b.count;
          }, 0)
        );
      }
    }
  }, [cart]);
  console.log(total);
  useEffect(() => {
    location?.filter((item) => {
      if (item.state === state) {
        setLocalGovt(item.localGoverment);
      }
      return item;
    });
  }, [state]);
  return (
    <div className="cart-checkout">
      <div className="cart-checkout-wrapper">
        <h2>Cart Total</h2>
        <div className="cart-checkout-body">
          <div className="cart-checkout-single">
            <h2>Subtotal</h2>
            {currency === "Naira" ? <p>{formatter.format(subTotal)}</p> : currency === "Pound" ? <p>{formatterP.format(subTotal)}</p> : null}
          </div>
          <div className="cart-checkout-single">
            <h2>Shipping</h2>
            {state === "Lagos" ? (
              <p>Delivery Fee of N2000 to Mainland or N1500 to Island should be added.</p>
            ) : (
              <p>We will call you after you order to tell you your delivery fee.</p>
            )}
          </div>
          <div className="cart-checkout-single">
            <h2>Total</h2>
            {currency === "Naira" ? <p>{formatter.format(subTotal)}</p> : currency === "Pound" ? <p>{formatterP.format(subTotal)}</p> : null}
          </div>
          <h3>
            <span>
              <img src={Check} alt="check" />
            </span>
            Shipping & taxes calculated at checkout
          </h3>
          <button
            onClick={() => {
              navigate("/checkout");
            }}>
            Proceed to Checkout
          </button>
        </div>
      </div>
      <div className="cart-checkout-shipping">
        <h2>Calculate Shipping</h2>
        <div className="cart-checkout-body">
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
          <select>
            {/* <option value="">Local</option> */}
            {LocalGovt?.map((items, index) => {
              return (
                <option value={items.lgaName} key={index}>
                  {items.lgaName}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </div>
  );
};

export default CartCheckout;
