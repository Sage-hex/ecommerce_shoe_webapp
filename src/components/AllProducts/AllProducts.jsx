import React, { useEffect, useState } from 'react';
import { data as initialData } from '../../assets/data';
import ReactStars from 'react-rating-stars-component';
import './AllProducts.css'; 
import { FaSquarePlus } from "react-icons/fa6";

const AllProducts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
   
      setData(initialData);
    };

    fetchData();
  }, []);

  

  return (
    <div className="AllProductsContainer">
      {data.map(item => (
        <div key={item.id} className="ProductCard">
          <div className="imageContainer">
            <img src={item.image} alt={item.title} />
          </div>
          <div className="details">
            <div className="detailsItems">
            <h2>{item.title}</h2>
          <h3>${item.price}</h3>
          <p className='RatingContainer'>
            <ReactStars
              count={5}
              value={item.rating}
              size={15}
              activeColor="#ffd700"
              edit={false}
              text={item.rating}
            />
            
             <span className="ratingValue">{item.rating}</span>
          </p>
            </div>
          <div className='CartDetails'>
          <p className='CartDetailsItem'>View details</p>
          <FaSquarePlus className='CartDetailsItem'/>
          </div>

          </div>
          
          
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
