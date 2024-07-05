// import { data as initialState } from "../../assets/data"; // Ensure the correct path to the data file
// import Button from "../Button/Button";
// import { MdOutlineShoppingCart } from "react-icons/md";
// import './SingleProduct.css'; // Ensure you have a CSS file for styling

// const SingleProduct = () => {
//     return (
//         <div className="mainContainer">
//             <div className="imageContainer">
//                 <img src={initialState[0].image} alt={initialState[0].title} />
//             </div>
//             <div className="details">
//                 <h3>Nike's Company</h3>
//                 <h2>Fall Limited Edition Sneakers</h2>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto modi, magnam unde tempore pariatur culpa mollitia similique sit voluptatibus, voluptatem quam expedita harum nemo sint facilis labore perspiciatis earum ipsum!</p>
//                 <div className="price">
//                     <div className="discount">
//                         <h3>$200</h3>
//                         <h4>50%</h4>
//                     </div>
//                     <p>Price before discount</p>
//                     <div className="count">
//                         <div className="countDiv">
//                             <p>-</p>
//                             <h3>0</h3>
//                             <p>+</p>
//                         </div>
//                         <div className="btn">
//                             <Button className="btnItem"> <MdOutlineShoppingCart /> Add to cart</Button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SingleProduct;


import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../Button/Button';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { data as initialState } from '../../assets/data';
import './SingleProduct.css';

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = initialState.find(item => item.id === parseInt(id, 10));
    setProduct(foundProduct);
  }, [id]);

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const productToAdd = {
      ...product,
      quantity: 1
    };

    const existingProduct = cart.find(item => item.id === productToAdd.id);

    if (existingProduct) {
      const updatedCart = cart.map(item =>
        item.id === productToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    } else {
      localStorage.setItem('cart', JSON.stringify([...cart, productToAdd]));
    }

    alert('Product added to cart!');
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <section className='mainContainer'>
      <div className="mainContainer-inner">
      <div className="imageContainer">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="details">
        {/* <h3>{product.title}</h3> */}
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <div className="price">
          <div className="discount">
            <h3>${product.price}</h3>
          </div>
          <div className="count">
            <div className="countDiv">
              <p>-</p>
              <h3>0</h3>
              <p>+</p>
            </div>
            <div className="btn">
              <Button className="btnItem" onClick={handleAddToCart}> <MdOutlineShoppingCart /> Add to cart</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
    
  );
};

export default SingleProduct;
