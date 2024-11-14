import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I'm <span className="purple">Deeksha Pandey</span>, an upcoming Data and Software Engineer Intern at BlackRock.
            <br />
            <br />
            I am currently pursuing a Bachelor of Technology in Computer Science and Engineering with Business Systems at VIT Vellore, presently I am in my 4th year.             <br />
            <br />
            Throughout my career, I've gained hands-on experience with a range of technologies, including Java programming Language, Python and its key libraries, JavaScript, React, MySQL, MongoDB, and AWS Cloud.
            <br />
            <br />
            I am a versatile individual who is comfortable working both in team settings and independently. My experiences have taught me to be deadline-driven and self-motivated, ensuring that I consistently deliver high-quality results within tight timelines.            <br />
            
            <br />
            I completed my last internship on September 2023 in Birla white cement as an IT Intern, Collaborated with team, analysed and visualized various data like production data, sales and distribution, energy consumption, and environmental monitoring and Documented the insights derived from interactive dashboards.            <br />
            <br />
            In my free time I admire reading autobiographies has deeply influenced my perspective; I’ve read The Story of My Life by Helen Keller, Wings of Fire by Dr. APJ Abdul Kalam, The Diary of a Young Girl by Anne Frank, and Ace against Odds by Sania Mirza. These stories have inspired me to push my boundaries and continue growing both personally and professionally. I am also a proficient basketball and chess player, I was awarded first prize in the DAV Basketball State Level Tournament, highlighting my skills and dedication to the sport.          </p>
          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Designing impactful cloud solutions that solve real-world problems."
          </p> */}
          {/* <footer className="blockquote-footer">Rahul Bhatija</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
