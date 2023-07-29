import React from "react";
import Typewriter from "typewriter-effect";
import "./Type.css"; // Import your custom CSS file for the typewriter style

function Type() {
  return (
    <div className="typewriter-container">
      <Typewriter
        options={{
          strings: [
            "Software Developer",
            "Competitive Programmer",
            "MERN Stack Developer",
            "Problem Solver",
            "Enthusiastic Learner",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
}

export default Type;
