import { useContext } from "react";
import Navbar from "./Components/Navbar";
import { Store } from "./context/Store";
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./Pages/Home";
import { AddProject } from "./Pages";

function App() {
  const { state } = useContext(Store);
  const { darkMode, colorMode } = state;
  return (
    <div className={`${darkMode ? "dark" : ""} duration-1000 ${colorMode}` }>  
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/addProject" Component={AddProject} />
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
