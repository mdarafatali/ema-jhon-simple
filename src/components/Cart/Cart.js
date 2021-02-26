import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    return (
        <div>
            <h1>Order Summary</h1>
            <h2>Ordered : {cart.length}</h2>
            <p>items:</p>
            <p>Shipping & Handling: {}</p>
            <p>Total before tax:</p>
            <p>Estimated Tax:</p>
        </div>
    );
};

export default Cart;