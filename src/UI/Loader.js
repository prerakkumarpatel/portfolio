import React from "react";
import classes from "./Loader.module.css";

const Loader = (props) => {
  return props.load ? (
    <div className={classes.balls}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  ) : null;
};

export default Loader;
