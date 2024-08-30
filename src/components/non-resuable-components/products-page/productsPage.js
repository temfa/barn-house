import React, { useEffect, useState } from "react";
import "./productsPage.css";
import Layout from "../../../utils/layout/layout";
import SingleProducts from "../../reusable-components/single-products/singleProducts";
import { db } from "../../../utils/firebase/firebase-config";
import { ref, onValue } from "firebase/database";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../reusable-components/loader/loader";

const ProductsPage = () => {
  const [data, setData] = useState();
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        setLoading(false);
        if (data.products === undefined) {
          setData([]);
        }
        if (data.products !== null) {
          setData(data.products);
        } else {
          setData({});
        }
      } else {
        setLoading(false);
        setData([]);
        toast.error("Something went wrong!!! Try again");
      }
    });
  }, []);

  return (
    <Layout>
      {loading ? (
        <Loader />
      ) : (
        <>
          <ToastContainer />
          <div className="products-page-container">
            <div className="products-page-header">
              <h2>Produce</h2>
              <div className="per-page">
                <p>Per Page:</p>
                <input type="text" />
              </div>
              <div className="search-container">
                <input
                  type="text"
                  placeholder="Search"
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="products-page-body">
              {Object.entries(data)
                ?.filter((item) =>
                  item[1]?.productName
                    .toLowerCase()
                    .includes(search.toLowerCase())
                )
                ?.map((item, index) => {
                  return (
                    <div className="products-page-single" key={index}>
                      <SingleProducts
                        price={item[1].price}
                        pricep={item[1].priceP}
                        discount={item[1].discountPrice}
                        name={item[1].productName}
                        img={item[1].firstImg}
                        uniqueName={item[1].uniqueName}
                        quantity={item[1].quantity}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </>
      )}
    </Layout>
  );
};

export default ProductsPage;
