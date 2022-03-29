import React from "react";
import "../../App.css";
import Footer from "../Footer";
import styled from "styled-components";
import InfoSection from "../InfoSection/InfoSection";
import {
  comprehensiveBasicPackage,
  comprehensivePremiumPackage,
  comprehensiveUltimatePackage,
  coreBasicPackage,
  corePremiumPackage,
  coreUltimatePackage,
  extras,
} from "../InfoSection/Data";

export default function Services() {
  return (
    <Container>
      <CardsContainer>
        <InfoSection {...coreBasicPackage} />
        <InfoSection {...corePremiumPackage} />
        <InfoSection {...coreUltimatePackage} />
        <InfoSection {...comprehensiveBasicPackage} />
        <InfoSection {...comprehensivePremiumPackage} />
        <InfoSection {...comprehensiveUltimatePackage} />
        <InfoSection {...extras} />
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
