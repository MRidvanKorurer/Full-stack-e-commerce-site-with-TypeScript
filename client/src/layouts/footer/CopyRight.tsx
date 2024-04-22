import React from 'react'

const CopyRight: React.FC = () => {
  return (
    <div className="copyright-row">
        <div className="container">
          <div className="footer-copyright">
            <div className="site-copyright">
              <p>
                Copyright 2022 © E-Commerce Theme. All right reserved. Powered
                by Emin Basbayan.
              </p>
            </div>
            <a href="#">
              <img src="img/footer/cards.png" alt="" />
            </a>
            <div className="footer-menu">
              <ul className="footer-menu-list">
                <li className="list-item">
                  <a href="#">Privacy Policy</a>
                </li>
                <li className="list-item">
                  <a href="#">Terms and Conditions</a>
                </li>
                <li className="list-item">
                  <a href="#">Returns Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  )
}

export default CopyRight