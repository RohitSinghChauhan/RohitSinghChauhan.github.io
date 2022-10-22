import { Box } from "@chakra-ui/react";
import About from "./components/About";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <Box>
      <Navbar />
      <Homepage />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </Box>
  );
}

export default App;
