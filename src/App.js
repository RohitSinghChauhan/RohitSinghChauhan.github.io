import { Box } from "@chakra-ui/react";
import About from "./components/About";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Box>
      <Navbar />
      <Homepage />
      <About />
    </Box>
  );
}

export default App;
