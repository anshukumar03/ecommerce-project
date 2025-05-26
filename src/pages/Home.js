import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Navbar from './Navbar';
import { useState, useEffect } from 'react';

function Home() {

  const [products,setProducts] = useState([]);
useEffect(() => {
  fetch('http://localhost:5000/api/products')
    .then(res => res.json())
    .then(data => setProducts(data))
    .catch(err => console.error('Failed to fetch products:', err));
}, []);

  


  const navigate = useNavigate();



  const goToProduct = (product) => {
    navigate('/product' , {state : product});
  };

  
  return (
  <div className="home-bg">
    <Navbar />

    {/* Hero Section */}
    <div className="hero-section">
      <div className="hero-content">
        <h1>Welcome to The Collective</h1>
        <p>
          Your one-stop shop for everything you love - discover the latest and greatest, all in one place.
        </p>
        <a href="#products" className="hero-cta">Shop Now</a>
      </div>
    </div>

    {/* Product Grid */}
    <h2 id="products" className="section-title">Our Products</h2>
    <div className="product-grid">
      {products.map(product => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.name} className="product-image" />
          <h3 className="product-name">{product.name}</h3>
          <p className="product-price">{product.price}</p>
          <button className="view-button" onClick={() => goToProduct(product)}>
            View Details
          </button>
        </div>
      ))}
    </div>

    {/* Trust Signals */}
    <div className="trust-features">
      <div>
        <i className="fas fa-lock"></i>
        <span>Secure Payments</span>
      </div>
      <div>
        <i className="fas fa-undo"></i>
        <span>Easy Returns</span>
      </div>
      <div>
        <i className="fas fa-shipping-fast"></i>
        <span>Fast Shipping</span>
      </div>
    </div>
  </div>
);

}

export default Home;



