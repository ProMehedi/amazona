import React, { useEffect } from 'react';
import PulseLoader from "react-spinners/PulseLoader";
import Product from '../components/Product';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/ProductActions';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector(state => state.productList);
  const {loading, error, products} = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [])  

  return (
    <section className="productGrid">
      {loading ? <div className="lazyLoader"><PulseLoader color="#ff6138" size={15} /></div> : error ? <MessageBox type="error">{error}</MessageBox>  : 
        <div className="container">
        <div className="row">
          {products.map((product) => (
            <div className="col col-md-4" key={product._id}>
              <Product
                link={`product/${product._id}`}
                title={product.name}
                price={product.price}
                image={product.image}
                alt={product.name}
                category={product.category}
                brand={product.brand}
                rating={product.rating}
                numReviews={product.numReviews}
                desc={product.description}
              />
            </div>
          ))}
        </div>
      </div>
      }
    </section>
  );
}
 
export default HomeScreen;