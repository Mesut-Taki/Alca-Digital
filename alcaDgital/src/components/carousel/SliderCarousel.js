import React, { Component } from "react";
import { Card, Container, Image, Row } from "react-bootstrap";
import Slider from "react-slick";
import sliderList from "../data/sliderList";

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
    return (
      <Container className="slider-div">
        <Row>
          <Slider {...settings}>
            {sliderList.map((slider) => (
              <Card key={slider.id} className="slider-card">
                <Image className="card-image" src={slider.image} />
              </Card>
            ))}
          </Slider>
        </Row>
      </Container>
    );
  }
}
