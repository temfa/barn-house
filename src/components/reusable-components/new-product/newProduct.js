import React, { useState, useRef } from "react";
import "./newProduct.css";
import Img from "../../../assets/img.svg";
import { db, storage } from "../../../utils/firebase/firebase-config";
import { ref, set } from "firebase/database";
import { ref as imgref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../loader/loader";

const NewProduct = () => {
  const myref = useRef();
  const [loading, setLoading] = useState(false);
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [firstImage, setFirstImage] = useState("");
  const [secondImage, setSecondImage] = useState("");
  const [basePrice, setBasePrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [uniqueName, setUniqueName] = useState("");
  const [quantity, setQuantity] = useState("");

  const add = () => {
    setLoading(true);
    const storageRef = imgref(storage, `images/${firstImage.name}`);
    const uploadTask = uploadBytesResumable(storageRef, firstImage);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);
      },
      (err) => {
        toast.error("Error in Uploading first Image try again!!!");
        console.log(err);
      },
      async () => {
        // download url
        await getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          //   setFirstImageUrl(url);

          const storageRef2 = imgref(storage, `images/${secondImage.name}`);
          const uploadTask2 = uploadBytesResumable(storageRef2, secondImage);
          uploadTask2.on(
            "state_changed",
            (snapshot) => {
              let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log(progress);
            },
            (err) => {
              toast.error("Error in Uploading Second Image Try again!!!");
              console.log(err);
            },
            async () => {
              // download url
              await getDownloadURL(uploadTask2.snapshot.ref).then((url2) => {
                saveDatatoDb(url, url2);
              });
            }
          );
        });
      }
    );
  };
  const saveDatatoDb = (url, url2) => {
    set(ref(db, "products/" + uniqueName), {
      imageName: firstImage.name,
      imageName2: secondImage.name,
      firstImg: url,
      secondImg: url2,
      productName,
      quantity: parseInt(quantity, 10),
      description,
      discountPrice: discount,
      price: basePrice,
      uniqueName,
      date: new Date().toDateString(),
    });
    setLoading(false);
    setBasePrice("");
    setDescription("");
    setDiscount("");
    setFirstImage("");
    // setFirstImageUrl("");
    setProductName("");
    setQuantity("");
    setSecondImage("");
    // setSecondImageUrl("");
    setUniqueName("");
    toast.success("Uploaded Successfully!!!!");
    // myref.
  };
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
      <div className="new-product-wrapper">
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
      </div>
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
      {loading ? <Loader /> : <button onClick={add}>Add</button>}
    </div>
  );
};

export default NewProduct;
