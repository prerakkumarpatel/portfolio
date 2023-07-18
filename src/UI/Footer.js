import React from "react";
import classes from "./Footer.module.css";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  // AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className={classes.footer}>
      <Row>
        <Col md="4" className={classes.footercopyright}>
          <h3>Copyright © {year} Prerak</h3>
        </Col>
        <Col md="4">
          <ul className={classes["footer-icons"]}>
            <li className={classes["social-icons"]}>
              <a
                href="https://github.com/prerakkumarpatel"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className={classes["social-icons"]}>
              <a
                href="https://www.linkedin.com/in/prerakkumarpatel/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>{" "}
            <li className={classes["social-icons"]}>
              <a
                href="https://www.instagram.com/prerakpatel07"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
