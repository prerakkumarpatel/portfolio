import classes from "./Navbar.module.css";

const Navbar = () => {
  const links = [
    "Home   ",
    "About   ",
    "Home   ",
    "About   ",

    // Add more links as needed
  ];

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
