import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './scss/reset.scss';
import './scss/vars.scss';
import './scss/App.scss';
import './scss/media.scss';
import App from './App';
import Cart from './routes/Cart';
import Product from './routes/Product';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="cart" element={<Cart />} />
      <Route path="product" element={<Product />} />
    </Routes>
  </BrowserRouter>
);

