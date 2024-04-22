import React from "react";

const Subscribe: React.FC = () => {
  return (
    <div className="subscribe-row">
      <div className="container">
        <div className="footer-row-wrapper">
          <div className="footer-subscribe-wrapper">
            <div className="footer-subscribe">
              <div className="footer-subscribe-top">
                <h3 className="subscribe-title">
                  Get our emails for info on new items, sales and more.
                </h3>
                <p className="subscribe-desc">
                  We`ll email you a voucher worth $10 off your first order over
                  $50.
                </p>
              </div>
              <div className="footer-subscribe-bottom">
                <form>
                  <input type="text" placeholder="Enter your email address." />
                  <button className="btn">Subscribe</button>
                </form>
                <p className="privacy-text">
                  By subscribing you agree to our{" "}
                  <a href="#">
                    Terms & Conditions and Privacy & Cookies Policy.
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="footer-contact-wrapper">
            <div className="footer-contact-top">
              <h3 className="contact-title">
                Need help? <br />
                (+90) 123 456 78 90
              </h3>
              <p className="contact-desc">We are available 8:00am – 7:00pm</p>
            </div>
            <div className="footer-contact-bottom">
              <div className="download-app">
                <a href="#">
                  <img src="img/footer/app-store.png" alt="" />
                </a>
                <a href="#">
                  <img src="img/footer/google-play.png" alt="" />
                </a>
              </div>
              <p className="privacy-text">
                <strong>Shopping App:</strong> Try our View in Your Room
                feature, manage registries and save payment info.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
