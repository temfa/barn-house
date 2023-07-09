import React, { useEffect, useState } from "react";
import "./productsTable.css";
import Loader from "../loader/loader";
import ProductsSingle from "../products-single/productsSingle";
import { db, storage } from "../../../utils/firebase/firebase-config";
import { ref as imgref, deleteObject } from "firebase/storage";
import { ref, onValue, remove } from "firebase/database";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { formatter } from "../../../utils/formatter/formatter";
import Delete from "../../../assets/trash.svg";
import OutsideClick from "../outsideClick/outsideClick";
import { useNavigate } from "react-router-dom";

const ProductsTable = () => {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState("");
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
            {Object.entries(data)
              ?.sort((x, y) => {
                let a = new Date(x[1].date);
                let b = new Date(y[1].date);
                return b - a;
              })
              ?.map((item, index) => {
                return (
                  <ProductsSingle
                    productName={item[1].productName}
                    key={index}
                    price={item[1].price}
                    img={item[1].firstImg}
                    imageName={item[1].imageName}
                    imageName2={item[1].imageName2}
                    stock={item[1].quantity}
                    date={item[1].date}
                    uniqueName={item[1].uniqueName}
                  />
                );
              })}
          </div>
          <table className="table">
            <tbody>
              {Object.entries(data)?.map((items, index) => {
                return (
                  <tr key={index}>
                    <td
                      data-label="Product"
                      className="product-name"
                      onClick={() => {
                        navigate(`/admin/edit-product?name=${items[1].productName}`);
                      }}>
                      {items[1].productName}
                    </td>
                    <td data-label="Stock">{items[1].quantity}</td>
                    <td data-label="Price">{formatter.format(items[1].price)}</td>
                    <td data-label="Status">
                      <span className={items[1].quantity === 0 ? "out" : items[1].quantity <= 10 ? "low" : "published"}>
                        {items[1].quantity === 0 ? "Out of Stock" : items[1].quantity <= 10 ? "Low on Stock" : "Published"}
                      </span>
                    </td>
                    <td data-label="Added">{items[1].date}</td>
                    <td data-label="Action" className="action-delete">
                      <img
                        src={Delete}
                        alt="edit"
                        onClick={(e) => {
                          setState(items[1].productName);
                        }}
                      />
                      {state === items[1].productName ? (
                        <OutsideClick
                          onClickOutside={() => {
                            setState("");
                          }}>
                          <div className="dispute">
                            <h2>Are you sure you want to delete?</h2>
                            <div>
                              <button
                                onClick={() => {
                                  // Create a reference to the file to delete
                                  const desertRef = imgref(storage, `images/${items[1].imageName}`);
                                  const desertRef2 = imgref(storage, `images/${items[1].imageName2}`);

                                  // Delete the file
                                  deleteObject(desertRef)
                                    .then(() => {
                                      deleteObject(desertRef2)
                                        .then(() => {
                                          remove(ref(db, "products/" + items[1].uniqueName)).then(() => {
                                            toast.success("Deleted Successfully");
                                            setState(false);
                                          });
                                        })
                                        .catch((error) => {
                                          console.log(error);
                                          toast.error("Something Occured!! Please try again");
                                        });
                                    })
                                    .catch((error) => {
                                      console.log(error);
                                      toast.error("Something Occured!! Please try again");
                                    });
                                }}>
                                Yes
                              </button>
                              <button
                                onClick={() => {
                                  setState("");
                                  console.log(state);
                                }}>
                                No
                              </button>
                            </div>
                          </div>
                        </OutsideClick>
                      ) : null}
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
