import React from "react";
import styled from "styled-components";

function ServiceCard(props) {
  return (
    <Container>
      <Card>
        <figure className="cards__item__pic-wrap">
          <img className="cards__item__img" alt="Card" src={props.src} />
        </figure>
        <p>{props.label}</p>
      </Card>
      <Text>{props.text}</Text>
    </Container>
  );
}

export default ServiceCard;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  height: 160px;
  width: 200px;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
  -webkit-filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
  filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
  border-radius: 10px;
  overflow: hidden;
  text-decoration: none;
  margin: 10px;
`;

const Text = styled.p``;
