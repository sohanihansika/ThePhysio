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
import CreateAccount from './components/userpage/Owner/CreateAccount';
import Staff from './components/userpage/Owner/Staff';

import PhysioDashboard from './components/userpage/Physio/PhysioDashboard';
import GenerateReports from './components/userpage/Physio/GenerateReports';
import Leaves from './components/userpage/Physio/Leaves';
import MakeAppoinmemt from './components/userpage/Physio/MakeAppoinmemt';
import PatientReports from './components/userpage/Physio/PatientReports';
import ReservationSchedule from './components/userpage/Physio/ReservationSchudule';
import Reviews from './components/userpage/Physio/Reviews';
import UploadVideos from './components/userpage/Physio/UploadVideos';

import UserDashboard from './components/userpage/User/UserDashboard';

import ManagerDashboard from './components/userpage/Manager/ManagerDashboard';

import CoachDashboard from './components/userpage/Coach/CoachDashboard';

import ReceptionistDashboard from './components/userpage/Receptionist/ReceptionistDashboard';


import Appoinments from './components/userpage/User/appoinments';
import PhysioCards from './components/userpage/User/physioCards';
import Reviewss from './components/userpage/User/reviews';
import Reservations from './components/userpage/User/reservations';
import Makeappoinment from './components/userpage/User/makeappoinment';
import Reportview from './components/userpage/User/reportview';
import Success from './components/userpage/User/success';
import UserReviews from './components/userpage/User/userReviews';
import Calendar from './components/userpage/User/calender';
import TimeSlots from './components/userpage/User/timeSlots';
import AddAppoinmet from './components/userpage/User/AddAppoinment';
import SelectPayment from './components/userpage/User/SelectPayment';
import paymentpopup from './components/userpage/User/paymentpopup';









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
                  <Route path="/createAccount" element={<CreateAccount />} />
                  <Route path="/staff" element={<Staff />} />

                </>
              ) : (
                <>
                  <Route path="/dashboard" element={<OwnerDashboard />} />
                  <Route path="/update-user/:userId" element={<AddEditEmployee />} />
                  <Route path="/createAccount" element={<CreateAccount />} />
                  <Route path="/staff" element={<Staff />} />
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
                  <Route path="/appoinments" element={<Appoinments />} />
                  <Route path="/physiocard" element={<PhysioCards />} />
                  <Route path="/reviews" element={<Reviewss />} />
                  <Route path="/reservations" element={<Reservations />} />
                  <Route path="/makeappoinment" element={<Makeappoinment />} />
                  <Route path="/personalreportsview" element={<Reportview />} />
                  <Route path="/success" element={<Success />} />
                  <Route path="/userreviews" element={<UserReviews />} />
                  <Route path="/calendar" element={<Calendar />} />
                  <Route path="/timeslots" element={<TimeSlots />} />
                  <Route path="/addappoinment" element={<AddAppoinmet />} />
                  <Route path="/selectpayment" element={<SelectPayment />} />
                  <Route path="/paymentpopup" element={<paymentpopup />} />                  
                </>
              )}
              {!UserService.isPhysio() ? (
                <>
                  <Route path='/generateReports' element={<GenerateReports/>} />
                  <Route path='/leaves' element={<Leaves/>} />
                  <Route path='/makeAppoinment' element={<MakeAppoinmemt/>} />
                  <Route path='/patientReports' element={<PatientReports/>} />
                  <Route path='/reservationSchedule' element={<ReservationSchedule/>} />
                  
                </>
              ) : (
                <>
                  <Route path="/dashboard" element={<PhysioDashboard />} />
                  <Route path="/admin/user-management" element={<Navigate to="/profile" />} />
                  <Route path="/update-user/:userId" element={<Navigate to="/profile" />} />
                  <Route path='/generateReports' element={<GenerateReports/>} />
                  <Route path='/leaves' element={<Leaves/>} />
                  <Route path='/makeAppoinment' element={<MakeAppoinmemt/>} />
                  <Route path='/patientReports' element={<PatientReports/>} />
                  <Route path='/reservationSchedule' element={<ReservationSchedule/>} />
                  <Route path='/reviews' element={<Reviews/>} />
                  <Route path='/uploadVideos' element={<UploadVideos/>} />
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
