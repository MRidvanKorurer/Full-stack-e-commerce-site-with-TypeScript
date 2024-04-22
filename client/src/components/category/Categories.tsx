import CategoryItem from "./CategoryItem";
import "./Categories.css";
import React from "react";
import SectionTitle from "../SectionTitle";

const Categories: React.FC = () => {
  return (
    <section className="categories">
      <div className="container">
        <SectionTitle title="Categories" desc="Summer Collection New Morden Design"/>

        <ul className="category-list">
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
        </ul>
        
      </div>
    </section>
  );
};

export default Categories;