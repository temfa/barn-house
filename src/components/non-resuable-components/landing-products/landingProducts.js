import React, { useState, useEffect } from "react";
import "./landingProducts.css";
import Layout from "../../../utils/layout/layout";
import SingleProducts from "../../reusable-components/single-products/singleProducts";
import { NavLink } from "react-router-dom";
import { db } from "../../../utils/firebase/firebase-config";
import { ref, onValue } from "firebase/database";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../reusable-components/loader/loader";

const LandingProducts = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        setLoading(false);
        setData(data.products);
      } else {
        setLoading(false);
        setData([]);
        toast.error("Something went wrong!!!Try again");
      }
    });
  }, []);
  return (
    <Layout>
      {loading ? (
        <Loader />
      ) : (
        <div className="landing-products-container">
          <ToastContainer />
          <h2>Barn House Products</h2>
          <div className="landing-products-wrapper">
            {Object.entries(data)?.map((item, index) => {
              return (
                <div className="landing-products-single" key={index}>
                  <SingleProducts
                    price={item[1].price}
                    discount={item[1].discountPrice}
                    name={item[1].productName}
                    img={item[1].firstImg}
                    quantity={item[1].quantity}
                    uniqueName={item[1].uniqueName}
                  />
                </div>
              );
            })}
          </div>
          {data.length === 0 ? null : <NavLink to="/products">View More</NavLink>}
        </div>
      )}
    </Layout>
  );
};

export default LandingProducts;
