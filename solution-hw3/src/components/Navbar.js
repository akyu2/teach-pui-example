import React, { Component } from 'react';
import './NavBar.css'

class NavBar extends Component {
    render() {
        return (
            <div className="navigation-bar">
                <img src="/pui-hw3-alex-kyu/assets/logo/logo-01.svg" id="logo" alt="BunBun Bakeshop"/>
                <div className="navigation-right">
                    <div className="navigation-buttons">
                        <button className="navigation-button" id="product-nav">PRODUCTS</button>
                        <button className="navigation-button" id="cart-nav">CART</button>
                        <div className="cart-notification"></div>
                        <div className="total-cart">0 items<br/>Total: $0.00</div>
                    </div>
                    <div>
                        <hr className="solid" />
                    </div>
                    <div className="slogan">
                        Our hand-made cinnamon rolls
                    </div>
                </div>
            </div>
        );
    }
};

export default NavBar;