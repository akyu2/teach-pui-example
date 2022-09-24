import React, { useState } from 'react';
import NavBar from "../../components/Navbar";
import Item from "../../components/Item"

import "./index.css"

function Home() {

  const [totalPrice, setTotalPrice] = useState(0.0);
  const [newlyAddedItem, setNewlyAddedItem] = useState();
  const [newlyAddedItemNotificationVisible, setNewlyAddedItemNotificationVisible] = useState(false);
  const [totalItems, setTotalItems] = useState(0);
  
  let addItemHandler = (newItem) => {
    setTotalPrice(totalPrice + parseFloat(newItem.finalPrice));
    setNewlyAddedItem(newItem);
    setTotalItems(totalItems + 1);

    setNewlyAddedItemNotificationVisible(true);

    setTimeout(() => {
      setNewlyAddedItemNotificationVisible(false);
    }, 3000);
  }

  return (  
      <div>
          <NavBar totalItems={totalItems} totalPrice={totalPrice} newlyAddedItem={newlyAddedItem} newlyAddedItemNotificationVisible={newlyAddedItemNotificationVisible} />
      
          <div className="itemized-row">
            <Item productName="Original Cinnamon Roll" imageSource={process.env.PUBLIC_URL + "/assets/products/original-cinnamon-roll.jpg"} price={2.49} addItemHandler={addItemHandler} />
            <Item productName="Apple Cinnamon Roll" imageSource={process.env.PUBLIC_URL + "/assets/products/apple-cinnamon-roll.jpg"} price={3.49} addItemHandler={addItemHandler} />
            <Item productName="Raisin Cinnamon Roll" imageSource={process.env.PUBLIC_URL + "/assets/products/raisin-cinnamon-roll.jpg"} price={2.99} addItemHandler={addItemHandler} />
          </div>
      
          <div className="itemized-row">
              <Item productName="Walnut Cinnamon Roll" imageSource={process.env.PUBLIC_URL + "/assets/products/walnut-cinnamon-roll.jpg"} price={3.49} addItemHandler={addItemHandler} />
              <Item productName="Double Chocolate Cinnamon Roll" imageSource={process.env.PUBLIC_URL + "/assets/products/double-chocolate-cinnamon-roll.jpg"} price={3.99} addItemHandler={addItemHandler} />
              <Item productName="Strawberry Cinnamon Roll" imageSource={process.env.PUBLIC_URL + "/assets/products/strawberry-cinnamon-roll.jpg"} price={3.99} addItemHandler={addItemHandler} />
          </div>
      
      </div>
      
  );
}
export default Home;