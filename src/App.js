import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/contact";

function App() {
  return (
   <>
     <Navbar />
     <Home />
     <About />
     <Skills />
     <Projects />
     <Contact />
    </>
  );
}

export default App;
