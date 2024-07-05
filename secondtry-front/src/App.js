import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import ViewUser from './users/ViewUser';
import Login from './users/Login';
import GYM from './pages/gym';
import NewHome from './pages/NewHome';
import Register from './component/register';
import GymRegister from './pages/gym-register';



function App() {
  return (
    <div className="App">
      
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<NewHome />} />
         <Route exact path="/adduser" element={<AddUser />} />
          <Route exact path="/edituser" element={<EditUser />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/gym" element={<GYM />} />
          <Route exact path="/gym-register" element={<GymRegister />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/viewemployee/:id" element={<ViewUser />} />
          <Route exact path="/editemployee/:id" element={<EditUser />} />
          <Route exact path="/register" element= { <Register/>} />


          



          
          <Route exact path="/viewuser/:id" element={<ViewUser />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
