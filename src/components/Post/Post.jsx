import React, { useState } from 'react';
import placeholder from '../../assets/placeholder.png'; // Adjust the path based on your project structure
import './Post.css';

const Post = ({ setProducts }) => {
  const [inputValues, setInputValues] = useState({
    image: placeholder, // Initialize with the placeholder image
    title: '',
    description: '',
    price: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setInputValues((prev) => ({
      ...prev,
      image: imageUrl,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      ...inputValues,
      id: Math.floor(Math.random() * 1000), // Generate a random ID (replace with actual ID generation logic)
    };
    setProducts((prevProducts) => {
      const updatedProducts = [...prevProducts, newProduct];
      localStorage.setItem('products', JSON.stringify(updatedProducts));
      return updatedProducts;
    });
    setInputValues({
      image: placeholder, // Reset back to placeholder after submitting
      title: '',
      description: '',
      price: '',
    });
  };

  return (
    <div className="post-container">
      <h2>Add a Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <img src={inputValues.image} alt="Product" />
          <input
            type="file"
            id="image"
            name="image"
            accept="image/x-png,image/gif,image/jpeg"
            onChange={handleImageUpload}
          />
          <label htmlFor="image">Upload Image</label>
        </div>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={inputValues.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={inputValues.description}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={inputValues.price}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Post Product</button>
      </form>
    </div>
  );
};

export default Post;
