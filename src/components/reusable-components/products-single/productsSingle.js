import React from "react";
import "./productsSingle.css";
import { formatter } from "../../../utils/formatter/formatter";
import Delete from "../../../assets/trash.svg";

const ProductsSingle = ({ price, stock, productName, img, date }) => {
  return (
    <div className="products-single-container">
      <div>
        <img src={img} alt="product-mage" />
        <h2>{productName}</h2>
      </div>
      <p>{stock}</p>
      <p>{formatter.format(price)} </p>
      <p>
        <span className={stock === 0 ? "out" : stock <= 10 ? "low" : "published"}>{stock === 0 ? "Out of Stock" : stock <= 10 ? "Low on Stock" : "Published"}</span>
      </p>
      <p>{date}</p>
      <div>
        <img src={Delete} alt="edit" />
      </div>
    </div>
  );
};

export default ProductsSingle;
