import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "../../assets/style/header.css";
import { BsArrowUpRight } from "react-icons/bs";
import { MdLanguage } from "react-icons/md";
function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#home">
            <img
              className="logo"
              src={require("../../assets/images/logo.webp").default}
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Brand href="#home">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              height="35"
              viewBox="0 0 100 100"
              width="50"
            >
              <path
                d="M99.25 48.66V10.28c0-.59-.75-.86-1.12-.39l-41.92 52.4a.627.627 0 00.49 1.02h30.29c.82 0 1.59-.37 2.1-1.01l9.57-11.96c.38-.48.59-1.07.59-1.68zM1.17 50.34L32.66 89.7c.51.64 1.28 1.01 2.1 1.01h30.29c.53 0 .82-.61.49-1.02L1.7 9.89c-.37-.46-1.12-.2-1.12.39v38.38c0 .61.21 1.2.59 1.68z"
                fill="#fff"
              ></path>
            </svg>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="GAME INFO" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#">AGENT</NavDropdown.Item>
                <NavDropdown.Item href="#">maps</NavDropdown.Item>
                <NavDropdown.Item href="#">ARSENAL</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#media">MEDIA</Nav.Link>

              <Nav.Link href="#news">NEWS</Nav.Link>
              <Nav.Link href="#leader">LEADERBOARDS</Nav.Link>
              <NavDropdown title="SUPPORT" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#">SPACE</NavDropdown.Item>
                <NavDropdown.Item href="#">SUPPORT</NavDropdown.Item>
                <NavDropdown.Item href="#">COMMUNITY CODE</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="OUR SOCIALS" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#">TWITTER</NavDropdown.Item>
                <NavDropdown.Item href="#">YOUTUBE</NavDropdown.Item>
                <NavDropdown.Item href="#">INSTAGRAM</NavDropdown.Item>
                <NavDropdown.Item href="#">FACEBOOK</NavDropdown.Item>
                <NavDropdown.Item href="#">DISCORD</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#esport">
                ESPORTS <BsArrowUpRight />
              </Nav.Link>
              <NavDropdown title="MORE" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#">PBE SIGNUP</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                className="lang-nav"
                title={<MdLanguage />}
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="#">English</NavDropdown.Item>
                <NavDropdown.Item href="#">Arabic</NavDropdown.Item>
              </NavDropdown>
              <Button variant="danger">PLAY NOW</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
