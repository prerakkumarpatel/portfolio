import classes from "./Navbar.module.css";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [links, setLinks] = useState([
    "Home",
    "About",
    "Services",
    "Contact",
    // Add more links as needed
  ]);

  return (
    <div className={classes.navbarcontainer}>
      <nav className={classes.navbar}>
        <ul>
          {links.map((link, index) => (
            <li className={classes["navbar-link"]}>
              {" "}
              <a key={index} href="/">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
