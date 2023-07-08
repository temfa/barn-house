import React, { useEffect, useState } from "react";
import "./productDetails.css";
import Layout from "../../../utils/layout/layout";
import { db } from "../../../utils/firebase/firebase-config";
import { ref, onValue } from "firebase/database";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../reusable-components/loader/loader";
import { formatter } from "../../../utils/formatter/formatter";
import Cookies from "universal-cookie";

const ProductDetails = ({ name }) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [img, setImg] = useState("");
  const cookies = new Cookies();
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        setLoading(false);
        Object.entries(data.products).filter((item) => {
          if (item[1].productName === name) {
            setData(item[1]);
            setImg(item[1].firstImg);
          }
          return item;
        });
      } else {
        setLoading(false);
        toast.error("Something went wrong!!!Try again");
      }
    });
  }, [name]);
  const cart = [
    {
      name: data?.productName,
      price: data?.price - data?.discountPrice,
      img: data?.imgUrl,
      count: 1,
      uniqueName: data?.uniqueName,
      quantity: data?.quantity,
    },
  ];
  return (
    <Layout>
      {loading ? (
        <Loader />
      ) : (
        <>
          <ToastContainer />
          <div className="product-details-container">
            <div className="product-details-img">
              <div className="product-details-small">
                <img
                  src={data.firstImg}
                  alt="logog"
                  onClick={() => {
                    setImg(data.firstImg);
                  }}
                />
                <img
                  src={data.secondImg}
                  alt="logog"
                  onClick={() => {
                    setImg(data.secondImg);
                  }}
                />
              </div>
              <div className="product-details-big">
                <img src={img} alt="Logogo" />
              </div>
            </div>
            <div className="product-details-text">
              <h2>{name}</h2>
              <p>
                {formatter.format(data.price - data.discountPrice)} <span>{formatter.format(data.price)}</span>
              </p>
              <h3>{data.description}</h3>
              <button
                onClick={() => {
                  let tempData = cookies.get("Cart");
                  if (tempData === "undefined") {
                    tempData = cart;
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
                        name: data?.productName,
                        price: data?.price - data?.discountPrice,
                        img: data?.imgUrl,
                        count: 1,
                        uniqueName: data?.uniqueName,
                        quantity: data?.quantity,
                      });
                    }
                  }
                  cookies.set("Cart", tempData);
                  toast.success("Added to Cart!!!");
                }}>
                Add to Cart
              </button>
            </div>
          </div>
        </>
      )}
    </Layout>
  );
};

export default ProductDetails;
