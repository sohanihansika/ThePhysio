import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import Landingpage from './components/userpage/Landingpage';
import LoginPage from './components/auth/LoginPage';
import RegistrationPage from './components/auth/RegistrationPage';
import UserService from './components/service/UserService';
import ManagerService from './components/service/ManagerService';
import ProtectedRoute from './components/ProtectedRoute';
import Sidebar from './components/common/Sidebar';
import Home from './components/userpage/Home';
import GymLanding from './components/gym/gymlanding';
import AboutUs from './components/userpage/aboutUs';
import Service from './components/userpage/service';
import Profile from './components/userpage/profile';
import EditProfile from './components/userpage/EditProfile';
import OurTeam from './components/userpage/OurTeam';
import PricingPage from './components/userpage/pricingPage';
import Contactus from './components/userpage/contactus'; 
import Footer from './components/userpage/footer';


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
import ApplyLeave  from './components/userpage/Physio/aaplyLeave';
import MakeAppoinmemt from './components/userpage/Physio/MakeAppoinmemt';
import PatientReports from './components/userpage/Physio/PatientReports';
import ReservationSchedule from './components/userpage/Physio/ReservationSchudule';
// import Reviews from './components/userpage/Physio/Reviews';
import UploadVideos from './components/userpage/Physio/UploadVideos';

import ReadMore_P from './components/userpage/Physio/GymMember/ReadMore_P';
import NaviBar_P from './components/userpage/Physio/GymMember/NaviBar';
import Membership_P from './components/userpage/Physio/GymMember/Membership';
import Halfyear_P from './components/userpage/Physio/GymMember/HalfYear';
import FullYear_P from './components/userpage/Physio/GymMember/FullYear';
import Subscription_P from './components/userpage/Physio/GymMember/Subscrpition';
import PlanPayments_P from './components/userpage/Physio/GymMember/PlanPayments';
import SubscriptionForm_P from './components/userpage/Physio/GymMember/SubscriptionForm';
import Payment2_P from './components/userpage/Physio/GymMember/Payment2';
import PopUp1_P from './components/userpage/Physio/GymMember/PopUp1';
import ReadMore1_P from './components/userpage/Physio/GymMember/Readmore1';
import ReadMore2_P from './components/userpage/Physio/GymMember/ReadMore2';
import ReadMore3_P from './components/userpage/Physio/GymMember/ReadMore3';
import ReadMore4_P from './components/userpage/Physio/GymMember/ReadMore4';
import ReadMore5_P from './components/userpage/Physio/GymMember/ReadMore5';
import LeaveHandle from './components/userpage/Owner/LeaveHandle';

import UserDashboard from './components/userpage/User/UserDashboard';

import ManagerDashboard from './components/userpage/Manager/ManagerDashboard';

import CoachDashboard from './components/userpage/Coach/CoachDashboard';
import GymCoachAppointment from './components/userpage/Coach/GymCoachAppointment';
import SubscriptionPlans from './components/userpage/Coach/SubscriptionPlans';
import GymPastList from './components/userpage/Coach/GymPastList';
import GymFutureList from './components/userpage/Coach/GymFutureList';

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
import AppoinmentDetails from './components/userpage/User/apponmentDetails';
import SelectPayment from './components/userpage/User/SelectPayment';
import Paymentpopup from './components/userpage/User/paymentpopup';
import NotAvilavle from './components/userpage/User/notavilPopup';
import ReservedPopup from './components/userpage/User/reservedPopup';
import BookingUpdate from './components/userpage/User/Bookingupdate';
import UserDashboardLink from './components/userpage/Admin/UserDashboardLink';
import PrescriptionForm from './components/userpage/User/PrescriptionForm';
import Popup from './components/userpage/User/Popup';
import PhysioProfile from './components/userpage/User/PhysioProfile';

