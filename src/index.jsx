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

// -Restaurant Card

// Inline Styling
// const styleCard = {
//   backgroundColor: "#fofofo",
//   border: "1px solid black",
//   width: "150px",
//   height:"200px",
// };

// We can pass data like this

// Pass Props - In 2nd Part
// const RestaurantCard = (props) => {
// We can pass data like this
// const RestaurantCard = ({ resName, cuisine, rating, del_time }) => {
const RestaurantCard = (props) => {
  // using destructure
  const {resName, cuisine, rating, del_time} = props;
  return (
    <div className="res-card">
      <img className="res-food" alt="food-img" src="images.jfif" />
      {/*  Inline Styling */}
      {/* <div className="res-card"  style={styleCard}> */}
      {/* <h3>{props.resName}</h3> */}
      <h3>{resName}</h3>
      <p>{cuisine}</p>
      <span>
        <b>{rating}</b>
      </span>
      <span className="card-btm">
        <b>{del_time}</b>
      </span>
    </div>
  );
};

// Body/Main component
const Body = () => {
  return (
    <div className="body">
      <div className="Search-bar">Search-bar</div>
      <div className="res-Container">
        <RestaurantCard
          resName="Street Food"
          cuisine="Biryani Dum Hyderabadi"
          rating="4.5"
          del_time="36 minute"
        />
        <RestaurantCard
          resName="Food Bazar"
          cuisine="Chiken Korma"
          rating="4.4"
          del_time="40 minute"
        />
        <RestaurantCard
          resName="Biryani House"
          cuisine="Mutton Korma with Pullow"
          rating="4.2"
          del_time="35 minute"
        />
        <RestaurantCard
          resName="Food Lover"
          cuisine="Samosa with chatni"
          rating="4.1"
          del_time="32 minute"
        />
        <RestaurantCard
          resName="Food Mohalla"
          cuisine="Chilli Paratha"
          rating="4.8"
          del_time="31 minute"
        />
        <RestaurantCard
          resName="KFC"
          cuisine="Smoky grilled chicken"
          rating="4.9"
          del_time="30 minute"
        />
      </div>
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
