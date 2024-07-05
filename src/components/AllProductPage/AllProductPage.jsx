import React, { useState } from 'react';
import Categories from '../Categories/Categories';
import Products from '../Products/Products';
import './AllProductPage.css';

const AllProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleCategoryChange = (category) => {
    console.log('Selected category:', category); // Debugging line
    setSelectedCategory(category);
  };

  return (
    <div className="ProductsPage">
      <Categories onSelectCategory={handleCategoryChange} />
      <Products category={selectedCategory} />
    </div>
  );
};

export default AllProductsPage;
