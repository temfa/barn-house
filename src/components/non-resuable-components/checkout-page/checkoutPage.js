import React, { useEffect, useState } from "react";
import "./checkoutPage.css";
import Layout from "../../../utils/layout/layout";
import { formatter } from "../../../utils/formatter/formatter";
import Cookies from "universal-cookie";
import { location } from "../../../utils/data/data";
import { useNavigate } from "react-router-dom";
import { db } from "../../../utils/firebase/firebase-config";
import { ref, set, onValue } from "firebase/database";
import Loader from "../../reusable-components/loader/loader";

const CheckoutPage = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const cart = cookies.get("Cart");
  const [subTotal, setSubTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState("Lagos");
  const [phone, setPhone] = useState("");
  const [newArray, setNewArray] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [code, setCode] = useState("");
  useEffect(() => {
    if (cart.length === 0) {
      setSubTotal(0);
    } else if (cart.length === 1) {
      setSubTotal(cart[0].price * cart[0].count);
    } else {
      setSubTotal(
        cart?.reduce((a, b) => {
          return a + b.price * b.count;
        }, 0)
      );
    }
  }, [cart]);

  function generate(n) {
    var add = 1,
      max = 12 - add; // 12 is the min safe number Math.random() can generate without it starting to pad the end with zeros.

    if (n > max) {
      return generate(max) + generate(n - max);
    }

    max = Math.pow(10, n + add);
    var min = max / 10; // Math.pow(10, n) basically
    var number = Math.floor(Math.random() * (max - min + 1)) + min;

    return ("" + number).substring(add);
  }

  const checkout = () => {
    setLoading(true);
    let id = generate(6);
    set(ref(db, "orders/" + id), {
      id: id,
      firstName,
      lastName,
      phone,
      address,
      state,
      city,
      cart,
      subTotal,
      status: "Processing",
      date: new Date().toDateString(),
    });
    cookies.set("Cart", []);
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      setNewArray(
        Object.entries(data.products)?.map((item) => {
          cart.map((res) => {
            if (item[1].uniqueName === res.uniqueName) {
              item[1].quantity = item[1].quantity - res.count;
              return item;
            }
            return item;
          });
          return item;
        })
      );
    });
  };
  useEffect(() => {
    if (newArray.length !== 0) {
      newArray?.map((item) => {
        set(ref(db, "products/" + item[0]), {
          imageName: item[1].imageName,
          imageName2: item[1].imageName2,
          firstImg: item[1].firstImg,
          secondImg: item[1].secondImg,
          productName: item[1].productName,
          quantity: item[1].quantity,
          description: item[1].description,
          discountPrice: item[1].discountPrice,
          price: item[1].price,
          uniqueName: item[1].uniqueName,
          date: item[1].date,
        });
        return item;
      });
      navigate("/order-completed");
      setLoading(false);
    }
  }, [newArray, navigate]);
  return (
    <Layout>
      <div className="checkout-page-container">
        <div className="checkout-page-wrapper">
          <h2>Contact Information</h2>
          <div className="checkout-page-single">
            <input
              type="text"
              placeholder="Mobile phone number"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </div>
          <div className="checkout-page-shipping">
            <h2>Shipping address</h2>
            <div className="checkout-page-double">
              <input
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
              <input
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </div>
            <div className="checkout-page-single">
              <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
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
              <input
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => {
                  setCity(e.target.value);
                }}
              />
              <input
                type="text"
                placeholder="Postal Code"
                value={code}
                onChange={(e) => {
                  setCode(e.target.value);
                }}
              />
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
          {loading ? <Loader /> : <button onClick={checkout}>Place Order</button>}
        </div>
      </div>
    </Layout>
  );
};

export default CheckoutPage;
