import classes from "./Navbar.module.css";
import { Link } from "react-scroll";
import { FaHome as HomeIcon } from "react-icons/fa";
function BasicExample() {
  return (
    <div
      onScroll={() => {
        document.body.style.setProperty("--scroll", window.scrollY);
        console.log(window.scrollY.toString());
      }}
      className={classes.navbar}
    >
      <li className={classes.navlink}>
        <Link activeClass={classes.activeClass} smooth spy to="about">
          ABOUT
        </Link>
      </li>
      <li className={classes.navlink}>
        <Link activeClass="active" smooth spy to="projects">
          PROJECTS
        </Link>
      </li>
      <li className={classes.navlink}>
        <Link activeClass="active" smooth spy to="blog">
          BLOG
        </Link>
      </li>
      <li className={classes.navlink}>
        <Link activeClass="active" smooth spy to="contact">
          CONTACT ME
        </Link>
      </li>
    </div>
  );
}

export default BasicExample;
