import React, { useEffect, useState } from 'react';
import './Item.css'

import { glazingOptionsList } from '../../data/glazeData';
import { packPriceDict } from '../../data/packPriceData';


/**
 * Item is a react component storing what a Roll is for this application
 * 
 * @param productName or type - the type of roll
 * @param imageSource image link for the product
 * @param price the base price of the item
 * @param addItemHandler handler for what to do when hitting Add to Cart button
 * @param glazingOptions object of glazing options and their corresponding modifiers to price
 * @param packPriceAdaptation object of how pack size affects price 
 * @returns Item Component for various rolls
 */
function Item({productName, imageSource, price, addItemHandler, glazingOptions=glazingOptionsList, packPriceAdaptation=packPriceDict}) {
    const [finalPrice, setFinalPrice] = useState(price); // final price for the item
    const [glaze, setGlaze] = useState(Object.keys(glazingOptions)[0]); // what type of glaze is currently selected
    const [packSize, setPackSize] = useState(1) // what pack size is currently selected

    // function to update the final price depending on packSize and glaze
    let updateFinalPrice = (glazeValue, packSizeValue) => {
        setFinalPrice(((parseFloat(glazeValue) + price)*packPriceAdaptation[parseInt(packSizeValue)]).toFixed(2))
    }

    // handles changing glaze when selecting new glaze
    let handleGlazeChange = (e) => {
        setGlaze(e.target.value);
    }

    // handles changing packSize var when radio buttons pushed
    let handlePackSizeChange = (e) => {
        setPackSize(e.target.value);
    }

    // handler for when the Add to Cart Button is pressed, uses passed in addItemHandler from index.js
    let handleAddToCart = () => {
        addItemHandler({
            type: productName,
            glazing: glaze,
            packSize: packSize,
            finalPrice: finalPrice,
            imageSource: imageSource,
        });
    }

    // Constantly update final price
    useEffect(() => {
        updateFinalPrice(glazingOptionsList[glaze], packSize);
    })

    // idTag for unique id names for radio buttons
    let idTag = `${productName}`.replace(/\s+/g, '');

    // load the glazingOptionList for rendering below
    let glazingOptionList = Object.keys(glazingOptions).map((glaze) => {
        return (<option key={`${glaze}`} value={`${glaze}`}>{glaze}</option>)
    });

    return (
        <div className="item">
            <img src={imageSource} className="product" alt={productName}/>
            <h3 className="product-name">
                {productName}
            </h3>
            <div className="glaze-option"> 
                <p className="option-label">Glazing:</p>
                <select className="glazeSelection" name="glazingSelection" value={glaze} onChange={handleGlazeChange} >
                    {glazingOptionList}
                </select>
            </div>
            <div className="pack-size-option">
                <p className="option-label">Pack Size:</p>
                <div className="radio-toolbar" onChange={handlePackSizeChange}>
                    <input type="radio" id={"radio1Input" + idTag} name={"radioCount" + idTag} className="radioCount" value={1} defaultChecked />
                    <label htmlFor={"radio1Input" + idTag} className="radio1">1</label>
                
                    <input type="radio" id={"radio3Input" + idTag} name={"radioCount" + idTag} className="radioCount" value={3} />
                    <label htmlFor={"radio3Input" + idTag} className="radio3">3</label>
                
                    <input type="radio" id={"radio6Input" + idTag} name={"radioCount" + idTag} className="radioCount" value={6} />
                    <label htmlFor={"radio6Input" + idTag} className="radio6">6</label>
        
                    <input type="radio" id={"radio12Input" + idTag} name={"radioCount" + idTag} className="radioCount" value={12} />
                    <label htmlFor={"radio12Input" + idTag} className="radio12">12</label>
                </div>
            </div>
            <div className="price-row">
                <p className="price">{`$ ${finalPrice}`}</p>
                <button className="add-to-cart-button" onClick={handleAddToCart} >Add to Cart</button>
            </div>
        </div>
    );
}

export default Item;