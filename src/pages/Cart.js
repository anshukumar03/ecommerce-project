import React from 'react';
import { useCart } from '../CartContext';  // Import useCart hook
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './Cart.css';


const Cart = () => {
  const { cart, removeFromCart } = useCart();
  console.log(cart); 


  if (cart.length === 0) {
    return <p>Your cart is empty.</p>;
  }

return (
  <div className="cart-page-bg">
    <Navbar />
    <div className="cart-page">
      <h2 className="cart-title">Your Cart</h2>
      {cart.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is empty.</p>
        </div>
      ) : (
        <>
          <div className="cart-list">
            {cart.map(item => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p className="cart-item-price">{item.price}</p>
                  <p className="cart-item-qty">Quantity: {item.quantity}</p>
                </div>
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3>
              Total:&nbsp;
              {cart.reduce(
                (sum, item) =>
                  sum +
                  (parseFloat(item.price.replace(/[^0-9.]/g, '')) * (item.quantity || 1)),
                0
              ).toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}
            </h3>
            <div className="checkout-button-container">
              <Link to="/checkout" state={{ cart }} className="checkout-button">
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  </div>
);

};

export default Cart;
