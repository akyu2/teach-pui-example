import React, { useState, useEffect, useCallback } from 'react';
import NavBar from "../../components/NavBar/Navbar";
import Item from "../../components/Item/Item"
import Cart from "../../components/Cart/Cart"

import "./index.css"

import { rolls, rollsPerRow } from "../../data/rollsData"


/**
 * View for the home page
 * 
 * @returns Component for the Home View
 */
function Home({ rollsList=rolls, numRollsPerRow=rollsPerRow }) {
  const [totalPrice, setTotalPrice] = useState(0.0); // variable for the total price
  const [newlyAddedItem, setNewlyAddedItem] = useState(); // variable for storing the most recently added item
  const [newlyAddedItemNotificationVisible, setNewlyAddedItemNotificationVisible] = useState(false); // variable for logic of visible/invisible notifications
  const [newlyAddedItemNotificationTimeout, setNewlyAddedItemNotificationTimeout] = useState(); // variable for logic of visible/invisible notifications
  const [totalItems, setTotalItems] = useState(0); // variables for storing total number of items in cart
  const [itemList, setItemList] = useState([]); // variable for storing what items are in the cart
  const [cartVisible, setCartVisible] = useState(false); // variable for logic of whether the cart is visible or not
  const [searchValue, setSearchValue] = useState(""); // variable for search bar value
  const [searchQuery, setSearchQuery] = useState(null); // variable for final search query to filter by
  const [filterSelection, setFilterSelection] = useState("productName"); // variable to keep track of filter selection (name or base price)
  const [visibleRolls, setVisibleRolls] = useState(rollsList.sort((roll1, roll2) => {
    return (roll1[filterSelection] > roll2[filterSelection]) ? 1 : ((roll1[filterSelection] < roll2[filterSelection]) ? -1 : 0)
  })); // list of visible rolls based on filters

  // function to handle newly added items to the cart
  let addItemHandler = (newItem) => {
    setTotalPrice(totalPrice + parseFloat(newItem.finalPrice));
    setNewlyAddedItem(newItem);
    setTotalItems(totalItems + 1);
    setItemList(itemList.concat(newItem));

    setNewlyAddedItemNotificationVisible(true);

    clearTimeout(newlyAddedItemNotificationTimeout); // clear previous timer, does nothing on intialization/first item added
    setNewlyAddedItemNotificationTimeout(setTimeout(() => { // set notification to only show for 3 seconds
      setNewlyAddedItemNotificationVisible(false);
    }, 3000));
  }

  // handler to remove items from shopping cart
  let removeItemHandler = (index) => {
    if (totalItems-1 === 0) {
      setTotalPrice(0);
    } else {
      setTotalPrice(totalPrice - parseFloat(itemList[index].finalPrice));
    }
    setTotalItems(totalItems - 1);
    itemList.splice(index, 1);
    setItemList(itemList);
  }

  // handles continuous updates to search bar value
  let handleSearchBarChange = (e) => {
    setSearchValue(e.target.value);
  }

  // handles setting query value upon clicking "Search" button
  let handleSearchButton = () => {
    if (searchValue === "") {
      setSearchQuery(null);
    } else {
      setSearchQuery(searchValue);
    }
  }

  // handles filter selection by Name or Base Price
  let handleFilterSelection = (e) => {
    setFilterSelection(e.target.value);
  }


  // Hooks ========================================================================
  // Callback for updating visible rolls depending on filters and sorting
  let updateVisibleRolls = useCallback(() => {
    rollsList.sort((roll1, roll2) => { // first sort by filter selection
      return (roll1[filterSelection] > roll2[filterSelection]) ? 1 : ((roll1[filterSelection] < roll2[filterSelection]) ? -1 : 0)
    })
    setVisibleRolls(rollsList.filter((roll) => { // check query to filter out
      return (searchQuery === null || roll.productName.toLowerCase().includes(searchQuery?.toLowerCase()));
    }));
  }, [searchQuery, rollsList, filterSelection])

  // Continuously update visible rolls depending on all filters
  useEffect(() => {
    updateVisibleRolls();
  }, [searchQuery, updateVisibleRolls, filterSelection]);
  // Hooks END ========================================================================


  // Additional in-line styling added to practice this method of styling
  // Styling =============================================================================
  const filterRowStyle = {
    marginLeft: "8.5%",
    marginRight: "8.5%",
    display: "flex"
  }

  const searchBarSectionStyle = {
    display: "flex",
    width: "50%"
  }

  const searchBarStyle = {
    width: "50%"
  }

  const searchButtonStyle = {
    width: "80px"
  }

  const filterSelectStyle = {
    width: "100px",
    marginLeft: "5px"
  }
  // Styling END =============================================================================

  // rendering of the products/rolls shown based on what should be visible
  let visibleProductList = (
    <div className="itemized-row">
      {visibleRolls.map((roll) => {
        return (<Item key={roll.productName} productName={roll.productName} imageSource={process.env.PUBLIC_URL + roll.imageURL} price={roll.price} addItemHandler={addItemHandler} />)
      })}
    </div>
  )

  return (  
      <div>
          <NavBar totalItems={totalItems} totalPrice={totalPrice} newlyAddedItem={newlyAddedItem} newlyAddedItemNotificationVisible={newlyAddedItemNotificationVisible} setCartVisible={setCartVisible} cartVisible={cartVisible} />
          {cartVisible ? 
          <Cart itemArray={itemList} totalItems={totalItems} totalPrice={totalPrice} removeItemHandler={removeItemHandler} /> : 
          <div></div>
          }

          <div style={filterRowStyle} >
            <div style={searchBarSectionStyle} >
              <input style={searchBarStyle} type="text" id="myInput" placeholder="Search for rolls" value={searchValue} onChange={handleSearchBarChange} />
              <button style={searchButtonStyle} onClick={handleSearchButton} >Search</button>
            </div>
            <div>
              Sort by:
              <select style={filterSelectStyle} value={filterSelection} onChange={handleFilterSelection} >
                <option value={"productName"}>Name</option>
                <option value={"price"}>Base Price</option>
              </select>
            </div>
          </div>

          {visibleProductList}
      </div>
  );
}

export default Home;