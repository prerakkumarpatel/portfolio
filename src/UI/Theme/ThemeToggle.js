// ToggleButton.js

import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { lightTheme } from "./lightTheme";
// import { darkTheme } from "./darkTheme";

const ToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      {theme === lightTheme ? "Switch to Dark" : "Switch to Light"}
    </button>
  );
};

export default ToggleButton;
