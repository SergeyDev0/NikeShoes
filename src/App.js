import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Cart from './pages/CartShop';
import Product from './pages/Product';

export const CartContext = React.createContext();

const App = () => {
  const [cartItems, setCartItems] = React.useState([]);
  const [counter, setCounter] = React.useState(1);

  function onAddToCart(obj) {
    setCartItems([...cartItems, obj]);
  }

  function clearCart() {
    setCartItems([]);
    setCounter(1);
  }

  function decrementCounter() {
    setCounter(counter - 1);

    if(counter <= 1){
        setCounter(1);
    }
  }

  function incrementCounter() {
      setCounter(counter + 1);
      if(counter >= 99){
          setCounter(99);
      }
  }

  return(
      <CartContext.Provider value={{
        cartItems,
        onAddToCart,
        clearCart,
        decrementCounter,
        incrementCounter,
        counter
      }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="product" element={<Product />} />
        </Routes>
      </CartContext.Provider>
  )
}

export default App;

