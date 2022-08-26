import React from "react";
import { Button, Container, Row } from "react-bootstrap";

const Body1 = () => {
  return (
    <Container className="container-body">
      <Row>
        <h3 className="body-h3">Nothing can stop you</h3>
        <Button className="button1" variant="light">
          FIND OUT MORE
        </Button>
      </Row>
    </Container>
  );
};

export default Body1;
