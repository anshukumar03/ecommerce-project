import React, {useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import './Checkout.css'

const Checkout = () => {

    const location = useLocation()
    const navigate = useNavigate()

   const { cart } = location.state || { cart: [] };


    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [address,setAddress] = useState('')

const handleSubmit = (e) => {
  e.preventDefault();

  const order = { cart, name, email, address };

  fetch('http://localhost:5000/api/orders', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(order),
  })
    .then(res => res.json())
    .then(data => {
      alert(data.message);
      // You can show a success message here if you want
      navigate('/confirmation', {
        state: { cart, name, email, address },
      });
    })
    .catch((error) => {
      alert('Failed to place order. Please try again.');
    });
};


    
  return (
  <div className="checkout-page-bg">
    <Navbar />
    <div className="checkout-page">
      <h2 className="checkout-title">Checkout</h2>
      {/* Progress Bar */}
      <div className="progress-bar">
        <div className="progress-step active">Cart</div>
        <div className="progress-separator"></div>
        <div className="progress-step active">Checkout</div>
        <div className="progress-separator"></div>
        <div className="progress-step">Confirmation</div>
      </div>

      <div className="checkout-layout">
        {/* Order Summary */}
        <div className="checkout-card order-summary">
          <h3>Order Summary</h3>
          {cart.map(product => (
            <div key={product.id} className="order-item">
              <img src={product.image} alt={product.name} className="product-thumbnail" />
              <div>
                <p className="product-name">{product.name}</p>
                <p className="product-details">
                  {product.quantity} × {product.price}
                </p>
              </div>
            </div>
          ))}
          <hr />
          <p className="order-total">
            <strong>
              Total:&nbsp;
              {cart.reduce(
                (sum, item) =>
                  sum +
                  (parseFloat(item.price.replace(/[^0-9.]/g, '')) * (item.quantity || 1)),
                0
              ).toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}
            </strong>
          </p>
        </div>

        {/* Checkout Form */}
       <form className="checkout-card checkout-form" onSubmit={handleSubmit}>
          <h3>Your Details</h3>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              required
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label>Address</label>
            <textarea
              value={address}
              onChange={e => setAddress(e.target.value)}
              required
              placeholder="Enter your address"
              rows={3}
            />
          </div>
          <button type="submit" className="place-order-button">
            Place Order
          </button>
        </form>
      </div>
    </div>
  </div>
);

}

export default Checkout
