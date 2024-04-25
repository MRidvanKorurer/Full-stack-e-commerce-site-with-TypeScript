import React from "react";
import Slider from "../components/slider/Slider";
import Categories from "../components/category/Categories";
import Products from "../components/product/Products";
import Campaigns from "../components/campaigns/Campaigns";
import Blogs from "../components/blog/Blogs";
import Brands from "../components/brand/Brands";
import CampaignSingle from "../components/campaignSingle/CampaignSingle";
import Policy from "../components/policy/Policy";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomePage: React.FC = () => {
  return (
    <>
      <Slider />
      <Categories />
      <Products />
      <Campaigns />
      <Products />
      <Blogs />
      <Brands />
      <CampaignSingle />
      <Policy />  
    </>
  );
};

export default HomePage;
