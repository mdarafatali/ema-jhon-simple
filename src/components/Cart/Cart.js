import React from 'react';

const Cart = (props) => {
    const cart = props.cart

    const total = cart.reduce((total, prd) => total + prd.price, 0)
    
  const formatNumber = num => {
      const precesion = num.toFixed(2)
      return Number(precesion)
  }
  

  let shippingCost = 0;
  if (total > 300){
     shippingCost = 0;
  }
  else{
      shippingCost = 4.99;
  }
  
  const tax = total/10;
  const grnadTotal = total + shippingCost + tax;
    return (
        <div>
            <h1>Order Summary</h1>
            <h2>Ordered : {cart.length}</h2>
            <p>Price: ${formatNumber(total)}</p>
            <p>Shipping Handling:{formatNumber(shippingCost)}</p>
            <p>Total VAT & tax: {formatNumber(tax)}</p>
            <p>Grand Total : {formatNumber(grnadTotal)}</p>
        </div>
    );
};

export default Cart;