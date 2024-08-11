import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Shop Now</h3>
        <ul>
          <li>What's New</li>
          <li>Sarees</li>
          <li>Salwar Kameez</li>
          <li>Lehenga</li>
          <li>Gowns</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Useful Links</h3>
        <ul>
          <li>Blog</li>
          <li>FAQ's</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Terms of Use</li>
          <li>Privacy & Policies</li>
          <li>Measurements Forms</li>
          <li>Shipping and Return Policies</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Useful Links</h3>
        <ul>
          <li>Video Shopping</li>
          <li>Store Locator</li>
          <li>Wholesale/Bulk Orders</li>
          <li>Cash on Delivery</li>
          <li>Free Shipping</li>
        </ul>
      </div>
      <div className="footer-section contact-section">
        <h3>Contact Us</h3>
        <div className="social-icons">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-pinterest"></i>
          <i className="fab fa-youtube"></i>
          <i className="fab fa-whatsapp"></i>
        </div>
        <p>
          Gaurang<br/>
          Chappal Karkhana, Kathmandu – 560047, Nepal<br/>
        9863942000<br/>
          (Monday to Saturday 11AM to 7PM)
        </p>
        <h3>Shipping Partners</h3>
        <div className="shipping-partners">
          <img src="fedex.png" alt="FedEx" />
          <img src="bluedart.png" alt="Blue Dart" />
          <img src="dtdc.png" alt="DTDC" />
        </div>
        <h3>We Accept</h3>
        <div className="payment-methods">
          <img src="visa.png" alt="Visa" />
          <img src="mastercard.png" alt="MasterCard" />
          <img src="amex.png" alt="American Express" />
          <img src="paypal.png" alt="PayPal" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
