import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import CardItemVideo from "./CardItemVideo";

function Cards() {
  return (
    <div className="cards">
      <h1>Gallery</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItemVideo
              src="/videos/ben-1.mp4"
              text="Vicki & Ben"
              label="Outdoor Wedding Ceremony"
              path="/services"
            />
            <CardItemVideo
              src="/videos/carol-1.mp4"
              text="Carol Richer"
              label="Funeral"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItemVideo
              src="/videos/heba-1.mp4"
              text="Heba & Daniel"
              label="Cultural Ceremony"
              path="/services"
            />
            <CardItemVideo
              src="/videos/heba-2.mp4"
              text="Heba & Daniel"
              label="Indoor Wedding Reception"
              path="/gallery"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
