import React from 'react';
import logo from "../../images/logo.png"
import './header.css'

const Header = () => {
    return (
        <div className = "headerImg">
            <img src={logo} alt=""/>
            <nav>
                <a href="/shop">shop</a>
                <a href="/order">Order Review</a>
                <a href="manage">manage inventory</a>
            </nav>
            
        </div>
    );
};

export default Header;