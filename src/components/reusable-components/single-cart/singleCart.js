import React from "react";
import "./singleCart.css";
import { formatter, formatterP } from "../../../utils/formatter/formatter";
import Close from "../../../assets/close.svg";
import Cookies from "universal-cookie";

const SingleCart = ({ img, name, price, quantity, add, sub, remove }) => {
  const cookies = new Cookies();
  const currency = cookies.get("Cur") === undefined ? "Naira" : cookies.get("Cur");
  return (
    <div className="single-cart-container">
      <div className="single-cart-product">
        <div className="single-cart-img">
          <img src={Close} alt="close" className="close" onClick={remove} />
          <img src={img} alt="product" className="not-close" />
        </div>
        <div>
          <h2>{name}</h2>
        </div>
      </div>
      <div className="single-cart-price">{currency === "Naira" ? <p>{formatter.format(price)}</p> : currency === "Pound" ? <p>{formatterP.format(price)}</p> : null}</div>
      <div className="single-cart-quantity">
        <h2>
          <span onClick={sub}>-</span> {quantity} <span onClick={add}>+</span>
        </h2>
      </div>
      <div className="single-cart-price">
        {currency === "Naira" ? <p>{formatter.format(price * quantity)}</p> : currency === "Pound" ? <p>{formatterP.format(price * quantity)}</p> : null}
      </div>
    </div>
  );
};

export default SingleCart;
