import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "../../assets/style/main.css";
function Main() {
  return (
    <>
      <section className="video_section">
        <div className="video_text">
          <small className="sub--title">
            A 5v5 character-based tactical shooter
          </small>
          <h1 className="title">VALORANT</h1>
          <div className="play-btn">
            <div className="btn">
              <span>PLAY FREE</span>{" "}
            </div>
          </div>
        </div>
        <video
          muted="muted"
          loop="true"
          autoPlay
          playsinline=""
          type="video/mp4"
          src={require("../../assets/videos/valorant.mp4").default}
        ></video>
      </section>
      <section className="latest_news_section">
        <Container>
          <Row className="latest-news-title-row">
            <Col>
              <h2 className="latest-news-title">LATEST NEWS</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                <div className="image-hover">
                  <Card.Img
                    variant="top"
                    src={require("../../assets/images/card1.jpeg").default}
                  />
                </div>
                <Card.Body>
                  <Card.Title>
                    <Row>
                      <Col xs={3} className="card-date">
                        10/19/21
                      </Col>
                      <Col xs={9} className="card-type">
                        ESPORTS
                      </Col>
                    </Row>
                  </Card.Title>
                  <Card.Text className="card-sup-text">
                    NA LAST CHANCE QUALIFIER - RESUMES WEDNESDAY,OCTOPER 27
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <div className="image-hover">
                  <Card.Img
                    variant="top"
                    src={require("../../assets/images/card3.jpeg").default}
                  />
                </div>
                <Card.Body>
                  <Card.Title>
                    <Row>
                      <Col xs={3} className="card-date">
                        10/19/21
                      </Col>
                      <Col xs={9} className="card-type">
                        ESPORTS
                      </Col>
                    </Row>
                  </Card.Title>
                  <Card.Text className="card-sup-text">
                    NA LAST CHANCE QUALIFIER - RESUMES WEDNESDAY,OCTOPER 27
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <div className="image-hover">
                  <Card.Img
                    variant="top"
                    src={require("../../assets/images/card3.jpeg").default}
                  />
                </div>
                <Card.Body>
                  <Card.Title>
                    <Row>
                      <Col xs={3} className="card-date">
                        10/19/21
                      </Col>
                      <Col xs={9} className="card-type">
                        ESPORTS
                      </Col>
                    </Row>
                  </Card.Title>
                  <Card.Text className="card-sup-text">
                    NA LAST CHANCE QUALIFIER - RESUMES WEDNESDAY,OCTOPER 27
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="we-are-valorant-section">
        <Container>
          <Row className="mb-5">
            <Col xs={1}></Col>
            <Col xs={8}>
              <h2 className="we-are-valorant-title">WE ARE VALORANT</h2>
            </Col>
            <Col xs={3}>
              <div className="valorant-code">
                <small>
                  VLRT PR0T0C0L <br /> MR0C - SWD - BR4
                </small>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={2}></Col>
            <Col xs={4}>
              <div className="left-side">
                <h6>DEFY THE LIMITS</h6>
                <p>
                  Blend your style and experience on a global, competitive
                  stage. You have 13 rounds to attack and defend your side using
                  sharp gunplay and tactical abilities. And, with one life
                  per-round, you'll need to think faster than your opponent if
                  you want to survive. Take on foes across Competitive and
                  Unranked modes as well as Deathmatch and Spike Rush.
                </p>
                <p>
                  <a href="#">Watch the gameplay trailer here</a>
                </p>
                <hr />
              </div>
            </Col>
            <Col xs={6}>
              <div className="video-container">
                <div className="paly-icon"></div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Main;
