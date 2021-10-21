import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../assets/style/footer.css";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="footer">
        <Container>
          <Row>
            <Col xs={3}></Col>
            <Col xs={3}>
              <a class="" href="/">
                Download Game Client
              </a>
            </Col>
            <Col xs={3}>
              <a class="" href="/">
                Download Riot Mobile Companion App
              </a>
            </Col>
            <Col xs={3}></Col>
          </Row>
          <Row>
            <a href="/">
              <img
                src={require("../../assets/images/logo2.webp").default}
                alt=""
              />
            </a>
          </Row>
          <Row>
            <ul>
              <li>
                <FaTwitter />
              </li>
              <li>
                <FaYoutube />
              </li>
              <li>
                <FaInstagram />
              </li>
              <li>
                <FaFacebook />
              </li>
              <li>
                <FaDiscord />
              </li>
            </ul>
          </Row>
          <Row>
            <Col xs={3}></Col>
            <Col xs={6}>
              <p>
                © 2021 Riot Games, Inc. Riot Games, VALORANT, and any associated
                logos are trademarks, service marks, and/or registered
                trademarks of Riot Games, Inc.
              </p>
            </Col>
            <Col xs={3}></Col>
          </Row>
          <Row>
            <ul>
              <li>
                <a href="/">Privacy Notice</a>
              </li>
              <li>
                <a href="/">Terms of Service</a>
              </li>
              <li>
                <a href="/">Cookie Preferences</a>
              </li>
            </ul>
          </Row>
          <Row>
              <Col xs={4}></Col>
            <Col xs={2}>
              <img
              className="mt-1"
                src={require("../../assets/images/esrb.png").default}
                alt=""
              />
            </Col>
            <Col xs={2}>
            <ul>
              <li>Blood</li>
              <li>Language</li>
              <li>Violence</li>
              <li>Users Interact</li>
              <li>In-Game Purchases</li>
              </ul>
            </Col>
            <Col xs={4}></Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
