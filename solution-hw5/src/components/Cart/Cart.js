import React, { useEffect, useState } from 'react';


function Cart({ itemArray, totalItems, totalPrice, removeItemHandler }) {

    const parentDivStyle = {
        width: "auto",
        marginTop: "0px",

        // backgroundColor: "black",

    }

    const dividerLineStyle = {
        borderTop: "10px solid brown",
        marginTop: "60px",
        marginRight: "30px",
        marginLeft: "30px"
    }

    const cartSummaryBoxStyle = {
        display: "flex",
        justifyContent: "space-between",
        // alignItems: "start",
        marginLeft: "5%",
        marginRight: "5%",
        marginBottom: "20px"
    }

    const cartSummaryTextStyle = {
        fontSize: "20px"
    }

    const cartListStyle = {
        display: "flex",
        justifyContent: "flex-start",
        marginLeft: "5%",
        marginRight: "5%",
        minHeight: "350px",
        flexWrap: "wrap"
    }

    const cartItemStyle = {
        margin: "20px 40px 0px 0px",
        alignItems: "center",
        textAlign: "center"
    }

    const cartImageStyle = {
        height: "auto",
        width: "200px",
        border: "3px solid black",
    }

    const removeButtonStyle = {
        border: "none",
        color: "black",
        padding: "5px 5px",
        textAlign: "center",
        backgroundColor: "white",
        marginTop: "10px",
        textDecoration: "underline",
        fontSize: "15px"
    }

    let handleRemove = (e) => {
        let removeIndex = parseInt(e.target.getAttribute("a-key"));
        removeItemHandler(removeIndex);
    }

    let cartList = itemArray.map((item, index) => {
        return (<div style={cartItemStyle} key={index}>
                    <div>
                        <img src={item.imageSource} alt={item.type} style={cartImageStyle}/>
                    </div>
                    <div>
                        {item.type}
                    </div>
                    <div>
                        Glazing: {item.glazing}
                    </div>
                    <div>
                        Pack Size: {item.packSize}
                    </div>
                    <div>
                        <b>${parseFloat(item.finalPrice).toFixed(2)}</b>
                    </div>
                    <button a-key={index} style={removeButtonStyle} onClick={handleRemove} >Remove</button>
                </div>)
    });



    return (
        <div style={parentDivStyle} >
            <hr style={dividerLineStyle} />
                <div style={cartSummaryBoxStyle}>
                    <div style={cartSummaryTextStyle}>
                        {`Shopping Cart: (${totalItems} Items)`}
                    </div>
                    <div style={cartSummaryTextStyle}>
                        {`Total: $ ${parseFloat(totalPrice).toFixed(2)}`}
                    </div>
                </div>
                <div style={cartListStyle}>
                    {/* <div style={cartItemStyle}>
                        <div>
                            <img src={process.env.PUBLIC_URL + "/assets/products/original-cinnamon-roll.jpg"} alt={"Original Cinnamon Roll"} style={cartImageStyle} />
                        </div>
                        Original Cinnamon Roll
                    </div>
                    <div style={cartItemStyle}>
                        <div>
                            <img src={process.env.PUBLIC_URL + "/assets/products/original-cinnamon-roll.jpg"} alt={"Original Cinnamon Roll"} style={cartImageStyle}/>
                        </div>
                        Original Cinnamon Roll
                    </div> */}
                    {cartList}
                </div>
            <hr style={dividerLineStyle} />
        </div>
    );
}

export default Cart;