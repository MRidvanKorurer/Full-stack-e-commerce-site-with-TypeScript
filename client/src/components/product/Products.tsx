import React, { useState } from "react";
import ProductItem from "./ProductItem";
import "./Products.css";
import SectionTitle from "../SectionTitle";
import Slider from "react-slick";
import productData from "../../data.json";


interface next {
  onClick: any
}

const  NextBtn: React.FC<next> =({ onClick }) => {
  return (
    <button className="glide__arrow glide__arrow--right" onClick={onClick}>
      <i className="bi bi-chevron-right"></i>
    </button>
  );
}

interface prev {
  onClick: any
}

const PrevBtn: React.FC<prev> = ({ onClick }) => {
  return (
    <button className="glide__arrow glide__arrow--left" onClick={onClick}>
      <i className="bi bi-chevron-left"></i>
    </button>
  );
}

const Products: React.FC = () => {
  const [data] = useState(productData);

  const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextBtn onClick={undefined} />,
    prevArrow: <PrevBtn onClick={undefined} />,
    autoplaySpeed: 3000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="products">
      <div className="container">
        <SectionTitle title="Featured Products" desc="Summer Collection New Morden Design"/>
        <div className="product-wrapper product-carousel">
          <div className="glide__track">
          <Slider {...sliderSettings}>
            {data.map((product) => (
              <ProductItem product={product} key={product.id} />
            ))}
          </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;