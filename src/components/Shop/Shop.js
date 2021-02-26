import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './Shop.css'


const Shop = () => {

    const data = fakeData.slice(0,10)
    const [product, setProduct] = useState(data)
    
    
    return (
        <div className="shop-container">
            <div className="prodcut-container">
                {data.map(pd => <Product product = {pd}></Product>)}
            </div>

            <div className="cart-container">
                <h1>Order Sumarry</h1>
            </div>
        </div>
    )
};

export default Shop;