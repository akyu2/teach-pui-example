import React, { useState } from 'react';
import NavBar from "../../components/Navbar";
import Item from "../../components/Item"

import "./index.css"

/**
 * View for the home page
 * 
 * @returns Component for the Home View
 */
function Home() {
  const [totalPrice, setTotalPrice] = useState(0.0); // variable for the total price
  const [newlyAddedItem, setNewlyAddedItem] = useState(); // variable for storing the most recently added item
  const [newlyAddedItemNotificationVisible, setNewlyAddedItemNotificationVisible] = useState(false); // variable for logic of visible/invisible notifications
  const [totalItems, setTotalItems] = useState(0); // variables for storing total number of items in cart
  const [itemList, setItemList] = useState([]); // variable for storing what items are in the cart
  
  // function to handle newly added items to the cart
  let addItemHandler = (newItem) => {
    setTotalPrice(totalPrice + parseFloat(newItem.finalPrice));
    setNewlyAddedItem(newItem);
    setTotalItems(totalItems + 1);
    setItemList(itemList.concat(newItem));

    setNewlyAddedItemNotificationVisible(true);

    setTimeout(() => { // set notification to only show for 3 seconds
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