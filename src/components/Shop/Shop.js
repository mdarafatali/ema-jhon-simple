import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'


const Shop = () => {

    const data = fakeData.slice(0,10);
    const [product, setProduct] = useState(data);
    const [cart, setCart] = useState([]);
    
    const handleAddProduct = (product) =>{
        const newCart = [...cart, product]
        setCart(newCart)
    }
    
    
    
    return (
        <div className="shop-container">
            <div className="prodcut-container">
                {data.map(pd => <Product 
                handleAddProduct ={handleAddProduct}
                product = {pd}
                ></Product>)}
            </div>

            <div>
              <Cart cart = {cart}></Cart>
            </div>
        </div>
    )
};

export default Shop;