import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const Body3 = () => {
  return (
    <Container className="container-body3">
      <Row>
        <Col>
          <div className="body3-div">
            <h3>Fell excellent wet braking with Driveways!</h3>
          </div>
          <Button className="button2" variant="light">
            WATCH ALL VIDEOS
          </Button>
          <iframe
            className="iframe"
            src="https://www.youtube.com/embed/fgXgcLIIsjc"
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
};

export default Body3;
