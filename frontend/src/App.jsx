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

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        {UserService.isAuthenticated() && (
          <div className="w-1/6">
            <Sidebar />
          </div>
        )}
        <div className={`content ${UserService.isAuthenticated() ? 'w-5/6' : 'w-full'}`}>
          <Routes>
            {!UserService.isAuthenticated() && (
              <>
                <Route path="/" element={<Landingpage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegistrationPage />} />
                <Route path='/gymlanding' element={<GymLanding />} />
                <Route path='/AboutUs' element={<AboutUs />} />
                <Route path='/service' element={<Service />} />
              </>
            )}

            <Route element={<ProtectedRoute />}>
              <Route path="/login" element={<Navigate to="/" />} />
              <Route path="/register" element={<Navigate to="/" />} />

              {!UserService.isAdmin() ? (
                <>
                  <Route path="/profile" element={<Home />} />
                  <Route path="/update-user/:userId" element={<Navigate to="/profile" />} />
                </>
              ) : (
                <>
                  <Route path="/profile" element={<Home />} />
                  <Route path="/admin/user-management" element={<Navigate to="/profile" />} />
                  <Route path="/update-user/:userId" element={<Navigate to="/profile" />} />
                </>
              )}
            </Route>

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
