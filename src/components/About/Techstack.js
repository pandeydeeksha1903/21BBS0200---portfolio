import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaAws } from "react-icons/fa";
import { DiJavascript1, DiReact, DiNodejs, DiMongodb, DiGit, DiPython } from "react-icons/di";
import { SiAngular, SiMysql, SiAwslambda } from "react-icons/si";
import "./Techstack.css"; // Importing the CSS file

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p className="tech-name">Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p className="tech-name">JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAngular />
        <p className="tech-name">Angular</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p className="tech-name">React</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p className="tech-name">Node.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <p className="tech-name">MongoDB</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <p className="tech-name">MySQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAws />
        <p className="tech-name">AWS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAwslambda />
        <p className="tech-name">AWS Lambda</p>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p className="tech-name">Git</p>
      </Col>
    </Row>
  );
}

export default Techstack;
