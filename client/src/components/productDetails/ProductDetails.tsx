import React from "react";
import "./ProductDetails.css";
import Breadcrumb from "./breadcrumb/Breadcrumb";
import Gallery from "./gallery/Gallery";
import Info from "./info/Info";
import Tabs from "./tabs/Tabs";

const ProductDetails: React.FC = () => {
  return (
    <section className="single-product">
      <div className="container">
        <div className="single-product-wrapper">
          <Breadcrumb />
          <div className="single-content">
            <main className="site-main">
              <Gallery />
              <Info />
            </main>
          </div>

          <Tabs />
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;