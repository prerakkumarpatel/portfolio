import React, { useEffect, useState } from "react";
import classes from "./Home.module.css";
function Home() {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the current page based on the scroll position
      const pageHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      const currentPage = scrollPosition / pageHeight;

      setCurrentPage(currentPage);
      document.documentElement.style.setProperty("--scroll", `${currentPage}`);

      console.log(currentPage);
    };

    // Add the scroll listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the scroll listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={classes.home}>
      <h1>Home</h1>
    </div>
  );
}
export default Home;
