import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "../../assets/style/main.css";
import { IoPlayOutline } from "react-icons/io5";
import { Parallax } from "react-scroll-parallax";
function Main() {
  return (
    <>
    <div  className="line"></div>
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
      <Parallax className="back-text-con" y={[-10, 50]}>
        <h2 className="back-text">
          <span>WE ARE </span>
          <span>VALORANT</span>
        </h2>
      </Parallax>
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
                  <a href="/">Watch the gameplay trailer here</a>
                </p>
                <hr />
              </div>
            </Col>
            <Col xs={6}>
              <div className="video-container">
                <div className="paly-icon">
                  <IoPlayOutline />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="agents_section-0"></section>
      <section className="agents_section">
        <Container className="con">
          <Row>
            <Col xs={8}>
              <Parallax y={[-25, 10]} x={[-10, 10]}>
                <img
                  src={require("../../assets/images/maxresdefault.png").default}
                  alt=""
                />
              </Parallax>
            </Col>
            <Col xs={4} className="right-side">
              <Row>
                <hr />
              </Row>
              <Row>
                <h2>YOUR AGENTS</h2>
              </Row>
              <Row>
                <h5>CREATIVITY IS YOUR GREATEST WEAPON.</h5>
              </Row>
              <Row>
                <p>
                  More than guns and bullets, you’ll choose an Agent armed with
                  adaptive, swift, and lethal abilities that create
                  opportunities to let your gunplay shine. No two Agents play
                  alike, just as no two highlight reels will look the same.
                </p>
              </Row>
              <Row>
                <div className="btn">
                  <span>VIEW ALL AGENTS</span>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="map-section">
        <Container>
          <Row className="first-row"></Row>
          <Row className="right-side">
            <Col>
              <Row>
                <hr />
              </Row>
              <Row>
                <h2>YOUR MAPS</h2>
              </Row>
              <Row>
                <h5>FIGHT AROUND THE WORLD</h5>
              </Row>
              <Row>
                <p>
                  Each map is a playground to showcase your creative thinking.
                  Purpose-built for team strategies, spectacular plays, and
                  clutch moments. Make the play others will imitate for years to
                  come.
                </p>
              </Row>
              <Row>
                <div className="btn">
                  <span>VIEW ALL MAPS</span>
                </div>
              </Row>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Main;
