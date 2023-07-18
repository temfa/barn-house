import React, { useState } from "react";
import "./singleProducts.css";
import { formatter, formatterP } from "../../../utils/formatter/formatter";
import Search from "../../../assets/search-plus.svg";
import Cart from "../../../assets/cart-blue.svg";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Cookies from "universal-cookie";

const SingleProducts = ({ price, discount, name, img, quantity, uniqueName, pricep }) => {
  const navigate = useNavigate();
  const cookies = new Cookies();
  const currency = cookies.get("Cur") === undefined ? "Naira" : cookies.get("Cur");
  const [active, setActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const data = [
    {
      name,
      price: currency === "Naira" ? price - (discount / 100) * price : currency === "Pound" ? pricep - (discount / 100) * pricep : null,
      img,
      count: 1,
      quantity,
      uniqueName,
    },
  ];
  return (
    <div
      className="single-products-container"
      onMouseOver={() => {
        setActive(true);
      }}
      onMouseOut={() => {
        setActive(false);
      }}>
      <ToastContainer />
      <div className={active ? "single-products-active" : "single-products-wrapper"}>
        <img src={img} alt="flour" />
      </div>
      <h2
        onClick={() => {
          navigate(`/products-details?name=${name}`);
        }}>
        {name}
      </h2>
      {currency === "Naira" ? (
        <p>
          {formatter.format(price - (discount / 100) * price)} <span>{discount}% off</span>
        </p>
      ) : currency === "Pound" ? (
        <p>
          {formatterP.format(pricep - (discount / 100) * pricep)} <span>{discount}% off</span>
        </p>
      ) : null}
      {active ? (
        <div className="single-products-action">
          <img
            src={Cart}
            alt="cart"
            onClick={() => {
              let tempData = cookies.get("Cart");
              if (tempData === undefined) {
                tempData = data;
              } else {
                let itemInCart = tempData.find((item) => item.name === name);
                if (itemInCart) {
                  tempData = tempData?.map((item) => {
                    if (item.name === name) {
                      return {
                        ...item,
                        count: item.count + 1,
                      };
                    } else {
                      return item;
                    }
                  });
                } else {
                  tempData.push({
                    name,
                    price: currency === "Naira" ? price - (discount / 100) * price : currency === "Pound" ? pricep - (discount / 100) * pricep : null,
                    img,
                    count: 1,
                    quantity,
                    uniqueName,
                  });
                }
              }
              cookies.set("Cart", tempData);
              toast.success("Added to Cart!!!");
            }}
          />
          <img
            src={Search}
            onClick={() => {
              setIsOpen(true);
            }}
            alt="search"
          />
        </div>
      ) : null}
      {isOpen && (
        <Lightbox
          mainSrc={img}
          onCloseRequest={() => {
            setIsOpen(false);
            setActive(false);
          }}
        />
      )}
    </div>
  );
};

export default SingleProducts;
