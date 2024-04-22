import React from 'react'

const Widgets: React.FC = () => {
  return (
    <div className="widgets-row">
        <div className="container">
          <div className="footer-widgets">
            <div className="brand-info">
              <div className="footer-logo">
                <a href="index.html" className="logo">
                  LOGO
                </a>
              </div>
              <div className="footer-desc">
                <p>
                  {" "}
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis in termapol.
                </p>
              </div>
              <div className="footer-contact">
                <p>
                  <a href="tel:555 555 55 55">(+800) 1234 5678 90</a> –{" "}
                  <a href="mailto:info@example.com">info@example.com</a>
                </p>
              </div>
            </div>
            <div className="widget-nav-menu">
              <h4>Information</h4>
              <ul className="menu-list">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Returns Policy</a>
                </li>
                <li>
                  <a href="#">Shipping Policy</a>
                </li>
                <li>
                  <a href="#">Dropshipping</a>
                </li>
              </ul>
            </div>
            <div className="widget-nav-menu">
              <h4>Account</h4>
              <ul className="menu-list">
                <li>
                  <a href="#">Dashboard</a>
                </li>
                <li>
                  <a href="#">My Orders</a>
                </li>
                <li>
                  <a href="#">My Wishlist</a>
                </li>
                <li>
                  <a href="#">Account details</a>
                </li>
                <li>
                  <a href="#">Track My Orders</a>
                </li>
              </ul>
            </div>
            <div className="widget-nav-menu">
              <h4>Shop</h4>
              <ul className="menu-list">
                <li>
                  <a href="#">Affiliate</a>
                </li>
                <li>
                  <a href="#">Bestsellers</a>
                </li>
                <li>
                  <a href="#">Discount</a>
                </li>
                <li>
                  <a href="#">Latest Products</a>
                </li>
                <li>
                  <a href="#">Sale Products</a>
                </li>
              </ul>
            </div>
            <div className="widget-nav-menu">
              <h4>Categories</h4>
              <ul className="menu-list">
                <li>
                  <a href="#">Women</a>
                </li>
                <li>
                  <a href="#">Men</a>
                </li>
                <li>
                  <a href="#">Bags</a>
                </li>
                <li>
                  <a href="#">Outerwear</a>
                </li>
                <li>
                  <a href="#">Shoes</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Widgets