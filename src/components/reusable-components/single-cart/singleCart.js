import React from "react";
import "./singleCart.css";
import { formatter } from "../../../utils/formatter/formatter";
import Close from "../../../assets/close.svg";

const SingleCart = ({ img, name, price, quantity, add, sub, remove }) => {
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
      <div className="single-cart-price">
        <p>{formatter.format(price)}</p>
      </div>
      <div className="single-cart-quantity">
        <h2>
          <span onClick={sub}>-</span> {quantity} <span onClick={add}>+</span>
        </h2>
      </div>
      <div className="single-cart-price">
        <p>{formatter.format(price * quantity)}</p>
      </div>
    </div>
  );
};

export default SingleCart;
