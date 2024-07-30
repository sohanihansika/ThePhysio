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
import EditProfile from './components/userpage/EditProfile';






import Navbar from "./components/common/Navbar";

import AdminDashboard from './components/userpage/Admin/AdminDashboard';
import UserAccounts from './components/userpage/Admin/UserAccounts';
import StaffAccounts from './components/userpage/Admin/StaffAccounts';
import StaffUpdate from './components/userpage/Admin/StaffUpdate';

import OwnerDashboard from './components/userpage/Owner/OwnerDashboard';
import EmpUpdate from './components/userpage/Owner/EmpUpdate';
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
import UserDashboardLink from './components/userpage/Admin/UserDashboardLink';
import NaviBar from './components/userpage/User/GymMember/NaviBar';
import Membership from './components/userpage/User/GymMember/Membership';
import Halfyear from './components/userpage/User/GymMember/HalfYear';
import FullYear from './components/userpage/User/GymMember/FullYear';
import Subscription from './components/userpage/User/GymMember/Subscrpition';
import PlanPayments from './components/userpage/User/GymMember/PlanPayments';

import Doctors from './components/userpage/Receptionist/Doctors';
import Calender from './components/userpage/Receptionist/Calender';
import Schedule from './components/userpage/Receptionist/Schedule';
import PastSchedule from './components/userpage/Receptionist/PastSchedule';
import FutureSchedule from './components/userpage/Receptionist/FutureSchedule';
import Calender1 from './components/userpage/Receptionist/Calender1';
import Payments from './components/userpage/Receptionist/Payments';
import Doctors1 from './components/userpage/Receptionist/Doctors1';
import AddAppointment from './components/userpage/Receptionist/AddAppointment';
import Payments1 from './components/userpage/Receptionist/Payments1';
import UnPaid from './components/userpage/Receptionist/UnPaid';






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
                <Route path="/profile" element={<Profile />} />
                <Route path="/editProfile/:userId" element={<EditProfile />} />
                <Route path="*" element={<Navigate to="/" />} />
              </>
            )}

            <Route element={<ProtectedRoute />}>
              <Route path="/login" element={<Navigate to="/" />} />
              <Route path="/register" element={<Navigate to="/" />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/editProfile/:userId" element={<EditProfile />} />

              {!UserService.isAdmin() ? (
                <>
                  <Route path="/staffaccounts" element={<StaffAccounts />} />
                  <Route path="/staffUpdate/:userId" element={<StaffUpdate />} />
                  
                </>
              ) : (
                <>
                  <Route path="/dashboard" element={<AdminDashboard />} />
                  <Route path="/staffaccounts" element={<StaffAccounts />} />
                  <Route path="/useraccounts" element={<UserAccounts />} />
                  <Route path="/users" element={<UserDashboardLink />} />
                  <Route path="/staffUpdate/:userId" element={<StaffUpdate />} />




                  <Route path="*" element={<Navigate to="/dashboard" />} />
                </>
              )}
              {!UserService.isOwner() ? (
                <>
                  {/* <Route path="/empRegister" element={<AddEditEmployee />} /> */}
                  <Route path="/createAccount" element={<CreateAccount />} />
                  <Route path="/empUpdate/:userId" element={<EmpUpdate />} />
                  <Route path="/staff" element={<Staff />} />

                </>
              ) : (
                <>
                  <Route path="/dashboard" element={<OwnerDashboard />} />
                  <Route path="/empUpdate/:userId" element={<EmpUpdate />} />
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
                  <Route path="/gymNavibar" element={<NaviBar />} />
                  <Route path="/gymMembership" element={<Membership />} /> 
                  <Route path="/halfyear" element={<Halfyear />} />
                  <Route path="/fullyear" element={<FullYear />} />
                  <Route path="/subscription" element={<Subscription />} />
                  <Route path="/planPayments" element={<PlanPayments />} />
                                    
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
                  <Route path="/doctors" element={<Doctors />}/>
                  <Route path="/calender" element={<Calender />}/>
                  <Route path="/schedule" element={<Schedule />}/>
                  <Route path="/pastSchedule" element={<PastSchedule />}/>
                  <Route path="/futureSchedule" element={<FutureSchedule />}/>
                  <Route path="/calender1" element={<Calender1 />}/>
                  <Route path="/payments" element={<Payments />}/>
                  <Route path="/doctors1" element={<Doctors1 />}/>
                  <Route path="/appointment" element={<AddAppointment />}/>
                  <Route path="/payments1" element={<Payments1 />}/>
                  <Route path="/unpaid" element={<UnPaid />} />
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
