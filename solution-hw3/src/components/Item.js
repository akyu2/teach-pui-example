import React from 'react';
import './Item.css'

function Item({productName, imageSource, price, glazingOptions}) {
    let idTag = `${productName}`.replace(/\s+/g, '');
    console.log(idTag)

    let glazingOptionList = glazingOptions.map((glaze) => {
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
                <select class="glazeSelection" name="glazingSelection">
                    {glazingOptionList}
                </select>
            </div>
            <div className="pack-size-option">
                <p className="option-label">Pack Size:</p>
                <div className="radio-toolbar">
                    <input type="radio" id={"radio1Input" + idTag} name={"radioCount" + idTag} className="radioCount" value="1" defaultChecked />
                    <label htmlFor={"radio1Input" + idTag} className="radio1">1</label>
                
                    <input type="radio" id={"radio3Input" + idTag} name={"radioCount" + idTag} className="radioCount" value="3" />
                    <label htmlFor={"radio3Input" + idTag} className="radio3">3</label>
                
                    <input type="radio" id={"radio6Input" + idTag} name={"radioCount" + idTag} className="radioCount" value="6" />
                    <label htmlFor={"radio6Input" + idTag} className="radio6">6</label>
        
                    <input type="radio" id={"radio12Input" + idTag} name={"radioCount" + idTag} className="radioCount" value="12" />
                    <label htmlFor={"radio12Input" + idTag} className="radio12">12</label>
                </div>
            </div>
            <div className="price-row">
                <p className="price">{`$ ${price}`}</p>
                <button className="add-to-cart-button">Add to Cart</button>
            </div>
        </div>
    );
}

export default Item;