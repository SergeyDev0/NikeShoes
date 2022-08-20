import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Cart from './pages/CartShop';
import Product from './pages/Product';

const App = () => {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="cart" element={<Cart />} />
      <Route path="product" element={<Product />} />
    </Routes>
  )
}

export default App;

