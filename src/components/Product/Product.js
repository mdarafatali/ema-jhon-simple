import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props)
    const {name, img, seller, price, stock} = props.product
    return (
        <div className = "product-container">
            <div className = "single-product">
                <img src={img} alt=""/>
            </div>

            <div className = "single-product">
                <h4>{name}</h4>
                <p><small>By : {seller}</small></p>
                <br/>
                <p>price : {price}</p>
                <p><small>Only {stock} left. Order Soon</small></p>
                <button>add to cart</button>
            </div>
        </div>
    );
};

export default Product;