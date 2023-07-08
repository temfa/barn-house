import React, { useEffect, useState } from "react";
import "./productsTable.css";
import Loader from "../loader/loader";
import ProductsSingle from "../products-single/productsSingle";
import { db } from "../../../utils/firebase/firebase-config";
import { ref, onValue } from "firebase/database";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { formatter } from "../../../utils/formatter/formatter";
import Delete from "../../../assets/trash.svg";

const ProductsTable = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        setLoading(false);
        if (data.products !== null) {
          setData(data.products);
        } else {
          setData({});
        }
      } else {
        setLoading(false);
        setData([]);
        toast.error("Something went wrong!!!Try again");
      }
    });
  }, []);
  return (
    <div className="products-table-container">
      <ToastContainer />
      <div className="products-table-header">
        <p>Product</p>
        <p>Stock</p>
        <p>Price</p>
        <p>Status</p>
        <p>Added</p>
        <p>Action</p>
      </div>
      {loading ? (
        <Loader />
      ) : data.length === 0 ? (
        <p>You dont have any Product saved click on Add Product to get started</p>
      ) : (
        <>
          <div className="products-table-body">
            {Object.entries(data)?.map((item, index) => {
              return <ProductsSingle productName={item[1].productName} key={index} price={item[1].price} img={item[1].firstImg} stock={item[1].quantity} date={item[1].date} />;
            })}
          </div>
          <table class="table">
            <tbody>
              {Object.entries(data)?.map((items, index) => {
                return (
                  <tr key={index}>
                    <td data-label="Product">{items[1].productName}</td>
                    <td data-label="Stock">{items[1].quantity}</td>
                    <td data-label="Price">{formatter.format(items[1].price)}</td>
                    <td data-label="Status">
                      <span className={items[1].quantity === 0 ? "out" : items[1].quantity <= 10 ? "low" : "published"}>
                        {items[1].quantity === 0 ? "Out of Stock" : items[1].quantity <= 10 ? "Low on Stock" : "Published"}
                      </span>
                    </td>
                    <td data-label="Added">{items[1].date}</td>
                    <td data-label="Action">
                      <img src={Delete} alt="edit" />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default ProductsTable;
