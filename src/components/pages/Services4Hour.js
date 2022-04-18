import React from "react";
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
} from "../InfoSection/Data4hr";
import Footer from "../Footer";

function Services4Hour() {
  return (
    <div>
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
    </div>
  );
}

export default Services4Hour;

const CardsContainer = styled.div``;