import ReadMore from './components/userpage/User/GymMember/ReadMore';
import NaviBar from './components/userpage/User/GymMember/NaviBar';
import Membership from './components/userpage/User/GymMember/Membership';
import Halfyear from './components/userpage/User/GymMember/HalfYear';
import FullYear from './components/userpage/User/GymMember/FullYear';
import Subscription from './components/userpage/User/GymMember/Subscrpition';
import PlanPayments from './components/userpage/User/GymMember/PlanPayments';
import SubscriptionForm from './components/userpage/User/GymMember/SubscriptionForm';
import Payment2 from './components/userpage/User/GymMember/Payment2';
import PopUp1 from './components/userpage/User/GymMember/PopUp1';
import MemberPop from './components/userpage/User/GymMember/MemberPop';
import ViewCoach from './components/userpage/User/GymMember/ViewCoach';
import ReadMore1 from './components/userpage/User/GymMember/Readmore1';
import ReadMore2 from './components/userpage/User/GymMember/ReadMore2';
import ReadMore3 from './components/userpage/User/GymMember/ReadMore3';
import ReadMore4 from './components/userpage/User/GymMember/ReadMore4';
import ReadMore5 from './components/userpage/User/GymMember/ReadMore5';
import IssuePrescription from './components/userpage/Physio/IssuePrescription';



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
import TimeSlot from './components/userpage/Receptionist/TimeSlots';
import TimeSlot1 from './components/userpage/Receptionist/TimeSlots1';
import Appointment1 from './components/userpage/Receptionist/Appointment1';
import PopUp2 from './components/userpage/Receptionist/PopUp2';
import PopUp3 from './components/userpage/Receptionist/PopUp3';
import AdVideo from './components/userpage/Receptionist/AdVideo';
import ReschedulePopup from './components/userpage/Receptionist/reschedulePopup';


import Schedules from './components/userpage/Owner/schedules';
import Advertisements from './components/userpage/Owner/videoAdvertisements';
import OwnerReviews from './components/userpage/Owner/viewReviews';
import FinancialReport from './components/userpage/Owner/reports/financialReport';
import MembershipReport from './components/userpage/Owner/reports/membershipReoprt';
import CustomerFeedbackReport from './components/userpage/Owner/reports/customerFeedbackReport';
import OwnerReports from './components/userpage/Owner/ownerReports';
import Leavepopup from './components/userpage/Owner/leavepopup';
import Videoconfirm from './components/userpage/Owner/videoconfirm'


import ViewAppointment from './components/userpage/Manager/ViewAppointment';
import PastList from './components/userpage/Manager/PastList';
import FutureList from './components/userpage/Manager/FutureList';
import Calender2 from './components/userpage/Manager/Calender2';
import TimeSlots2 from './components/userpage/Manager/TimeSlots2';
import Appointment2 from './components/userpage/Manager/Appointment2';
// import ManagerSchedules from './components/userpage/Manager/schedules';
import Attendance from './components/userpage/Manager/attendance';
import AdvertisementView from './components/userpage/Manager/viewAdvertisements';
// import ViewReview from './components/userpage/Manager/viewReview';
import CreatePackage from './components/userpage/Manager/CreatePackage';
import Packages from './components/userpage/Manager/Packages';
import EditPackage from './components/userpage/Manager/EditPackage';
import Subscribers from './components/userpage/Manager/Subscribers';







