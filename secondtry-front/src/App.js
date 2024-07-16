import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState } from 'react';

import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import ViewUser from './users/ViewUser';
import Login from './users/Login';
import GYM from './pages/gym';
import NewHome from './pages/NewHome';
import NewHome2 from './pages/NewPhysioHome';
import Register from './component/register';
import AddPhysio from './Physio/AddPhysio';
import EditPhysio from './Physio/EditPhysio';
import ViewPhysio from './Physio/ViewPhysio';
import PhysioHome from './pages/PhysioHome';

function App() {
  const [userRole, setUserRole] = useState(null); // State to manage user role

  return (
    <div className="App">
      <Router>
        <Layout userRole={userRole} setUserRole={setUserRole} />
      </Router>
    </div>
  );
}

function Layout({ userRole, setUserRole }) {
  const location = useLocation(); // Get the current location

  return (
    <>
      {location.pathname !== '/' && <Navbar userRole={userRole} />} {/* Conditionally render Navbar */}
      
      <Routes>
        <Route exact path="/employee" element={<NewHome />} />
        <Route exact path="/Physio" element={<NewHome2 />} />
        <Route exact path="/adduser" element={<AddUser />} />
        <Route exact path="/edituser" element={<EditUser />} />
        <Route exact path="/" element={<Login setUserRole={setUserRole} />} /> {/* Pass setUserRole to Login */}
        <Route exact path="/gym" element={<GYM />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/viewemployee/:id" element={<ViewUser />} />
        <Route exact path="/editemployee/:id" element={<EditUser />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/addphysio" element={<AddPhysio />} />
        <Route exact path="/editphysio/:id" element={<EditPhysio />} />
        <Route exact path="/viewphysio/:id" element={<ViewPhysio />} />
        <Route exact path="/physiohome" element={<PhysioHome />} />
        <Route exact path="/viewuser/:id" element={<ViewUser />} /> 
      </Routes>
    </>
  );
}

export default App;
