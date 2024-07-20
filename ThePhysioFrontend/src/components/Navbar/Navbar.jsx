import React, { useState, useRef, useEffect } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isReportsOpen, setIsReportsOpen] = useState(false);

  const registerMenuRef = useRef(null);
  const reportsMenuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleRegisterMenu = () => {
    setIsRegisterOpen(!isRegisterOpen);
  };

  const toggleReportsMenu = () => {
    setIsReportsOpen(!isReportsOpen);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (registerMenuRef.current && !registerMenuRef.current.contains(event.target)) {
        setIsRegisterOpen(false);
      }
      if (reportsMenuRef.current && !reportsMenuRef.current.contains(event.target)) {
        setIsReportsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-[#051B40] text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-2">
        <div className="flex items-center">
          <img src="src/assets/thephysio.jpg" alt="Logo" className="w-12 h-12" />
          <span className="ml-2 text-xl font-bold">The Physio</span>
        </div>
        <nav className="hidden md:flex space-x-12 ml-auto">
          <div className="relative" ref={registerMenuRef}>
            <button onClick={toggleRegisterMenu} className="hover:text-gray-300">
              Register
            </button>
            {isRegisterOpen && (
              <div className="absolute top-8 left-0 bg-[#051B40] text-white shadow-md p-4 rounded-md">
                <Link to="/register-physiotherapist" className="block py-2 hover:text-gray-300">
                  New Physiotherapist
                </Link>
                <Link to="/register-receptionist" className="block py-2 hover:text-gray-300">
                  New Receptionist
                </Link>
                <Link to="/register-manager" className="block py-2 hover:text-gray-300">
                  New Gym Manager
                </Link>
                <Link to="/register-coach" className="block py-2 hover:text-gray-300">
                  New Gym Coach
                </Link>
                <Link to="/register-admin" className="block py-2 hover:text-gray-300">
                  New Admin
                </Link>
              </div>
            )}
          </div>
          <div className="relative" ref={reportsMenuRef}>
            <button onClick={toggleReportsMenu} className="hover:text-gray-300">
              Reports
            </button>
            {isReportsOpen && (
              <div className="absolute top-8 left-0 bg-[#051B40] text-white shadow-md p-4 rounded-md">
                <Link to="/patient-visit-report" className="block py-2 hover:text-gray-300">
                  Patient Visit Report
                </Link>
                <Link to="/financial-report" className="block py-2 hover:text-gray-300">
                  Financial Report
                </Link>
                <Link to="/membership-report" className="block py-2 hover:text-gray-300">
                  Membership Report
                </Link>
                <Link to="/class-attendance-report" className="block py-2 hover:text-gray-300">
                  Class Attendance Report
                </Link>
                <Link to="/customer-feedback-report" className="block py-2 hover:text-gray-300">
                  Customer Feedback Report
                </Link>
                <Link to="/operational-efficiency-report" className="block py-2 hover:text-gray-300">
                  Operational Efficiency Report
                </Link>
              </div>
            )}
          </div>
          <Link to="/schedules" className="hover:text-gray-300">
            Schedules
          </Link>
          <a href="/video-Advertisements" className="hover:text-gray-300">
            Advertisements
          </a>
          <a href="/view-reviews" className="hover:text-gray-300">
            Reviews
          </a>
          <a href="/login" className="hover:text-gray-300">
            Login/Logout
          </a>
        </nav>
        <div className="flex items-center space-x-4 md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-[#051B40] text-white p-2 flex justify-end">
          <div className="flex flex-col items-end">
            <div className="relative" ref={registerMenuRef}>
              <button onClick={toggleRegisterMenu} className="hover:text-gray-300 py-2">
                Register
              </button>
              {isRegisterOpen && (
                <div className="bg-[#051B40] text-white p-4 rounded-md shadow-md">
                  <Link to="/register-physiotherapist" className="block py-2 hover:text-gray-300">
                    New Physiotherapist
                  </Link>
                  <Link to="/register-receptionist" className="block py-2 hover:text-gray-300">
                    New Receptionist
                  </Link>
                  <Link to="/register-manager" className="block py-2 hover:text-gray-300">
                    New Gym Manager
                  </Link>
                  <Link to="/register-coach" className="block py-2 hover:text-gray-300">
                    New Gym Coach
                  </Link>
                  <Link to="/register-admin" className="block py-2 hover:text-gray-300">
                    New Admin
                  </Link>
                </div>
              )}
            </div>
            <div className="relative" ref={reportsMenuRef}>
              <button onClick={toggleReportsMenu} className="block py-2 hover:text-gray-300">
                Reports
              </button>
              {isReportsOpen && (
                <div className="bg-[#051B40] text-white p-4 rounded-md shadow-md">
                  <Link to="/patient-visit-report" className="block py-2 hover:text-gray-300">
                    Patient Visit Report
                  </Link>
                  <Link to="/financial-report" className="block py-2 hover:text-gray-300">
                    Financial Report
                  </Link>
                  <Link to="/membership-report" className="block py-2 hover:text-gray-300">
                    Membership Report
                  </Link>
                  <Link to="/class-attendance-report" className="block py-2 hover:text-gray-300">
                    Class Attendance Report
                  </Link>
                  <Link to="/customer-feedback-report" className="block py-2 hover:text-gray-300">
                    Customer Feedback Report
                  </Link>
                  <Link to="/operational-efficiency-report" className="block py-2 hover:text-gray-300">
                    Operational Efficiency Report
                  </Link>
                </div>
              )}
            </div>
            <Link to="/schedules" className="block py-2 hover:text-gray-300">
              Schedules
            </Link>
            <a href="/video-Advertisements" className="block py-2 hover:text-gray-300">
              Advertisements
            </a>
            <a href="/view-reviews" className="block py-2 hover:text-gray-300">
              Reviews
            </a>
            <a href="/login" className="block py-2 hover:text-gray-300">
              Logout
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
