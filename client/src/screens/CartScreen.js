import React from 'react';

const CartScreen = (props) => {
  const productId = props.match.params.id;
  const qty = props.location.search ? Number(props.location.search.split('=')[1]) : 1;

  return (
    <div>
      <h1>Cart Screen</h1>
      <h4>ADD TO CART: ProductId: {productId} | Qty: {qty}</h4>
    </div>
  );
}
 
export default CartScreen;