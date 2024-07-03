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