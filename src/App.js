import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Cart from './pages/CartShop';
import Product from './pages/Product';

export const CartContext = React.createContext();

const App = () => {
  const [cartItems, setCartItems] = React.useState([]);

  function onAddToCart(obj) {
    setCartItems([...cartItems, obj]);
  }

  function clearCart() {
    setCartItems([]);
  }

  return(
      <CartContext.Provider value={{cartItems, onAddToCart, clearCart}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="product" element={<Product />} />
        </Routes>
      </CartContext.Provider>
  )
}

export default App;

