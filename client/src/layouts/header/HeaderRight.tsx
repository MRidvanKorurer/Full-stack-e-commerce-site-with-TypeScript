import React from "react";

const HeaderRight: React.FC = () => {
  return (
    <div className="header-right">
      <div className="header-right-links">
        <a href="account.html" className="header-account">
          <i className="bi bi-person"></i>
        </a>
        <button className="search-button">
          <i className="bi bi-search"></i>
        </button>
        <a href="#">
          <i className="bi bi-heart"></i>
        </a>
        <div className="header-cart">
          <a href="cart.html" className="header-cart-link">
            <i className="bi bi-bag"></i>
            <span className="header-cart-count">0</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderRight;
