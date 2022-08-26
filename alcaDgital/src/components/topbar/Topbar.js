import React from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/img/logo.png";

const Topbar = () => {
  return (
    <Navbar expand="lg" className="topbar">
      <Container>
        <Navbar.Brand href="#home">
          <Image src={logo} /> Alca Digital
        </Navbar.Brand>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">SHOW ALL TYRES</Nav.Link>
            <Nav.Link href="#link1">FIND A DEALER</Nav.Link>
            <Nav.Link href="#link2">GUIDES & VIDEOS</Nav.Link>
            <Nav.Link href="#link3">GO WITH</Nav.Link>
            <Nav.Link href="#link4">SERVICE & HELP</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Topbar;
