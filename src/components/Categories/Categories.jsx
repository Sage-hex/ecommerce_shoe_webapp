import React, { useState } from 'react';
import './Categories.css';

const Categories = ({ onSelectCategory }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    onSelectCategory(category);
  };

  return (
    <div className="btnContainer">
      <div className="btnWrapper">
        <h3
          className={activeCategory === 'all' ? 'active' : ''}
          onClick={() => handleCategoryClick('all')}
        >
          All Products
        </h3>
        <h3
          className={activeCategory === 'lowCost' ? 'active' : ''}
          onClick={() => handleCategoryClick('lowCost')}
        >
          Low Cost
        </h3>
        <h3
          className={activeCategory === 'highCost' ? 'active' : ''}
          onClick={() => handleCategoryClick('highCost')}
        >
          High Cost
        </h3>
      </div>
    </div>
  );
};

export default Categories;
