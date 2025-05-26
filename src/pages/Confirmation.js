import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import './Confirmation.css';

function Confirmation() {
  const location = useLocation();
  const { cart, name, email, address } = location.state;

  return (
    <div className="confirmation-bg">
      <Navbar />
      <div className="confirmation-fullscreen">
        <div className="confirmation-icon">
          <span role="img" aria-label="Success">&#10004;</span>
        </div>
        <h2 className="confirmation-main-message">Order Confirmation</h2>
        <p className="confirmation-thankyou">Thank you for your order, <span className="confirmation-highlight">{name}</span>!</p>
        
        <h3 className="confirmation-section-title">Order Summary</h3>
        <div className="confirmation-products">
          {cart.map((product, index) => (
            <div className="confirmation-product" key={index}> 
              <img src={product.image} alt={product.name} width="160" />
              <div>
                <p><strong>Product:</strong> {product.name}</p>
                <p><strong>Price:</strong> {product.price}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="confirmation-section-title">Your Details:</h3>
        <div className="confirmation-details">
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Address:</strong> {address}</p>
        </div>
        
        <p className="confirmation-note">Your order will be processed and shipped shortly!</p>
      </div>
    </div>
  );
}

export default Confirmation;



