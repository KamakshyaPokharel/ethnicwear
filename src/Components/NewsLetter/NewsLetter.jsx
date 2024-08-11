import React from 'react';
import './NewsLetter.css';

const Newsletter = () => {
  return (
    <div className="newsletter">
      <h2>Many things are happening, Get the latest news & updates. Subscribe our Newsletter!</h2>
      <div className="newsletter-input">
        <input type="email" placeholder="Enter Email Address" />
        <button>Subscribe Now</button>
      </div>
      <div className="features">
        <div className="feature">
          <div className="icon">📦</div>
          <h3>90% Ready To Ship</h3>
          <p>We impart assurance on worldwide delivery and 90% of the merchandise are ready to ship. Once the order placed from your end, the product ordered will be delivered to your doorstep within 3-4 business days.</p>
        </div>
        <div className="feature">
          <div className="icon">🛡️</div>
          <h3>100% Original Quality</h3>
          <p>Quality assurance of our product are highly uncompromisable as we offer 100% genuine quality, ensuring our products and services to meet upto your expectation.</p>
        </div>
        <div className="feature">
          <div className="icon">🏷️</div>
          <h3>Best Price Challenge</h3>
          <p>The prices offered here are in complete gratification with the customer as it is cost effective and best suitable with your purchase to make your shopping experience hassle free and easy right from the comfort of your couch.</p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
