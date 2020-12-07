import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./contact-form.styles.css";

const ContactForm = () => {
  return (
    <div id="contact">
      <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
      <Jumbotron className="contact-jumbotron">
        <Row>
          <Col className="d-flex justify-content-center flex-wrap">
            <div className="m-2">
              <a href="mailto:deepeesh471@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button variant="danger" title="deepeesh471@gmail.com">
                  <i className="fas fa-envelope-square"></i> Email Me
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://www.linkedin.com/in/misterdipesh" target="_blank" rel="noopener noreferrer">
                <Button variant="primary" title="Visit my LinkenIn">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://www.facebook.com/misterdipesh" target="_blank" rel="noopener noreferrer">
                <Button variant="primary" title="Say hello on FB">
                  <i className="fab fa-facebook-square"></i> FaceBook
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://github.com/misterdipesh" target="_blank" rel="noopener noreferrer">
                <Button variant="dark" title="My other projects">
                  <i className="fab fa-github-square"></i> GitHub
                </Button>
              </a>
            </div>
			<div className="m-2">
              <a href="https://instagram.com/mr.dipesh" target="_blank" rel="noopener noreferrer">
                <Button variant="info" title="Follow me !">
                  <i className="fab fa-instagram"></i> instagram
                </Button>
              </a>
            </div>
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
};

export default ContactForm;
