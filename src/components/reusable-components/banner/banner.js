import React from "react";
import "./banner.css";
import Layout from "../../../utils/layout/layout";

const Banner = ({ title, page }) => {
  return (
    <div className="banner-container">
      <Layout>
        <h2>{title}</h2>
        <p>
          Home . <span>{page}</span>
        </p>
      </Layout>
    </div>
  );
};

export default Banner;
