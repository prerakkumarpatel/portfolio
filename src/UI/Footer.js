import React from "react";
import classes from "./Footer.module.css";
import { NavLink } from "react-bootstrap";
import {
  AiFillGithub,
  // AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

import Nav from "../../node_modules/react-bootstrap/Nav";
import Navbar from "../../node_modules/react-bootstrap/Navbar";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <Navbar
      expand="sm"
      sticky="bottom"
      bg="dark"
      data-bs-theme="dark"
      className={classes.footer}
    >
      <NavLink className={`${classes["footer-copyright"]} me-auto `}>
        Copyright © {year} Prerak
      </NavLink>
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
    </Navbar>
  );
}

export default Footer;
