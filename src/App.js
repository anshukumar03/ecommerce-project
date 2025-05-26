import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import Home from './pages/Home';
import Product from './pages/Product';
import Confirmation from './pages/Confirmation';
import Checkout from './pages/Checkout';
import './pages/Home.css';
import Cart from './pages/Cart';
import Contact from './pages/Contact'

function App() {
  return (
   <Router>
    <Routes>
      <Route path ="/" element={<Home />} />
      <Route path ="/product" element={<Product />} />
      <Route path = "/cart" element = {<Cart />} />
      <Route path ="/confirmation" element={<Confirmation />} />
      <Route path ="/checkout" element={<Checkout/>} />
      
      <Route path = "/contact" element = {<Contact />} />
      
    </Routes>
   </Router>
  );
}

export default App;
