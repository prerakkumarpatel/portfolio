import React from "react";
import classes from "./Footer.module.css";
import { Container, Row, Col, Card } from "react-bootstrap";
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
    <Card.Footer fluid className={classes["footer"]}>
      <Row>
        <Col md="4">
          <h3 className={classes["footer-copyright"]}>
            Copyright © {year} Prerak
          </h3>
          <div className={classes["footer-icons"]}>
            <ul>
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
          </div>
        </Col>
      </Row>
    </Card.Footer>
  );
}

export default Footer;
