import React from "react";
import { Container, Row } from "react-bootstrap";
import MultipleItems from "../carousel/SliderCarousel";

const Slider = () => {
  return (
    <Container className="slider">
      <Row>
        <h3 className="slider-title">Featured Products</h3>
        <MultipleItems />
      </Row>
    </Container>
  );
};

export default Slider;
