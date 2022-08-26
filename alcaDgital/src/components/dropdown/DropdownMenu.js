import React from "react";
import { Container, Row } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";

function DropdownMenu() {
  return (
    <Container className="dropdown">
      <Row>
        <Dropdown.Menu show>
          <Dropdown.Item eventKey="1">SHOW ALL TYRES</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="2">FIND A DEALER</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="3"> GUIDES & VIDEOS</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="4">GO WITH</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="4">SERVICE & HELP</Dropdown.Item>
        </Dropdown.Menu>
      </Row>
    </Container>
  );
}

export default DropdownMenu;
