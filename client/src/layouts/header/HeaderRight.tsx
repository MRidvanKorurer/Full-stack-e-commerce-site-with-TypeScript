import React from "react";
import { useAppDispatch } from "../../redux/hooks";
import { isSearchShowTrue } from "../../redux/slices/modelSlice";

const HeaderRight: React.FC = () => {
  const dispatch = useAppDispatch();
  
  return (
    <div className="header-right">
      <div className="header-right-links">
        <a href="account.html" className="header-account">
          <i className="bi bi-person"></i>
        </a>
        <button className="search-button">
          <i onClick={() => dispatch(isSearchShowTrue())} className="bi bi-search"></i>
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
