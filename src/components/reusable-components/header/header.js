import React, { useEffect, useState } from "react";
import "./header.css";
import Layout from "../../../utils/layout/layout";
import Envelope from "../../../assets/envelope.svg";
import Phone from "../../../assets/phone.svg";
import Cart from "../../../assets/cart.svg";
import Navbar from "../../non-resuable-components/navbar/navbar";
import Search from "../../../assets/search.svg";
import Bars from "../../../assets/bars.svg";
import Close from "../../../assets/times.svg";
import Logo from "../../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const Header = () => {
  const navigate = useNavigate();
  const cookies = new Cookies();
  const [mobile, setMobile] = useState(true);
  const [number, setNumber] = useState(true);
  const cart = cookies.get("Cart");
  useEffect(() => {
    setNumber(cart.length);
  }, [cart]);
  const click = () => {
    setMobile(!mobile);
  };
  return (
    <div className="header-container">
      <div className="header-contact">
        <Layout>
          <div className="header-bar">
            <div className="header-details">
              <div>
                <img src={Envelope} alt="envelope" />
                <a href="mailto:barnhouseagrointegrated@gmail.com">Mail us</a>
              </div>
              <div>
                <img src={Phone} alt="phone" />
                <p>Call us</p>
              </div>
            </div>
            <div className="header-cart">
              <div
                onClick={() => {
                  navigate("/shopping-cart");
                }}>
                <img src={Cart} alt="cart" />
                <p>My Cart {cart !== undefined ? <sup>{number}</sup> : null}</p>
              </div>
            </div>
          </div>
        </Layout>
      </div>
      <div className="header-body">
        <Layout>
          <div className="header-wrapper">
            <div className="header-logo">
              <div className="header-img">
                <img src={Logo} alt="logo" />
              </div>
              {mobile ? <img src={Bars} alt="bars" onClick={click} /> : <img src={Close} alt="close" onClick={click} />}
            </div>
            <Navbar mobile={mobile} />
            <div className="header-search">
              <input type="text" />
              <div>
                <img src={Search} alt="search" />
              </div>
            </div>
          </div>
        </Layout>
      </div>
    </div>
  );
};

export default Header;
