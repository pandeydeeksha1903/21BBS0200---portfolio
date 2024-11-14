import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        
        {/* Removed CV Download Button */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <h3>Contact Form</h3>
        </Row>

        {/* Contact Form */}
        <Row className="resume" style={{ justifyContent: "center", position: "relative" }}>
          <form
            style={{
              maxWidth: "600px",
              width: "100%",
              padding: "20px",
              backgroundColor: "#f7f7f7",
              borderRadius: "10px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div style={{ marginBottom: "15px" }}>
              <label
                style={{
                  display: "block",
                  fontSize: "16px",
                  fontWeight: "600",
                  marginBottom: "8px",
                }}
              >
                Name
              </label>
              <input
                type="text"
                style={{
                  width: "100%",
                  padding: "10px",
                  fontSize: "16px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
                placeholder="Your name"
                required
              />
            </div>

            <div style={{ marginBottom: "15px" }}>
              <label
                style={{
                  display: "block",
                  fontSize: "16px",
                  fontWeight: "600",
                  marginBottom: "8px",
                }}
              >
                Email
              </label>
              <input
                type="email"
                style={{
                  width: "100%",
                  padding: "10px",
                  fontSize: "16px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
                placeholder="Your email"
                required
              />
            </div>

            <div style={{ marginBottom: "15px" }}>
              <label
                style={{
                  display: "block",
                  fontSize: "16px",
                  fontWeight: "600",
                  marginBottom: "8px",
                }}
              >
                Message
              </label>
              <textarea
                style={{
                  width: "100%",
                  padding: "10px",
                  fontSize: "16px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  resize: "vertical",
                }}
                rows="4"
                placeholder="Your message"
                required
              ></textarea>
            </div>

            <Button
              variant="primary"
              type="submit"
              style={{
                width: "100%",
                padding: "10px",
                fontSize: "16px",
                fontWeight: "600",
                borderRadius: "5px",
                backgroundColor: "#007bff",
                border: "none",
              }}
            >
              Send Message
            </Button>
          </form>
        </Row>

        {/* Replaced Download CV button with Contact Form section */}
      </Container>
    </div>
  );
}

export default ResumeNew;
