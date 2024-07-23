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

import PateintDashboard from './components/userpage/User/PateintDashboard';
import PhysioDashboard from './components/userpage/Physio/PhysioDashboard';
import RecepDashboard from './components/userpage/Receptionist/RecepDashboard';
import GymcoachDashboard from './components/userpage/GymCoach/GymcoachDashboard';
import GymmanagerDashboard from './components/userpage/GymManager/GymmanagerDashboard';
import AdminDashboard from './components/userpage/ADMIN/AdminDashboard';
import CustomerDashboard from './components/userpage/User/PateintDashboard';

import Appoinments from './components/userpage/User/appoinments';
import PhysioCards from './components/userpage/User/physioCards';
import Reviews from './components/userpage/User/reviews';
import Reservations from './components/userpage/User/reservations';
import Makeappoinment from './components/userpage/User/makeappoinment';
import Reportview from './components/userpage/User/reportview';
import Success from './components/userpage/User/success';
import UserReviews from './components/userpage/User/userReviews';
import Calendar from './components/userpage/User/calender';
import TimeSlots from './components/userpage/User/timeSlots';

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        {UserService.isAuthenticated() && (
          <div className="w-1/5">
            <Sidebar />
          </div>
        )}
        <div className={`content ${UserService.isAuthenticated() ? 'w-4/5' : 'w-full'}`}>
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

                  <Route path="/admindash" element={<AdminDashboard/>} />
                  {/* <Route path="/admin/user-management" element={<Navigate to="/profile" />} />
                  <Route path="/update-user/:userId" element={<Navigate to="/profile" />} /> */}
                </>
              )}
              {!UserService.isCustomer() ? (
                <>
                  <Route path="/profile" element={<Home />} />
                  </>
              ) : (
                <>
                  <Route path="/dashboard" element={<CustomerDashboard />} />
                  <Route path="/appoinments" element={<Appoinments />} />
                  <Route path="/physiocard" element={<PhysioCards />} />
                  <Route path="/reviews" element={<Reviews />} />
                  <Route path="/reservations" element={<Reservations />} />
                  <Route path="/makeappoinment" element={<Makeappoinment />} />
                  <Route path="/personalreportsview" element={<Reportview />} />
                  <Route path="/success" element={<Success />} />
                  <Route path="/userreviews" element={<UserReviews />} />
                  <Route path="/calendar" element={<Calendar />} />
                  <Route path="/timeslots" element={<TimeSlots />} />
                  {/* <Route path="/admin/user-management" element={<Navigate to="/profile" />} />
                  <Route path="/update-user/:userId" element={<Navigate to="/profile" />} /> */}
                </>
              )}
              {!UserService.isPhysio() ? (
                <>
                  <Route path="/profile" element={<Home />} />
                  </>
              ) : (
                <>
                  <Route path="/physiodash" element={<PhysioDashboard />} />
                  {/* <Route path="/admin/user-management" element={<Navigate to="/profile" />} />
                  <Route path="/update-user/:userId" element={<Navigate to="/profile" />} />
                  <Route path="/repairvehicles" element={<RepairVehicles />} /> */}
                </>
              )}
              {!UserService.isReceptionist() ? (
                <>
                  <Route path="/recepdash" element={<RecepDashboard />} />
                  <Route path="/profileView" element={<Profile />} />

                  <Route path="/vehiclemanagement" element={<Navigate to="/dashboard" />} />
                  <Route path="/bookingmanagement" element={<Navigate to="/dashboard" />} />
                  <Route path="/billing" element={<Navigate to="/dashboard" />} />
                  <Route path="/payments" element={<Navigate to="/dashboard" />} />
                </>
              ) : (
                <>
                  <Route path="/recepdash" element={<RecepDashboard />}/>
                  <Route path="/profileView" element={<Profile />} />

                  {/* <Route path="/jobmanagement" element={<JobManagement />} />
                  <Route path="/jobcreate" element={<JobCreate />} />
                  <Route path="/jobdetails" element={<JobDetails />} />
                  <Route path="/vehiclemanagement"  element={<VehicleManagement />} />
                  <Route path="/editvehicle" element={<EditVehicle />} />
                  <Route path="/bookingmanagement" element={<BookingManagement />} />
                  <Route path="/billing" element={<Billing />} />
                  <Route path="/payments" element={<Payments />} />
                  <Route path="/addvehicle" element={<AddVehicle />} />
                  <Route path="*" element={<Navigate to="/dashboard" />} /> */}
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
