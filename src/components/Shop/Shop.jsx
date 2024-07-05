// import React, { useState, useEffect } from 'react';
// import { MdDelete, MdAddShoppingCart } from "react-icons/md";
// import './Shop.css'; // Assuming this is where your CSS is imported

// const Shop = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
//     setProducts(storedProducts);
//   }, []);

//   const deleteProduct = (index) => {
//     const updatedProducts = products.filter((_, i) => i !== index);
//     setProducts(updatedProducts);
//     localStorage.setItem('products', JSON.stringify(updatedProducts));
//   };

//   const addToCart = (product) => {
//     const cart = JSON.parse(localStorage.getItem('cart')) || [];
//     cart.push(product);
//     localStorage.setItem('cart', JSON.stringify(cart));
//     alert('Product added to cart!');
//   };

//   return (
//     <div className="all-products-container">
//       {products.map((product, index) => (
//         <div className="product-card" key={index}>
//           <div className="cart-details">
//             <span className="delete-icon" onClick={() => deleteProduct(index)}><MdDelete /></span>
//             <span className="add-icon" onClick={() => addToCart(product)}><MdAddShoppingCart /></span>
//           </div>
//           <div className="image-container">
//             <img src={product.image} alt={product.title}/>
//           </div>
//           <div className="detail-container">
//             <div className="detail-items">
//               <h2>{product.title}</h2>
//               <h3>${product.price}</h3>
//               <p>{product.description}</p>
//               <div className="rating-container">
      
//                  <span className="rating-value">Category: {product.title}</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Shop;
import React, { useState, useEffect } from 'react';
import { FaSquarePlus } from "react-icons/fa6";
import { TbTrashXFilled } from "react-icons/tb";
import { Link } from 'react-router-dom';
import './Shop.css';

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);
  }, []);

  const deleteProduct = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart!');
  };

  return (
    <div className="AllProductsContainer">
      {products.map((product, index) => (
        <div className="ProductCard" key={index}>
          <div className="imageContainer">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="detail">
            <div className="CartIcons">
              <TbTrashXFilled className="deleteIcon" onClick={() => deleteProduct(index)} />
              <FaSquarePlus className="addIcon" onClick={() => addToCart(product)} />
            </div>
            <div className="detailsItems">
              <h2>{product.title}</h2>
              <h3>${product.price}</h3>
              <Link to={`/product/${index}`} className="viewDetails">View Details</Link>
              <p className="description">{product.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shop;
