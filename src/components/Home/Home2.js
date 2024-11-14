import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/dp.png";
import Tilt from "react-parallax-tilt";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", color:"whitesmoke" }}>
            Professional <span className="purple"> Summary </span>
            </h1>
            <p className="home-about-body">
  <br />
  <br /> I am a passionate data science enthusiast with a keen interest in transforming data into actionable insights and upcoming
  <i>
    <b className="purple"> Data and Software Engineer Intern at BlackRock.</b>
  </i>
  <br />
  
  <br />
  With hands-on experience in building, deploying and managing web applications using AWS services like
  <i>
    <b className="purple"> EC2, S3, SNS and Lambda, </b>
  </i>
   I have expertise in
  <i>
    <b className="purple"> AWS Cloud. </b>
  </i>
  {/* and */}
  {/* <i>
    <b className="purple"> AWS Solution Architect Associate. </b>
  </i> */}
  <br />
  <br />
  With a strong foundation in statistics, programming, and machine learning, I thrive on solving complex problems and uncovering patterns within data.</p>

          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="home-profile-image" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        
       
      </Container>
    </Container>
  );
}
export default Home2;
