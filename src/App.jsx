import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Shop from "./components/Shop/Shop";
import SingleProduct from "./components/SingleProductPage/SingleProduct";
import Cart from "./components/Cart/Cart";
import AllProductsPage from './components/AllProductPage/AllProductPage';
import Post from './components/Post/Post';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/post" element={<Post setProducts={setProducts} />} />
        <Route path="/shop" element={<Shop products={products} />} />
        <Route path="/products" element={<AllProductsPage />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;
