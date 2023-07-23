import React from "react";
import classes from "./Footer.module.css";
import { NavLink } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

import Nav from "../../node_modules/react-bootstrap/Nav";
import Navbar from "../../node_modules/react-bootstrap/Navbar";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <div className={classes.navbar}>
      <div className={classes["footer-copyright"]}>
        <NavLink className=" me-auto">Copyright © {year} Prerak</NavLink>
      </div>
      <div className={classes.icons}>
        <Nav className={classes["social-icons"]}>
          <a
            href="https://github.com/prerakkumarpatel"
            style={{ color: "white" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub />
          </a>
        </Nav>
        <Nav className={classes["social-icons"]}>
          <a
            href="https://www.linkedin.com/in/prerakkumarpatel/"
            style={{ color: "white" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </Nav>{" "}
        <Nav className={classes["social-icons"]}>
          <a
            href="https://www.instagram.com/prerakpatel07"
            style={{ color: "white" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillInstagram />
          </a>
        </Nav>
      </div>
    </div>
  );
}

export default Footer;
