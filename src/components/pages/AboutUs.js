import React from "react";
import styled from "styled-components";
import "../../App.css";
import Footer from "../Footer";
import { Button } from "../Button";

export default function AboutUs() {
  return (
    <Container>
      <AuthorContainerWrapper>
        <MainHeader>ABOUT US</MainHeader>
        <img src="hafsah-1.jpg" alt="img" />
        <Authors>
          <AuthorContainer>
            <Header>Hafsah Ali</Header>
            <p>Videographer,</p>
            <p>Administration & Financing</p>
          </AuthorContainer>
          <AuthorContainer>
            <Header>Michael Richer</Header>
            <p>Videographer,</p>
            <p>Livestreaming Tech</p>
          </AuthorContainer>
        </Authors>

        <AuthorText>
          <Header>Our Story</Header>
          <Paragraph>
            Many things changed when Covid-19 became a global pandemic in 2020.
            For us, that meant scrapping our original big wedding plans and
            downsizing everything to a small-scale event where the guestlist was
            reduced to just the bare minimum. Though there were many challenges,
            one of our biggest problems was trying to a reasonable livestreaming
            option to share our special day with everyone who couldn’t be there
            (so basically most of our guestlist). However, we were shocked to
            find that most available livestreaming services were overpriced,
            offering too much without really covering the essentials, or simply
            did not fit what we were looking for. So, what did we do? We
            livestreamed our own wedding! We did the research, invested in the
            equipment, and repeatedly tested until we were pleased with the
            quality. We have since livestreamed several other events, including
            weddings, receptions, funerals, and more. With each event, we have
            learned a lot about working with different spaces and situations.
            Now, we are confident that we can help others by offering a quality
            livestreaming service that is straightforward, accommodating, and
            price conscious.
          </Paragraph>
        </AuthorText>

        <AuthorText>
          <Header>Our Mission</Header>
          <Paragraph>
            To make quality livestreaming services more accessible by making
            them as simple and flexible as possible.
          </Paragraph>
        </AuthorText>

        <AuthorText>
          <Header>Our Values</Header>
          <Paragraph>
            Integrity – We aim to be as straightforward and honest as possible.
          </Paragraph>
          <Paragraph>
            Quality – Our goal is to produce the highest quality livestream
            using industry-backed equipment.
          </Paragraph>
          <Paragraph>
            Reasonable – All of services are affordable and flexible to suit the
            needs of the event.
          </Paragraph>
        </AuthorText>

        <AuthorText>
          <Header>Our Commitment</Header>
          <Paragraph>
            You’ll see our commitment to integrity when you see our service
            packages, where each package is broken down for you to understand
            what is and isn’t included. We also have no problem building custom
            packages for anyone who wants more (or less) for each service. We
            will never suggest upgrading to a package or paying for more if a
            more reasonably priced option will do.
          </Paragraph>
          <Paragraph>
            We are committed to producing a high-quality livestream for your
            event. We will go to the venue beforehand to test out the stream in
            the event space, determine possible locations, and work with you to
            ensure we stream what you want, the way you want it. We also offer a
            variety of scenes and customizable options for the livestream to
            ensure viewers get the best viewing experience.
          </Paragraph>
          <Paragraph>
            One of our biggest goals is to keep everything reasonable – from
            pricing to fully customizable service packages, we want to ensure
            that everything makes sense to YOU. Our clients and their feedback
            matter to us. We are available 24/7 to answer your questions and we
            will meet with you as many times as necessary to make sure nothing
            gets missed.
          </Paragraph>
          <Paragraph>
            At the end of the day, we want to livestream your event the way you
            want it, in the most straightforward way possible.
          </Paragraph>
        </AuthorText>
        <Button buttonStyle="btn--outline-dark" path="/contactus">
          CONTACT US
        </Button>
      </AuthorContainerWrapper>
      <Footer />
    </Container>
  );
}

const Container = styled.div``;

const AuthorContainerWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Authors = styled.div`
  display: flex;
  flex-direction: row;
`;

const AuthorContainer = styled.div`
  margin: 2 0px;
`;

const AuthorText = styled.div`
  margin: 10px;
  min-width: 50%;
  max-width: 50%;
`;

const MainHeader = styled.h1`
  color: var(--secondaryColor);
`;

const Header = styled.h3`
  font-weight: bold;
  color: var(--secondaryColor);
`;

const Paragraph = styled.p`
  font-weight: normal;
`;
