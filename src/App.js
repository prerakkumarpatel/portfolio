import { useState, useEffect } from "react";
import Loader from "./UI/Loader";
import Footer from "./UI/Footer";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import { ThemeProvider } from "./UI/Theme/ThemeContext";
// import Fade from "react-reveal/Fade";
import Navbar from "./UI/Navbar";

function App() {
  const [load, upadateLoad] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      {load && <Loader load />}

      <Navbar />
      <Home></Home>
      <About />

      <Home></Home>
      <About />

      <Home></Home>
      <About />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
