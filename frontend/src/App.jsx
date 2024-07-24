import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Landingpage from './components/userpage/Landingpage';
import LoginPage from './components/auth/LoginPage';
import RegistrationPage from './components/auth/RegistrationPage';
import UserService from './components/service/UserService';
import ProtectedRoute from './components/ProtectedRoute';
import Sidebar from './components/common/Sidebar';
import Home from './components/userpage/Home';
import GymLanding from './components/gym/gymlanding';
import AboutUs from './components/userpage/aboutUs';
import Service from './components/userpage/service';
import Profile from './components/userpage/profile';





import Navbar from "./components/common/Navbar";

import AdminDashboard from './components/userpage/Admin/AdminDashboard';
import UserAccounts from './components/userpage/Admin/UserAccounts';
import StaffAccounts from './components/userpage/Admin/StaffAccounts';

import OwnerDashboard from './components/userpage/Owner/OwnerDashboard';
import AddEditEmployee from './components/userpage/Owner/AddEditEmployee';

import PhysioDashboard from './components/userpage/Physio/PhysioDashboard';

import UserDashboard from './components/userpage/User/UserDashboard';

import ManagerDashboard from './components/userpage/Manager/ManagerDashboard';

import CoachDashboard from './components/userpage/Coach/CoachDashboard';

import ReceptionistDashboard from './components/userpage/Receptionist/ReceptionistDashboard';





function App() {
  return (
    <BrowserRouter>
      <div
        className={`content ${
          !UserService.isAuthenticated() ? "w-full" : "w-full"
        }`}
      >
        {/* <div>
          <Navbar />
        </div> */}
      </div>
      <div className="App flex">
        {UserService.isAuthenticated() && (
          <div className="w-72">
            <Sidebar />
          </div>
        )}
        <div
          className={`content ${
            UserService.isAuthenticated() ? "w-3/4" : "w-full"
          }`}
        >
          <Routes>
            {!UserService.isAuthenticated() && (
              <>
                <Route path="/" element={<Landingpage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegistrationPage />} />
                <Route path="*" element={<Navigate to="/" />} />
              </>
            )}

            <Route element={<ProtectedRoute />}>
              <Route path="/login" element={<Navigate to="/" />} />
              <Route path="/register" element={<Navigate to="/" />} />

              {!UserService.isAdmin() ? (
                <>
                  <Route path="/staffaccounts" element={<Navigate to="/" />} />
                  
                </>
              ) : (
                <>
                  <Route path="/dashboard" element={<AdminDashboard />} />
                  <Route path="/staffaccounts" element={<StaffAccounts />} />
                  <Route path="/useraccounts" element={<UserAccounts />} />

                  <Route path="*" element={<Navigate to="/dashboard" />} />
                </>
              )}
              {!UserService.isOwner() ? (
                <>
                  <Route path="/empRegister" element={<AddEditEmployee />} />
                </>
              ) : (
                <>
                  <Route path="/dashboard" element={<OwnerDashboard />} />
                  <Route path="/update-user/:userId" element={<AddEditEmployee />} />
                  <Route path="*" element={<Navigate to="/dashboard" />} />
                </>
              )}
              {!UserService.isUser() ? (
                <>
                  <Route path="/profile" element={<Navigate to="/" />} />
                </>
              ) : (
                <>
                  <Route path="/dashboard" element={<UserDashboard />} />
                  <Route path="/admin/user-management" element={<Navigate to="/profile" />} />
                  <Route path="/update-user/:userId" element={<Navigate to="/profile" />} />
                  <Route path="*" element={<Navigate to="/dashboard" />} />
                </>
              )}
              {!UserService.isPhysio() ? (
                <>
                  
                </>
              ) : (
                <>
                  <Route path="/dashboard" element={<PhysioDashboard />} />
                  <Route path="/admin/user-management" element={<Navigate to="/profile" />} />
                  <Route path="/update-user/:userId" element={<Navigate to="/profile" />} />
                  <Route path="*" element={<Navigate to="/dashboard" />} />
                </>
              )}
              {!UserService.isReceptionist() ? (
                <>
                  
                </>
              ) : (
                <>
                  <Route path="/dashboard" element={<ReceptionistDashboard />}/>
                  <Route path="*" element={<Navigate to="/dashboard" />} />
                </>
              )}
              {!UserService.isCoach() ? (
                <>
                  
                </>
              ) : (
                <>
                  <Route path="/dashboard" element={<CoachDashboard />}/>
                  <Route path="*" element={<Navigate to="/dashboard" />} />
                </>
              )}
              {!UserService.isManager() ? (
                <>
                  
                </>
              ) : (
                <>
                  <Route path="/dashboard" element={<ManagerDashboard />}/>
                  <Route path="*" element={<Navigate to="/dashboard" />} />
                </>
              )}
            </Route>
          </Routes>
        </div>
      </div>
      <div
        className={`content ${
          !UserService.isAuthenticated() ? "w-full" : "w-full"
        }`}
      >
      </div>
    </BrowserRouter>
  );
}

export default App;
