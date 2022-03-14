import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these happy customers!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-1.jpg"
              text="WEDDING PLACEHOLDER TEXT HAPPY"
              label="Traditional"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="WEDDING PLACEHOLDER TEXT HAPPY"
              label="Forever yours"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="WEDDING PLACEHOLDER TEXT HAPPY"
              label="Detailed"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="WEDDING PLACEHOLDER TEXT HAPPY"
              label="Just you"
              path="/gallery"
            />
            <CardItem
              src="images/img-5.jpg"
              text="WEDDING PLACEHOLDER TEXT HAPPY"
              label="Adventure"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
