import React, { useState, useRef, useMemo, useEffect } from "react";
import { db } from "../../../utils/firebase/firebase-config";
import { ref, update, onValue } from "firebase/database";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../reusable-components/loader/loader";
import { useLocation } from "react-router-dom";

const Edit = () => {
  const myref = useRef();
  const [loading, setLoading] = useState(false);
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [basePrice, setBasePrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [uniqueName, setUniqueName] = useState("");
  const [quantity, setQuantity] = useState("");
  const useQuery = () => {
    const { search } = useLocation();

    return useMemo(() => new URLSearchParams(search), [search]);
  };
  let query = useQuery();

  const name = query.get("name");
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        setLoading(false);
        Object.entries(data.products).filter((item) => {
          if (item[1].productName === name) {
            setProductName(item[1].productName);
            setDescription(item[1].description);
            setBasePrice(item[1].price);
            setDiscount(item[1].discountPrice);
            setUniqueName(item[1].uniqueName);
            setQuantity(item[1].quantity);
          }
          return item;
        });
      } else {
        setLoading(false);
        toast.error("Something went wrong!!!Try again");
      }
    });
  }, [name]);

  return (
    <div className="new-product-container" ref={myref}>
      <ToastContainer />
      <h2>Add Product</h2>
      <div className="new-product-wrapper">
        <h2>General Information</h2>
        <div className="form-group">
          <label>Product Name</label>
          <input
            type="text"
            placeholder="Type product name here. . ."
            value={productName}
            onChange={(e) => {
              setProductName(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            placeholder="Type product description here. . ."
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}></textarea>
        </div>
      </div>
      {/* <div className="new-product-wrapper">
        <h2>Media</h2>
        <label>Front Image</label>
        <div className="media-wrapper">
          <img src={Img} alt="media" />
          {firstImage ? <p>{firstImage.name}</p> : <p>Drag and drop image here, or click add image</p>}
          <label>
            <input
              type="file"
              onChange={(e) => {
                setFirstImage(e.target.files[0]);
              }}
            />
            Add Image
          </label>
        </div>
        <label>Back Image</label>
        <div className="media-wrapper">
          <img src={Img} alt="media" />
          {secondImage ? <p>{secondImage.name}</p> : <p>Drag and drop image here, or click add image</p>}
          <label>
            <input
              type="file"
              onChange={(e) => {
                setSecondImage(e.target.files[0]);
              }}
            />
            Add Image
          </label>
        </div>
      </div> */}
      <div className="new-product-wrapper">
        <h2>Pricing</h2>
        <div className="form-group">
          <label>Base Price</label>
          <input
            type="text"
            placeholder="Type base price here. . ."
            value={basePrice}
            onChange={(e) => {
              setBasePrice(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label>Discount</label>
          <input
            type="text"
            placeholder="Type discount . . ."
            value={discount}
            onChange={(e) => {
              setDiscount(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="new-product-wrapper">
        <h2>Inventory</h2>
        <div className="inventory-wrapper">
          <div>
            <div className="form-group">
              <label>SKU</label>
              <input
                type="text"
                placeholder="Type Product SKU here. . ."
                value={uniqueName}
                onChange={(e) => {
                  setUniqueName(e.target.value);
                }}
              />
            </div>
          </div>
          <div>
            <div className="form-group">
              <label>Quantity</label>
              <input
                type="text"
                placeholder="Type Quantity here. . ."
                value={quantity}
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <button
          onClick={() => {
            update(ref(db, "products/" + uniqueName), {
              productName,
              quantity: parseInt(quantity, 10),
              description,
              discountPrice: discount,
              price: basePrice,
              uniqueName,
            });
            toast.success("Updated Successfully");
          }}>
          Update
        </button>
      )}
    </div>
  );
};

export default Edit;
