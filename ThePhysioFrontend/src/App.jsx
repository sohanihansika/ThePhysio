// App.jsx

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/auth/login';
import Navbar from './components/Navbar/Navbar';
import AdminVideo from "./pages/admin/uploadvideos/videos";
import patientReviews from "./pages/patient/reviews";




function App() {
  return (
    <Router>
      <div>

        <Routes>

          <Route path="/login" element={<Login />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/admin-video" element={<AdminVideo />} />
          <Route path="/patient-reviews" element={<patientReviews />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
