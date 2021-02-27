import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'


const Shop = () => {

    const data = fakeData.slice(0,10);
    const [products, setProduct] = useState(data);
    const [cart, setCart] = useState([]);
    
    const handleAddProduct = (product) =>{
        const newCart = [...cart, product]
        setCart(newCart)
    }
    
    
    
    return (
        <div className="shop-container">
            <div className="prodcut-container">
                {
                    products.map(pd => <Product 
                    handleAddProduct ={handleAddProduct}
                    product = {pd}
                    ></Product>)
                }
            </div>

            <div className = "cart-container">
              <Cart cart = {cart}></Cart>
            </div>
        </div>
    )
};

export default Shop;