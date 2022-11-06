import { Box } from "@chakra-ui/react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import GithubPage from "./components/GithubPage";

function App() {
  return (
    <Box>
      <Navbar />
      <Homepage />
      <About />
      <Skills />
      <GithubPage />
      <Projects />
      <Footer />
    </Box>
  );
}

export default App;
