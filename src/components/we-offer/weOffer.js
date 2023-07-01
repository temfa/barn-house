import React from "react";
import "./weOffer.css";
import Layout from "../../utils/layout/layout";
import { offers } from "../../utils/data/data";
import WeOfferSingle from "../we-offer-single/weOfferSingle";

const WeOffer = () => {
  return (
    <Layout>
      <div className="we-offer-container">
        <h2>What Barn House Offers</h2>
        <div className="we-offer-wrapper">
          {offers?.map((item, index) => {
            return (
              <div className="we-offer-single" key={index}>
                <WeOfferSingle text={item.text} title={item.title} img={item.img} />
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default WeOffer;
