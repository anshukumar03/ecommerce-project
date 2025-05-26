import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../CartContext'; // Adjust the path as needed
import './Navbar.css'; // Make sure your CSS is imported

function Navbar() {
  const navigate = useNavigate();
  const { cart } = useCart();

  // Calculate total quantity in the cart
  const cartCount = cart.reduce((sum, item) => sum + Number(item.quantity || 1), 0);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo" onClick={() => navigate("/")}>
          <img src="/logo192.png" alt="Logo" />
          <span>The Collective</span>
        </div>

        {/* Navigation Links */}
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><a href="#products">Products</a></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* Cart Button */}
        <div className="navbar-cart-container">
          <Link to="/cart" className="navbar-cart-btn" aria-label="Cart">
            <i className="fas fa-shopping-cart"></i>
            {cartCount > 0 && (
              <span className="cart-badge">{cartCount}</span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;



