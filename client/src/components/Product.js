import React from 'react';
import Rating from './Rating';

const Product = ({link, title, price, rating, numReviews, image, alt}) => {
  return (
    <div className="productCard">
      <a href={link} className="productImg">
        <img src={image} alt={alt} />
      </a>
      <div className="productMeta">
        <h4><a href={link}>{title}</a></h4>
        <h5>${price}</h5>
        <Rating rating={rating} numReviews={numReviews} />
      </div>
    </div>
  );
}
 
export default Product;