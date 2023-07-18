import React, { useEffect, useState } from "react";
import "./cart.css";
import Layout from "../../../utils/layout/layout";
import SingleCart from "../../reusable-components/single-cart/singleCart";
import Cookies from "universal-cookie";
import { ToastContainer, toast } from "react-toastify";
import CartCheckout from "../cart-checkout/cartCheckout";

const Cart = () => {
  const cookies = new Cookies();
  const [cart, setCart] = useState(cookies.get("Cart") === undefined ? [] : cookies.get("Cart"));
  useEffect(() => {
    cookies.set("Cart", cart);
  });
  console.log(cart);
  return (
    <Layout>
      <ToastContainer />
      <div className="cart-container">
        {cart === "undefined" ? (
          <p>You dont have any product in your cart!! </p>
        ) : cart?.length === 0 ? (
          <p>You dont have any product in your cart!! </p>
        ) : (
          <>
            <div className="cart-body">
              <div className="cart-header">
                <h2>Product</h2>
                <h2>Price</h2>
                <h2>Quantity</h2>
                <h2>Total</h2>
              </div>
              {cart?.map((item, index) => {
                return (
                  <SingleCart
                    remove={() => {
                      setCart(
                        cart?.filter((items) => {
                          return items !== cart[index];
                        })
                      );
                    }}
                    key={index}
                    name={item.name}
                    price={item.price}
                    quantity={item.count}
                    img={item.img}
                    add={() => {
                      let newCart = cart?.map((e, index2) => {
                        if (index === index2) {
                          return {
                            ...e,
                            count: e.count + 1,
                          };
                        } else {
                          return e;
                        }
                      });
                      setCart(newCart);
                    }}
                    sub={() => {
                      if (item.count === 1) {
                        toast.error("Minimum of 1 Product");
                      } else {
                        let newCart = cart?.map((e, index2) => {
                          if (index === index2) {
                            return {
                              ...e,
                              count: e.count - 1,
                            };
                          } else {
                            return e;
                          }
                        });
                        setCart(newCart);
                      }
                    }}
                  />
                );
              })}
              <div className="cart-button">
                <button
                  onClick={() => {
                    setCart([]);
                  }}>
                  Clear Cart
                </button>
              </div>
            </div>
            <CartCheckout cart={cart} />
          </>
        )}
      </div>
    </Layout>
  );
};

export default Cart;
