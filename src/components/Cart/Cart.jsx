import React, { useState } from 'react';
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    const existingProduct = cartItems.find(item => item.id === product.id);
    if (existingProduct) {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const handleIncrementQuantity = (productId) => {
    setCartItems(cartItems.map(item =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const handleDecrementQuantity = (productId) => {
    setCartItems(cartItems.map(item =>
      item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
    ).filter(item => item.quantity > 0));
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
            <button onClick={() => handleIncrementQuantity(item.id)}>+</button>
            <button onClick={() => handleDecrementQuantity(item.id)}>-</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
