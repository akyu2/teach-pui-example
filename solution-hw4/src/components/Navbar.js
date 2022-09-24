import React from 'react';
import './NavBar.css'

function NavBar({ totalItems, totalPrice, newlyAddedItem, newlyAddedItemNotificationVisible }) {
    return (
        <div className="navigation-bar">
            <img src={process.env.PUBLIC_URL + "/assets/logo/logo-01.svg"} id="logo" alt="BunBun Bakeshop"/>
            <div className="navigation-right">
                <div className="navigation-buttons">
                    <button className="navigation-button" id="product-nav">PRODUCTS</button>
                    <button className="navigation-button" id="cart-nav">CART</button>
                    {newlyAddedItemNotificationVisible && 
                        <div className="cart-notification">
                            Added to cart:<br/><br/>
                            <b>{newlyAddedItem.type}</b><br/>
                            {newlyAddedItem.glazing} Glazing<br/>
                            Pack of {newlyAddedItem.packSize}<br/>
                            Price: ${newlyAddedItem.finalPrice}
                        </div>}
                    {!newlyAddedItemNotificationVisible && 
                        <div className="total-cart">
                            {totalItems} Items<br/>Total: ${totalPrice.toFixed(2)}
                        </div>}
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
};

export default NavBar;