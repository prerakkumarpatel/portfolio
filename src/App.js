import { useState, useEffect } from "react";
import Loader from "./UI/Loader";
import Footer from "./UI/Footer";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import { ThemeProvider } from "./UI/Theme/ThemeContext";
// import Fade from "react-reveal/Fade";
import Navbar from "./UI/Navbar";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 4200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <div className="App">
        <Router>
          {load && <Loader load />}

          <div className="App" id={load ? "no-scroll" : "scroll"}>
            <Navbar />
            {/* <ScrollToTop /> */}
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/project" element={<Projects />} /> */}
              <Route path="/about" element={<About />} />
              {/* <Route path="/resume" element={<Resume />} /> */}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
