import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

/*
Header
- Logo
- Nav Item
Body/Main
- Search bar
- RestaurantContainer
- RestaurantCard
Footer
- Copyright
- Links
- Address
- Contact
*/

// Header component
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="food-logo.png"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// Body/Main component
const Body = () => {
  return (
    <div className="body">
      <div className="Search-bar">Search-bar</div>
      <div className="res-Container">
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard /> 
      </div>
    </div>
  );
};

// -Restaurant Card

// Inline Styling
// const styleCard = {
//   backgroundColor: "#fofofo",
//   border: "1px solid black",
//   width: "150px",
//   height:"200px",
// };

const RestaurantCard = () => {
  return (
    <div className="res-card">
      <img className="res-food" alt="food-img" src="images.jfif"></img>
      {/*  Inline Styling */}
      {/* <div className="res-card"  style={styleCard}> */}
      <h3>Street Food</h3>
      <p>Biryani Dum Hyderabadi</p>
      <span><b>4.5 rating</b></span>     
      <span className="card-btm"> <b>38 minute</b></span>
    </div>
  );
};

// App - component composition happened here
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppLayout />
  </React.StrictMode>,
);
