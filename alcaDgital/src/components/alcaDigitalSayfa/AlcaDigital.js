import React from "react";
import { Container, Row } from "react-bootstrap";
import Navbar from "../navbar/Navbar";

import Body1 from "../home/Body1";
import Slider from "../home/Body2";
import Body3 from "../home/Body3";
import Topbar from "../topbar/Topbar";

const AlcaDigital = () => {
  return (
    <div className="container-alca">
      <Container>
        {/* <Topbar /> */}
        <Row>
          <Navbar />
          <Body1 />
          <Slider />
          <Body3 />
        </Row>
      </Container>
    </div>
  );
};

export default AlcaDigital;
