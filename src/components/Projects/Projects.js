import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/crypto.png";
import chatify from "../../Assets/Projects/flight2.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/Expense.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Flight Delay Prediction (Personal Project)"
              description=" Used Python and key libraries like Pandas, NumPy, Matplotlib, Seaborn, and scikit-learn to predict flight delays. Optimized the model performance through robust GradientBoosting Regressor modeling, aiming to enhance the precision of flight delay predictions."
              // ghLink=""
              demoLink="https://github.com/pandeydeeksha1903/Flight-delay-prediction"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title=" ExpensiFY : Expense Tracker Web App (Personal Project)"
              description="Built a dynamic and user-friendly expense tracker application with React.js, Firebase, and Google OAuth for secure authentication. This web app provides a seamless experience for users to log in safely, track expenses in real-time, and view a responsive interface." 
              // ghLink=""
              demoLink="https://github.com/pandeydeeksha1903/ExpensiFY"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title=" Cryptocurrency Prediction (Personal Project)"
              description="Developed a deep learning model to analyze historical cryptocurrency price data and predict future trends. This model leverages RNNs and LSTMs, designed for sequential data analysis, to capture complex patterns, enabling more accurate forecasting and trend analysis."
      
              demoLink="https://github.com/pandeydeeksha1903/Cryptocurrency-prediction"              
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
