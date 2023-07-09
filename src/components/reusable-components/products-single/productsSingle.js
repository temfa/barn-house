import React, { useState } from "react";
import "./productsSingle.css";
import { formatter } from "../../../utils/formatter/formatter";
import Delete from "../../../assets/trash.svg";
import OutsideClick from "../outsideClick/outsideClick";
import { db, storage } from "../../../utils/firebase/firebase-config";
import { ref, remove } from "firebase/database";
import { ref as imgref, deleteObject } from "firebase/storage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const ProductsSingle = ({ price, stock, productName, img, date, uniqueName, imageName, imageName2 }) => {
  const [state, setState] = useState(false);
  const navigate = new useNavigate();
  return (
    <>
      <ToastContainer />
      <div className="products-single-container">
        <div
          onClick={() => {
            navigate(`/admin/edit-product?name=${productName}`);
          }}>
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
          <img
            src={Delete}
            alt="edit"
            onClick={() => {
              setState(!state);
            }}
          />
          {state ? (
            <OutsideClick
              onClickOutside={() => {
                setState(false);
              }}>
              <div className="disput">
                <h2>Are you sure you want to delete?</h2>
                <div>
                  <button
                    onClick={() => {
                      // Create a reference to the file to delete
                      const desertRef = imgref(storage, `images/${imageName}`);
                      const desertRef2 = imgref(storage, `images/${imageName2}`);

                      // Delete the file
                      deleteObject(desertRef)
                        .then(() => {
                          deleteObject(desertRef2)
                            .then(() => {
                              remove(ref(db, "products/" + uniqueName)).then(() => {
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
                      setState(false);
                    }}>
                    No
                  </button>
                </div>
              </div>
            </OutsideClick>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default ProductsSingle;
