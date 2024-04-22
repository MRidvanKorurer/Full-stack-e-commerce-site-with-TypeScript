import React from "react";
import BlogItem from "./BlogItem";
import "./Blogs.css";
import SectionTitle from "../SectionTitle";

const Blogs: React.FC = () => {
  return (
    <section className="blogs">
      <div className="container">
        <SectionTitle title="From Our Blog" desc="Summer Collection New Morden Design"/>
        <ul className="blog-list">
          <BlogItem />
          <BlogItem />
          <BlogItem />
        </ul>
      </div>
    </section>
  );
};

export default Blogs;