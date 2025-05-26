import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import { useCart } from '../CartContext';
import './Product.css';

const Product = () => {
  const location = useLocation();
  const product = location.state;
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: Number(quantity) });
    alert("Product added to cart!");
  };

  if (!product) {
    return (
      <div>
        <Navbar />
        <div className="product-details">
          <h2>Product not found.</h2>
        </div>
      </div>
    );
  }

  return (
    <div><Navbar />
    <div className='product-page-center'>
      
      <div className="product-details">
        <h1>Product</h1>
        <h2>{product.name}</h2>
        <img
          className="product-details img"
          src={product.image}
          alt={product.name}
          width="300"
        />
        <p>Price: {product.price}</p>
        <div className="product-details input">
          <label>Quantity:</label>
          <input
            type="number"
            value={quantity}
            min="1"
            onChange={e => setQuantity(e.target.value)}
          />
        </div>
        <button
          className="product-details button"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
    </div>
  );
};

export default Product;


