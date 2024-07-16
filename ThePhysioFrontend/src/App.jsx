// App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/auth/login';
import Navbar from './components/Navbar/Navbar';
import AdminVideo from './pages/admin/uploadvideos/videos';
import PatientReviews from './pages/patient/reviews';
import ViewReviews from './pages/admin/viewreviews';

function App() {
  return (
    <Router>
      <div>
        <Navbar /> {/* Assuming you want the Navbar to be present on all pages */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/admin-video" element={<AdminVideo />} />
          <Route path="/patient-reviews" element={<PatientReviews />} />
          <Route path="/view-reviews" element={<ViewReviews />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
