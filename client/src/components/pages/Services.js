import React, { useState, button } from "react";
import "../../App.css";
import Footer from "../Footer";
import styled from "styled-components";
import CardItem from "../CardItem";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalBody from "react-bootstrap/ModalBody";
import ModalTitle from "react-bootstrap/ModalTitle";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalDialog from "react-bootstrap/ModalDialog";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Services() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);

  return (
    <>
      <Container>
        {/* <div className="cards">
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
        </div> */}

        <Button variant="primary" onClick={handleOpen}>
          Help Me Decide!
        </Button>

        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={show}
          onHide={handleClose}
        >
          <ModalHeader closeButton>
            <ModalTitle>Modal heading</ModalTitle>
          </ModalHeader>
          <ModalBody>Woohoo, you're reading this text in a modal!</ModalBody>
          <ModalFooter>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </ModalFooter>
        </Modal>
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
