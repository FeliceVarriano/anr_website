import React from "react";
import styled from "styled-components";
import Footer from "../Footer";
import { Button } from "../Button";

function OurProcess() {
  return (
    <>
      <ProcessesContainer>
        <HeaderParagraphContainer>
          <Header1>Our Process</Header1>
          <p>
            Ideally, we like to meet with the client (you) and discuss the
            details of your event from day one until the day of the event
            itself. We will happily set up as many meetings as necessary, but in
            general, we hope to have at least three meetings.
          </p>
        </HeaderParagraphContainer>
        <HeaderParagraphContainer>
          <Header3>Overview: Do we suit your needs?</Header3>
          <p>
            At this consultation, we will first meet with you to discuss the
            needs of your event and if we can meet them. We will ask you a few
            questions to determine some things about your event such as:
            location, scale, and general overview of the event itself and what
            you would like covered. Once we have determined that we can fulfill
            the needs of your event, we will go over our packages to determine
            what works best for you and your event. At this point, we will also
            discuss how we can customize the packages to optimize what you can
            get out of them. At any point during or after this meeting, when you
            decide to work with us, we will plan the next meeting to start
            preparing for the livestream of your event.
          </p>
        </HeaderParagraphContainer>
        <HeaderParagraphContainer>
          <Header3>Outline: Scouting the location.</Header3>
          <p>
            This meeting is optional but highly recommended. Even if we are
            familiar with a space, we would like to schedule a meeting with you
            at the location where the event will take place. The goal of this
            meeting is to have an idea of how you will be setting up your space
            and determining potential camera angles as well as potential
            obstacles (physical and virtual) to avoid during the livestream of
            the event. This will allow us to create a custom floorplan of how
            your event will use the space and where we can fit seamlessly to
            ensure you get the best livestream of your event.
          </p>
        </HeaderParagraphContainer>
        <HeaderParagraphContainer>
          <Header3>Finetune: Details, details, details.</Header3>
          <p>
            Allocating at least two hours, we will sit with you to go over all
            the details of your event. Here, by going over the key points of the
            event, we will work with you to determine the main focal points of
            your event and how the camera(s) will be best positioned to capture
            them. By involving you in this process, you will have a clear idea
            of where we will be, as well as how your virtual audience will
            experience your event through our livestream. This is also where we
            determine key details regarding customized scenes for your event if
            you choose to have them. For us, taking the extra time and effort to
            include the finer details of your event is important because we want
            to help your virtual audience experience as much as they can through
            the livestream.
          </p>
        </HeaderParagraphContainer>
        <Button buttonStyle="btn--outline-dark" path="/contactus">
          ContactUs
        </Button>
      </ProcessesContainer>
      <Footer />
    </>
  );
}

export default OurProcess;

const ProcessesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 61em;
`;

const HeaderParagraphContainer = styled.div`
  margin: 5px;
  max-width: 50%;
  min-width: 50%;
`;

const Header1 = styled.h1`
  color: var(--secondaryColor);
`;

const Header3 = styled.h3`
  color: var(--secondaryColor);
`;
