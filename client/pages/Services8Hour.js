import React from "react";
import styled from "styled-components";
import InfoSection from "../src/components/InfoSection/InfoSection";
import {
  comprehensiveBasicPackage,
  comprehensivePremiumPackage,
  comprehensiveUltimatePackage,
  coreBasicPackage,
  corePremiumPackage,
  coreUltimatePackage,
  extras,
} from "../src/components/InfoSection/Data8hr";

function Services8Hour() {
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
    </div>
  );
}

export default Services8Hour;

const CardsContainer = styled.div``;