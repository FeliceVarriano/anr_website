import React from "react";
import "../../App.css";
import ServiceCard from "../ServiceCard";
import Footer from "../Footer";
import styled from "styled-components";

export default function Services() {
  return (
    <Container>
      <CardsContainer>
        <ServiceCard
          src="images/img-5.jpg"
          label="Placeholder Label"
          text="PlaceHolder Text"
        />
        <ServiceCard
          src="images/img-5.jpg"
          label="Placeholder Label"
          text="PlaceHolder Text"
        />
        <ServiceCard
          src="images/img-5.jpg"
          label="Placeholder Label"
          text="PlaceHolder Text"
        />
      </CardsContainer>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  justify-content: center;
  align-items: center;
`;

const CardsContainer = styled.div``;
