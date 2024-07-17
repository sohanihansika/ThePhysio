<<<<<<< HEAD
import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import GymHome from "./gym-home";

function App() {
  return(
    <Router>
      <div className="App">
        <Routes>
          <Route path="/gym" element={<GymHome />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
=======
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Table from "./components/table"; // Ensure this path and casing is correct

// Import Navbar and NewHome components
// import Navbar from "./components/Navbar"; // Adjust the path as needed
// import NewHome from "./components/NewHome"; // Adjust the path as needed

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          
          
          <Route path="/table" element={<Table />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
>>>>>>> ed058713b57c31e707fd886a7233c046d782f210
