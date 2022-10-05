import React from 'react';


/**
 * Cart Component for Bun Bun Bakeshop
 * 
 * @param itemArray variable with all of the items in the cart
 * @param totalItems variable with the number of total items
 * @param totalPrice variable with the total price of all items in the cart
 * @param removeItemHandler handler function to handle removing an item
 * @returns Cart Component
 */
function Cart({ itemArray, totalItems, totalPrice, removeItemHandler }) {
    // Function to handle the remove button for each cart item
    let handleRemove = (e) => {
        let removeIndex = parseInt(e.target.getAttribute("a-key"));
        removeItemHandler(removeIndex);
    }

    // Styles ==============================================================================
    const parentDivStyle = {
        width: "auto",
        marginTop: "0px",
    }

    const dividerLineStyle = {
        borderTop: "10px solid #635301",
        marginTop: "60px",
        marginRight: "30px",
        marginLeft: "30px"
    }

    const cartSummaryBoxStyle = {
        display: "flex",
        justifyContent: "space-between",
        marginLeft: "8.5%",
        marginRight: "8.5%",
        marginBottom: "20px"
    }

    const cartSummaryTextStyle = {
        fontSize: "20px"
    }

    const cartListStyle = {
        display: "flex",
        justifyContent: "flex-start",
        marginLeft: "8.5%",
        marginRight: "8.5%",
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

    const emptyCartStyle = {
        justifyContent: "center",
        marginLeft: "8.5%",
        marginRight: "8.5%",
        minHeight: "350px",
    }

    const emptyCartTextStyle = {
        textAlign: "center",
        fontSize: "20px",
        marginLeft: "8.5%",
        marginRight: "8.5%",
        paddingTop: "100px"
    }
    // Styles END ==============================================================================


    // Rendering of the list of items in the cart
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
                {totalItems ? 
                    <div style={cartListStyle}>
                        {cartList}
                    </div> :
                    <div style={emptyCartStyle} >
                        <div style={emptyCartTextStyle} >
                            The cart is empty!
                        </div>
                    </div>
                }
            <hr style={dividerLineStyle} />
        </div>
    );
}

export default Cart;