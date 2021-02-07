import React, { useState } from 'react';
import data from '../components/data';
import Rating from '../components/Rating';

const ProductScreen = (props) => {
  const [qty, setQty] = useState(1);
  const product = data.products.find( (prod) => prod._id === props.match.params.id );

  const qtyHandler = (e) => {
    setQty(e.target.value);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col col-md-6">
          <div className="productSingle">
            <div className="productImg">
              <img src={product.image} alt={product.name} />
            </div>
          </div>
        </div>

        <div className="col col-md-6">
          <div className="singleProduct">
            <div className="productMeta">
              <h2>{product.name}</h2>
              <div className="prodBrand">
                <div>
                  <p>BRAND: {product.brand}</p>
                </div>
              </div>
              <h5>${product.price}</h5>
              <Rating rating={product.rating} numReviews={product.numReviews} />
            </div>

            <p>{product.descrption}</p>

            <div className="stockStatus">
              <strong>Status: </strong>
              <div>
                {product.countInStock >= 5 ? <span className="color-success">In Stock <span className="stockNum">({product.countInStock} Available)</span></span> : product.countInStock === 0 ? <span className="color-danger">Unavailable <span className="stockNum">({product.countInStock} Available)</span></span> : <span className="color-warning">Low Stock <span className="stockNum">({product.countInStock} Available)</span></span>}
              </div>
            </div>

            <div className="productForm">
                <label>QTY:</label>
                <div className="product-form-group">
                  <div className="qtyGroup">
                    <button className="quantity-minus" onClick={() => setQty(qty-1)}>-</button>
                    <input className="quantity form-control" type="number" min="1" max="100" value={qty} onChange={qtyHandler} />
                    <button className="quantity-plus" onClick={() => setQty(qty+1)}>+</button>
                  </div>
                </div>
                <button className="btn-cart"><i className="fa fa-shopping-cart"></i>Add To Cart</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default ProductScreen;