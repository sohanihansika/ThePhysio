// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import '../CSS/NavBar.css';
// import logo from '../IMG/logowithoutback.png';

export default function Navbar({ userRole }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const renderNavLinks = () => {
    if (userRole === 'employee') {
      return (
        <>
          <Link className='nav-item nav-link' to='/employee'>Home</Link>
          <Link className='nav-item nav-link' to='/gym'>GYM</Link>
          <Link className='nav-item nav-link' to='/home'>Users</Link>
        </>
      );
    } else if (userRole === 'physio') {
      return (
        <>
          <Link className='nav-item nav-link' to='/physio'>Home</Link>
          <Link className='nav-item nav-link' to='/gym'>GYM</Link>
          <Link className='nav-item nav-link' to='/physiohome'>Physiotherapists</Link>
        </>
      );
    } 
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#172B59' }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Logo" style={{ width: '80px', height: '50px', marginRight: '10px' }} />
          </a>          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav ms-auto">
              {renderNavLinks()}
            </div>
          </div>
        </div>
      </nav>
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`} id="sidebar">
        <button className="menu-icon" onClick={toggleSidebar}>
          ☰
        </button>
        {isSidebarOpen && (
          <div className="sidebar-menu">
            {renderNavLinks()}
          </div>
        )}
      </div>
    </div>
  );
}
