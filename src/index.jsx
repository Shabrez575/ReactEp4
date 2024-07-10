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
const RestaurantCard = (props) => {
  // using destructure
  const {resData} = props;
  return (
    <div className="res-card">
      <img className="res-food" alt="food-img" 
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + 
        resData.info.cloudinaryImageId }
        />
      <h3>{resData.info.name}</h3>
      <p><b>{resData.info.cuisines.join(",")}</b></p>
      <span>
        <b>avgrating:{resData.info.avgRating}</b>
      </span>
      <span className="card-btm">
        <b>{resData.info.totalRatingsString}</b>
      </span>
       <p><b>{resData.info.costForTwo}</b></p>
    
    </div>
  );
};
// restaurantCard

const restObj =    {
      "info": {
          "id": "146397",
          "name": "Sreeraj Lassi Bar 1973S",
          "cloudinaryImageId": "b2d97facadf6b5a4e4f97e0124269768",
          "locality": "Shantinagar",
          "areaName": "Shantinagar",
          "costForTwo": "₹250 for two",
          "cuisines": [
              "Desserts",
              "Juices",
              "Ice Cream Cakes",
              "Snacks"
          ],
          "avgRating": 4.5,
          "veg": true,
          "parentId": "418125",
          "avgRatingString": "4.5",
          "totalRatingsString": "1K+",
          "promoted": true,
          "adTrackingId": "cid=15182532~p=5~adgrpid=15182532#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=146397~eid=d408450e-a0d9-4e9c-bf9f-fed3984a68b4~srvts=1720632058600~collid=45995",
          "sla": {
              "deliveryTime": 22,
              "lastMileTravel": 2.6,
              "serviceability": "SERVICEABLE",
              "slaString": "20-25 mins",
              "lastMileTravelString": "2.6 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-07-10 23:30:00",
              "opened": true
          },
          "badges": {
              "textExtendedBadges": [
                  {
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "options available",
                      "fontColor": "#7E808C"
                  }
              ]
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {},
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "textBased": {},
                  "imageBased": {},
                  "textExtendedBadges": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "description": "",
                                  "shortDescription": "options available",
                                  "fontColor": "#7E808C"
                              }
                          }
                      ]
                  }
              }
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
          "link": "swiggy://menu?restaurant_id=146397",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
      }
  };

// Body/Main component
const Body = () => {
  return (
    <div className="body">
      <div className="Search-bar">Search-bar</div>
      <div className="res-Container">
        <RestaurantCard
          resData = {restObj}
        />
        <RestaurantCard
          resData = {restObj}
        />
        <RestaurantCard
          resData = {restObj}
        />
        <RestaurantCard
          resData = {restObj}
        />
        <RestaurantCard
          resData = {restObj}
        />
        <RestaurantCard
          resData = {restObj}
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