function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const handleSidebarCollapse = (isCollapsed) => {
    setIsSidebarCollapsed(isCollapsed);
  };
  return (
    <BrowserRouter>
      <div className="App flex">
        {UserService.isAuthenticated() && (
          <Sidebar onCollapse={handleSidebarCollapse} />
        )}
        <div
  className={`content transition-all duration-300`}
  style={{ 
    ...(UserService.isAuthenticated() 
      ? isSidebarCollapsed 
        ? { width: '97%', marginLeft: '3%' }
        : { width: '83.7%', marginLeft: '16.3%' }
      : { width: '100%', marginLeft: '0%' })
  }}
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
                  <Route path="/ViewReviews" element={<OwnerReviews />} />
                  <Route path="/customerFeedbackReport" element={<CustomerFeedbackReport />} />
                  <Route path="/financialReport" element={<FinancialReport />} />
                  <Route path="/membershipReport" element={<MembershipReport />} />
                  <Route path="/ownerReports" element={<OwnerReports />} />
                  <Route path="/video-advertisements" element={<Advertisements />} />
                  <Route path="/schedule" element={<Schedule />}/>



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
                  <Route path="/schedules" element={<Schedules />} />
                  
                </>
              ) : (
                <>
                  <Route path="/dashboard" element={<OwnerDashboard />} />
                  <Route path="/empUpdate/:userId" element={<EmpUpdate />} />
                  <Route path="/createAccount" element={<CreateAccount />} />
                  <Route path="/staff" element={<Staff />} />
                  <Route path="*" element={<Navigate to="/dashboard" />} />
                  <Route path="/schedules" element={<Schedules />} />
                  <Route path="/video-advertisements" element={<Advertisements />} />
                  <Route path="/ViewReviews" element={<OwnerReviews />} />
                  <Route path="/customerFeedbackReport" element={<CustomerFeedbackReport />} />
                  <Route path="/financialReport" element={<FinancialReport />} />
                  <Route path="/membershipReport" element={<MembershipReport />} />
                  <Route path="/ownerReports" element={<OwnerReports />} />
                  <Route path="/leavehandle" element={<LeaveHandle />} />
                  <Route path="/leavepopup" element={<Leavepopup />} />
                  <Route path="/videoconfirm" element={<Videoconfirm />} />

                  

                  

                  

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
                  <Route path="/appoinmentdetails" element={<AppoinmentDetails />} />
                  <Route path="/selectpayment" element={<SelectPayment />} />
                  <Route path="/paymentpopup" element={<Paymentpopup />} />
                  <Route path="/gymNavibar" element={<NaviBar />} />
                  <Route path="/gymMembership" element={<Membership />} /> 
                  <Route path="/halfyear" element={<Halfyear />} />
                  <Route path="/fullyear" element={<FullYear />} />
                  <Route path="/subscription" element={<Subscription />} />
                  <Route path="/planPayments" element={<PlanPayments />} />
                  <Route path="/prescriptionForm" element={<PrescriptionForm />} />
                  <Route path="/schedule" element={<Schedule />}/>
                  <Route path="/popup" element={<Popup />}/>
                  <Route path="/physioprofile" element={<PhysioProfile />}/>
                  <Route path="/readmore" element={<ReadMore />}/>
                  <Route path="/subscriptionForm" element={<SubscriptionForm />}/>
                  <Route path="/payment2" element={<Payment2 />}/>  
                  <Route path="/bookingUpdate" element={<BookingUpdate />}/>
                  <Route path="/popup1" element={<PopUp1 />}/>
                  <Route path="/readmore1" element={<ReadMore1 />}/>
                  <Route path="/readmore2" element={<ReadMore2 />}/>
                  <Route path="/readmore3" element={<ReadMore3 />}/>
                  <Route path="/readmore4" element={<ReadMore4 />}/>
                  <Route path="/readmore5" element={<ReadMore5 />}/>              
                  <Route path="/memberpop" element={<MemberPop />}/>
                  <Route path="/viewCoach" element={<ViewCoach />}/>
                  <Route path="/notavilPopup" element={<NotAvilavle />} />
                  <Route path="/reserved" element={<ReservedPopup />} />
                  <Route path="/reschedulePopup" element={<ReschedulePopup />} />





                                    
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
                  <Route path='/applyLeave' element={<ApplyLeave/>} />
                  <Route path='/makeAppoinment' element={<MakeAppoinmemt/>} />
                  <Route path='/patientReports' element={<PatientReports/>} />
                  <Route path="/ViewReviews" element={<OwnerReviews />} />

                  <Route path='/uploadVideos' element={<UploadVideos/>} />
                  <Route path="*" element={<Navigate to="/dashboard" />} />
                  <Route path="/appoinments" element={<Appoinments />} />
                  <Route path="/schedule" element={<Schedule />}/>
                  <Route path="/ViewReviews" element={<OwnerReviews />} />
                  <Route path="/issuePrescription" element={<IssuePrescription />} />
                  {/* <Route path="/video-Advertisements" element={<Advertisements />} />   */}
                  <Route path="/advertisement-view" element={<AdvertisementView />}/>

 
                                  



                  <Route path="/gymNavibar" element={<NaviBar_P />} />
                  <Route path="/gymMembership" element={<Membership_P />} /> 
                  <Route path="/halfyear" element={<Halfyear_P />} />
                  <Route path="/fullyear" element={<FullYear_P />} />
                  <Route path="/subscription" element={<Subscription_P />} />
                  <Route path="/planPayments" element={<PlanPayments_P />} />
                  <Route path="/readmore" element={<ReadMore_P />}/>
                  <Route path="/subscriptionForm" element={<SubscriptionForm_P />}/>
                  <Route path="/payment2" element={<Payment2_P />}/>
                  <Route path="/popup1" element={<PopUp1_P />}/>
                  <Route path="/readmore1" element={<ReadMore1_P />}/>
                  <Route path="/readmore2" element={<ReadMore2_P />}/>
                  <Route path="/readmore3" element={<ReadMore3_P />}/>
                  <Route path="/readmore4" element={<ReadMore4_P />}/>
                  <Route path="/readmore5" element={<ReadMore5_P />}/>


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
                  <Route path="/timeSlots" element={<TimeSlot />} />
                  <Route path="/timeSlots1" element={<TimeSlot1 />} />
                  <Route path="/appointment1" element={<Appointment1 />} />
                  <Route path="/popup2" element={<PopUp2 />} />
                  <Route path="/popup3" element={<PopUp3 />} />
                  <Route path="/adVideo" element={<AdVideo />} />
                  <Route path="*" element={<Navigate to="/dashboard" />} />
                  <Route path="/reschedulePopup" element={<ReschedulePopup />} />
                  <Route path="/calendar" element={<Calendar />} />
                  <Route path="/timeslots" element={<TimeSlots />} />
                  <Route path="/addappoinment" element={<AddAppoinmet />} />
                  <Route path="/selectpayment" element={<SelectPayment />} />
                  <Route path="/paymentpopup" element={<paymentpopup />} />
                  <Route path="/advertisement-view" element={<AdvertisementView />}/>

                </>
              )}
              {!UserService.isCoach() ? (
                <>
                  
                </>
              ) : (
                <>
                  <Route path="/dashboard" element={<CoachDashboard />}/>
                  <Route path="/coachAppointment" element={<GymCoachAppointment />} />
                  {/* <Route path="/video-advertisements" element={<Advertisements />} /> */}
                  <Route path="/ViewReviews" element={<OwnerReviews />} />
                  <Route path="/subscriptionPlans" element={<SubscriptionPlans />} />
                  <Route path="/pastListC" element={<GymPastList />} />
                  <Route path="/futureListC" element={<GymFutureList />} />
                  <Route path="*" element={<Navigate to="/dashboard" />} />
                  <Route path="/advertisement-view" element={<AdvertisementView />}/>

                </>
              )}
              {!UserService.isManager() ? (
                <>
                  
                </>
              ) : (
                <>
                  <Route path="/dashboard" element={<ManagerDashboard />}/>
                  <Route path="/viewAppointment" element={<ViewAppointment />}/>
                  <Route path="/pastList" element={<PastList />}/>
                  <Route path="/futureList" element={<FutureList />}/>
                  <Route path="/calender2" element={<Calender2 />}/>
                  <Route path="/timeSlots2" element={<TimeSlots2 />}/>
                  <Route path="/appointment2" element={<Appointment2 />}/>
                  <Route path="/attendance" element={<Attendance />}/>
                  <Route path="/advertisement-view" element={<AdvertisementView />}/>
                  <Route path="/createPackage" element={<CreatePackage />}/>
                  <Route path="/packages" element={<Packages />}/>
                  <Route path="/editPackage/:packageId" element={<EditPackage />}/>
                  <Route path="/subscribers" element={<Subscribers />}/>
                  <Route path="/ViewReviews" element={<OwnerReviews />} />
                  <Route path="/customerFeedbackReport" element={<CustomerFeedbackReport />} />
                  <Route path="/financialReport" element={<FinancialReport />} />
                  <Route path="/membershipReport" element={<MembershipReport />} />
                  <Route path="/ownerReports" element={<OwnerReports />} />
                  <Route path="/video-advertisements" element={<Advertisements />} />
                  <Route path="/schedule" element={<Schedule />}/>
                  
                  
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
