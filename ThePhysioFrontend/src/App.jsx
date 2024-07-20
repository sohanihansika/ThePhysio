// App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './pages/auth/login';
import Navbar from './components/Navbar/Navbar';
import AdminVideo from './pages/admin/uploadvideos/videos';
import PatientReviews from './pages/patient/reviews';
import Reviews from './pages/admin/reviews';

import Register from './pages/owner/registerphysiotherapist';
import Registerr from './pages/owner/registerreceptionist';
import Registerrr from './pages/owner/registermanager';
import Registerrrr from './pages/owner/registercoach';
import Registerrrrr from './pages/owner/registeradmin';

import Schedule from './pages/owner/schedules'

import PatientVisitReport from './pages/owner/reports/patientVisitReport';
import FinancialReport from './pages/owner/reports/financialReport';
import MembershipReport from './pages/owner/reports/membershipReport';
import ClassAttendanceReport from './pages/owner/reports/classAttendanceReport';
import CustomerFeedbackReport from './pages/owner/reports/customerFeedbackReport';
import OperationalEfficiencyReport from './pages/owner/reports/operationalEfficiencyReport';

import VideoAdvertisements from './pages/owner/videoAdvertisements';

import ViewReviews from './pages/owner/viewReviews';

function App() {
  return (
    <Router>
      <div>
        <Navbar /> {/* Assuming you want the Navbar to be present on all pages */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/admin-video" element={<AdminVideo />} />
          <Route path="/patient-reviews" element={<PatientReviews />} />
          <Route path="/reviews" element={<Reviews />} />

          <Route path="/register-physiotherapist" element={<Register />} />
          <Route path="/register-receptionist" element={<Registerr />} />
          <Route path="/register-manager" element={<Registerrr />} />
          <Route path="/register-coach" element={<Registerrrr />} />
          <Route path="/register-admin" element={<Registerrrrr />} />

          <Route path="/schedules" element={<Schedule/>} />

          <Route path="/patient-visit-report" element={<PatientVisitReport />} />
          <Route path="/financial-report" element={<FinancialReport />} />
          <Route path="/membership-report" element={<MembershipReport />} />
          <Route path="/class-attendance-report" element={<ClassAttendanceReport />} />
          <Route path="/customer-feedback-report" element={<CustomerFeedbackReport />} />
          <Route path="/operational-efficiency-report" element={<OperationalEfficiencyReport />} />

          <Route path="/video-Advertisements" element={<VideoAdvertisements />} />

          <Route path="/view-reviews" element={<ViewReviews />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;

