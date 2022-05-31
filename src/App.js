import { useContext } from "react";
import Navbar from "./Components/Navbar";
import { Store } from "./context/Store";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Hero from "./Pages/Hero";
import Protfolio from "./Pages/Protfolio";
import Service from "./Pages/Service";

function App() {
  const { state } = useContext(Store);
  const { darkMode, colorMode } = state;
  return (
    <div className={`${darkMode ? "dark" : ""} duration-1000 ${colorMode}` }>  
      <Navbar />
      <Hero /> 
      <About />
      <Service /> 
      <Protfolio /> 
      <Contact />
    </div>
  );
}

export default App;
