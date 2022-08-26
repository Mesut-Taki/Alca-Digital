import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import SplitButton from "react-bootstrap/SplitButton";
import Topbar from "../topbar/Topbar";

const Navbar = () => {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <Container className="navbar-container">
      <Row>
        <nav>
          <Topbar />
          <div className="burger-menu" onClick={updateMenu}>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
          </div>
        </nav>
        <div className={menu_class}>
          <SplitButton
            align={{ lg: "start" }}
            title="SHOW ALL TYRES"
            id="dropdown-menu-align-responsive-2"
          ></SplitButton>
          <SplitButton
            align={{ lg: "start" }}
            title="FIND A DEALER"
            id="dropdown-menu-align-responsive-2"
          ></SplitButton>
          <SplitButton
            align={{ lg: "start" }}
            title="GUIDES & VIDEOS"
            id="dropdown-menu-align-responsive-2"
          ></SplitButton>
          <SplitButton
            align={{ lg: "start" }}
            title="GO WITH"
            id="dropdown-menu-align-responsive-2"
          ></SplitButton>
          <SplitButton
            title="SERVICE & HELP"
            id="dropdown-menu-align-responsive-2"
          ></SplitButton>
        </div>
      </Row>
    </Container>
  );
};

export default Navbar;
