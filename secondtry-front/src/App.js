// import './App.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// //import Navbar from './layout/Navbar';
// import Home from './pages/Home';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import AddUser from './users/AddUser';
// import EditUser from './users/EditUser';
// import ViewUser from './users/ViewUser';
// import Login from './users/Login';
// import GYM from './pages/gym';
// import NewHome from './pages/NewHome';
// import Register from './component/register';
// import AddPhysio from './Physio/AddPhysio';
// import EditPhysio from './Physio/EditPhysio';
// import ViewPhysio from './Physio/ViewPhysio';
// import PhysioHome from './pages/PhysioHome';



// function App() {
//   return (
//     <div className="App">
      
//       <Router>
//         <Navbar />

//         <Routes>
//           <Route exact path="/" element={<NewHome />} />
//          <Route exact path="/adduser" element={<AddUser />} />
//           <Route exact path="/edituser" element={<EditUser />} />
//           <Route exact path="/login" element={<Login />} />
//           <Route exact path="/gym" element={<GYM />} />
//           <Route exact path="/home" element={<Home />} />
//           <Route exact path="/viewemployee/:id" element={<ViewUser />} />
//           <Route exact path="/editemployee/:id" element={<EditUser />} />
//           <Route exact path="/register" element= { <Register/>} />
//           <Route exact path="/addphysio" element={<AddPhysio />} />
//           <Route exact path="/editphysio/:id" element={<EditPhysio />} />
//           <Route exact path="/viewphysio/:id" element={<ViewPhysio />} />
//           <Route exact path="/physiohome" element={<PhysioHome />} />

          



          
//           <Route exact path="/viewuser/:id" element={<ViewUser />} /> 
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;


// App.js
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './components/common/Navbar1';
import LoginPage from './components/auth/LoginPage';
import RegistrationPage from './components/auth/RegistrationPage';
import FooterComponent from './components/common/Footer';
import UserService from './components/service/UserService';
import UpdateUser from './components/userpage/UpdateUser';
import UserManagementPage from './components/userpage/UserManagementPage';
import ProfilePage from './components/userpage/ProfilePage';




function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<LoginPage />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route path="/profile" element={<ProfilePage />} />

            {/* Check if user is authenticated and admin before rendering admin-only routes */}
            {UserService.adminOnly() && (
              <>
                <Route path="/register" element={<RegistrationPage />} />
                <Route path="/admin/user-management" element={<UserManagementPage />} />
                <Route path="/update-user/:userId" element={<UpdateUser />} />
              </>
            )}
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </div>
        <FooterComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;