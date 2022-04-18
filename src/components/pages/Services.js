import React from "react";
import "../../App.css";
import Footer from "../Footer";
import styled from "styled-components";
import CardItem from "../CardItem";

export default function Services() {
  return (
    <>
      <Container>
        <div className="cards">
          <div className="cards__container">
            <div className="cards__wrapper">
              <ul className="cards__items">
                <CardItem
                  src="images/svg-image-3.svg"
                  text="View our 4 Hour Packages"
                  label="Services"
                  path="/services4hour"
                />
                <CardItem
                  src="images/svg-image-2.svg"
                  text="View our 8 Hour Packages"
                  label="Services"
                  path="/services8hour"
                />
              </ul>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}

const Container = styled.div`
  justify-content: center;
  align-items: center;
  height: 61em;
`;
