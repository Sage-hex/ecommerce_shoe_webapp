// // import React, { useEffect, useState } from 'react';
// // import { data as initialData } from '../../assets/data';
// // import ReactStars from 'react-rating-stars-component';
// // import { FaSquarePlus } from "react-icons/fa6";
// // import './AllProducts.css';

// // const AllProducts = ({ category }) => {
// //   const [data, setData] = useState([]);

// //   useEffect(() => {
// //     const fetchData = () => {
// //       setData(initialData);
// //     };

// //     fetchData();
// //   }, []);

// //   const filterProducts = () => {
// //     if (category === 'high') {
// //       return data.filter(item => item.price >= 50); // Example condition for high-cost products
// //     } else if (category === 'low') {
// //       return data.filter(item => item.price < 50); // Example condition for low-cost products
// //     } else {
// //       return data; // Show all products
// //     }
// //   };

// //   return (
// //     <div className="AllProductsContainer">
// //       {filterProducts().map(item => (
// //         <div key={item.id} className="ProductCard">
// //           <div className="imageContainer">
// //             <img src={item.image} alt={item.title} />
// //           </div>
// //           <div className="details">
// //             <div className="detailsItems">
// //               <h2>{item.title}</h2>
// //               <h3>${item.price}</h3>
// //               <p className='RatingContainer'>
// //                 <ReactStars
// //                   count={5}
// //                   value={item.rating}
// //                   size={15}
// //                   activeColor="#ffd700"
// //                   edit={false}
// //                   text={item.rating}
// //                 />
// //                 <span className="ratingValue">{item.rating}</span>
// //               </p>
// //             </div>
// //             <div className='CartDetails'>
// //               <p className='CartDetailsItem'>View details</p>
// //               <FaSquarePlus className='CartDetailsItem'/>
// //             </div>
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default AllProducts;


// import React, { useEffect, useState } from 'react';
// import { data as initialData } from '../../assets/data';
// import ReactStars from 'react-rating-stars-component';
// import { FaSquarePlus } from "react-icons/fa6";
// import './AllProducts.css';

// const AllProducts = ({ category }) => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = () => {
//       setData(initialData);
//     };

//     fetchData();
//   }, []);

//   const filterProducts = () => {
//     if (category === 'high') {
//       return data.filter(item => item.price >= 50); // Example condition for high-cost products
//     } else if (category === 'low') {
//       return data.filter(item => item.price < 50); // Example condition for low-cost products
//     } else {
//       return data; // Show all products
//     }
//   };

//   return (
//     <div className="AllProductsContainer">
//       {filterProducts().map(item => (
//         <div key={item.id} className="ProductCard">
//           <div className="imageContainer">
//             <img src={item.image} alt={item.title} />
//           </div>
//           <div className="detail">
//             <div className="detailsItems">
//               <h2>{item.title}</h2>
//               <h3>${item.price}</h3>
//               <p className='RatingContainer'>
//                 <ReactStars
//                   count={5}
//                   value={item.rating}
//                   size={15}
//                   activeColor="#ffd700"
//                   edit={false}
//                 />
//                 <span className="ratingValue">{item.rating}</span>
//               </p>
//             </div>
//             <div className='CartDetails'>
//               <p className='CartDetailsItem'>View details</p>
//               <FaSquarePlus className='CartDetailsItem'/>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AllProducts;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { data as initialData } from '../../assets/data';
import ReactStars from 'react-rating-stars-component';
import { FaSquarePlus } from "react-icons/fa6";
import './Products.css';

const Products = ({ category }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      setData(initialData);
    };

    fetchData();
  }, []);

  const filterProducts = () => {
    if (category === 'highCost') {
      return data.filter(item => item.price >= 2020); // Example condition for high-cost products
    } else if (category === 'lowCost') {
      return data.filter(item => item.price < 2020); // Example condition for low-cost products
    } else {
      return data; // Show all products
    }
  };

  return (
    <div className="AllProductsContainer">
      {filterProducts().map(item => (
        <div key={item.id} className="ProductCard">
          <div className="imageContainer">
            <img src={item.image} alt={item.title} />
          </div>
          <div className="detail">
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
                />
                <span className="ratingValue">{item.rating}</span>
              </p>
            </div>
            <div className='CartDetails'>
              <Link to={`/product/${item.id}`} className="CartDetailsItem">View details</Link>
              <FaSquarePlus className='CartDetailsItem'/>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
