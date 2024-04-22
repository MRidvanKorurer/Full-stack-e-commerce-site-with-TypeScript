import React from 'react'
import "./Header.css";
import Notification from './Notification';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';
import HeaderMid from './HeaderMid';

const Header: React.FC = () => {
  return (
    <header>
    <Notification />

    <div className="header-row">
      <div className="container">
        <div className="header-wrapper">
          <div className="header-mobile">
            <i className="bi bi-list" id="btn-menu"></i>
          </div>
          <HeaderLeft />
          <HeaderMid />
          <HeaderRight />
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header