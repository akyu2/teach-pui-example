import React, { Component } from 'react';
import NavBar from "../../components/Navbar";
import Item from "../../components/Item"

import "./index.css"

const glazingOptions = ["Keep Original", "Sugar Milk", "Vanilla Milk", "Double Chocolate"]

class Home extends Component {
  render() {
    return (  
        <div>
            <NavBar />
        
            <div className="itemized-row">
              <Item productName="Original Cinnamon Roll" imageSource={process.env.PUBLIC_URL + "/assets/products/original-cinnamon-roll.jpg"} price={2.49} glazingOptions={glazingOptions} />
              <Item productName="Apple Cinnamon Roll" imageSource={process.env.PUBLIC_URL + "/assets/products/apple-cinnamon-roll.jpg"} price={3.49} glazingOptions={glazingOptions} />
              <Item productName="Raisin Cinnamon Roll" imageSource={process.env.PUBLIC_URL + "/assets/products/raisin-cinnamon-roll.jpg"} price={2.99} glazingOptions={glazingOptions} />
            </div>
        
            <div className="itemized-row">
                <Item productName="Walnut Cinnamon Roll" imageSource={process.env.PUBLIC_URL + "/assets/products/walnut-cinnamon-roll.jpg"} price={3.49} glazingOptions={glazingOptions} />
                <Item productName="Double Chocolate Cinnamon Roll" imageSource={process.env.PUBLIC_URL + "/assets/products/double-chocolate-cinnamon-roll.jpg"} price={3.99} glazingOptions={glazingOptions} />
                <Item productName="Strawberry Cinnamon Roll" imageSource={process.env.PUBLIC_URL + "/assets/products/strawberry-cinnamon-roll.jpg"} price={3.99} glazingOptions={glazingOptions} />
            </div>
        
        </div>
        
    );
  }
}
export default Home;