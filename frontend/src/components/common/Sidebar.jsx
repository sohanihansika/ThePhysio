import React, { useState, useEffect } from 'react';
import UserService from '../service/UserService';
import { FaBars, FaHome,FaPhotoVideo, FaUserTie, FaUsers, FaRegFrown, FaChartLine, FaBullhorn, FaCalendarCheck, FaRegClipboard, FaSignOutAlt } from "react-icons/fa";
import { HiDocumentReport } from "react-icons/hi";
import { VscPreview } from "react-icons/vsc";
import { CgGym } from "react-icons/cg";
import { MdOutlinePayments } from "react-icons/md";
import { CgProfile } from "react-icons/cg";



function Sidebar() {
    const [isAuthenticated, setIsAuthenticated] = useState(UserService.isAuthenticated());
    const [isAdmin, setIsAdmin] = useState(UserService.isAdmin());
    const [isUser, setIsUser] = useState(UserService.isUser());
    const [isReceptionist, setIsReceptionist] = useState(UserService.isReceptionist());
    const [isOwner, setIsOwner] = useState(UserService.isOwner());
    const [isPhysio, setIsPhysio] = useState(UserService.isPhysio());
    const [isManager, setIsManager] = useState(UserService.isManager());
    const [isCoach, setIsCoach] = useState(UserService.isCoach());
    const [profileInfo, setProfileInfo] = useState({});
    const [isCollapsed, setIsCollapsed] = useState(false); // State to manage sidebar collapse

    useEffect(() => {
        fetchProfileInfo();
    }, []);

    const fetchProfileInfo = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await UserService.getYourProfile(token);
            setProfileInfo(response.ourUsers);
        } catch (error) {
            console.error('Error fetching profile information:', error);
        }
    };

    const handleLogout = () => {
        const confirmDelete = window.confirm('Are you sure you want to logout this user?');
        if (confirmDelete) {
            location.href = '/';
            UserService.logout();
            setIsAuthenticated(false);
            setIsAdmin(false);
            setIsUser(false);
            setIsReceptionist(false);
            setIsOwner(false);
            setIsPhysio(false);
            setIsManager(false);
            setIsCoach(false);
        }
    };

    if (!isAuthenticated) {
        return null;
    }

    return (
        <nav
         className={`fixed top-0 left-0 h-full bg-[#172b59] border-r z-10 text-gray-800 ${isCollapsed ? 'w-16' : 'w-64'}`}>
            <div className="flex flex-col h-full">
                <div className='h-16 flex items-center justify-between px-6'>
                    <a href='/dashboard' className={`flex-none ${isCollapsed ? 'hidden' : ''}`}>
                        <img src="./src/assets/logowithoutback.png" width={isCollapsed ? 50 : 140} className="mx-auto mt-12" />
                    </a>
                    <button onClick={() => setIsCollapsed(!isCollapsed)} className="text-white focus:outline-none">
                        <FaBars size={24} color="#ffffff" />
                    </button>
                </div>
                <div className="flex-1 flex flex-col h-full overflow-auto mt-12">
                    <ul className="px-4 text-sm font-medium flex-1">
                        {isAdmin && (
                            <>
                                <li>
                                    <a href="/admindashboard" className="flex items-center gap-x-2 p-2 rounded-lg hover:bg-gray-700 text-white duration-150">
                                        <FaHome />
                                        {!isCollapsed && <p>Dashboard</p>}
                                    </a>
                                </li>
                                <li>
                                    <a href="/staffaccounts" className="flex items-center gap-x-2 p-2 rounded-lg hover:bg-gray-700 text-white duration-150">
                                        <FaUserTie />
                                        {!isCollapsed && <p>Staff Accounts</p>}
                                    </a>
                                </li>
                                <li>
                                    <a href="/useraccounts" className="flex items-center gap-x-2 p-2 rounded-lg hover:bg-gray-700 text-white duration-150">
                                        <FaUsers />
                                        {!isCollapsed && <p>User Accounts</p>}
                                    </a>
                                </li>
                                <li>
                                    <a href="/complaints" className="flex items-center gap-x-2 p-2 rounded-lg hover:bg-gray-700 text-white duration-150">
                                        <FaRegFrown />
                                        {!isCollapsed && <p>Reviews</p>}
                                    </a>
                                </li>
                                <li>
                                    <a href="/reports" className="flex items-center gap-x-2 p-2 rounded-lg hover:bg-gray-700 text-white duration-150">
                                        <FaChartLine />
                                        {!isCollapsed && <p>Reports & Analytics</p>}
                                    </a>
                                </li>
                                <li>
                                    <a href="/dashboard" className="flex items-center gap-x-2 p-2 rounded-lg hover:bg-gray-700 text-white duration-150">
                                        <FaBullhorn />
                                        {!isCollapsed && <p>Site Announcements</p>}
                                    </a>
                                </li>
                            </>
                        )}
                        {isUser && (
                            <>
                                <li>
                                    <a href="/dashboard" className="flex items-center gap-x-2 p-2 rounded-lg hover:bg-gray-700 text-white duration-150">
                                        <FaHome />
                                        {!isCollapsed && <p>Dashboard</p>}
                                    </a>
                                </li>
                                <li>
                                    <a href="/appoinments" className="flex items-center gap-x-2 p-2 rounded-lg hover:bg-gray-700 text-white duration-150">
                                        <FaCalendarCheck />
                                        {!isCollapsed && <p>Make Appointments</p>}
                                    </a>
                                </li>
                                <li>
                                    <a href="/schedule" className="flex items-center gap-x-2 p-2 rounded-lg hover:bg-gray-700 text-white duration-150">
                                        <FaRegClipboard />
                                        {!isCollapsed && <p>Schedule</p>}
                                    </a>
                                </li>
                                <li>
                                    <a href="/physiocard" className="flex items-center gap-x-2 p-2 rounded-lg hover:bg-gray-700 text-white duration-150">
                                        <FaUsers />
                                        {!isCollapsed && <p>Physiotherapists</p>}
                                    </a>
                                </li>
                                <li>
                                    <a href="/personalreportsview" className="flex items-center gap-x-2 p-2 rounded-lg hover:bg-gray-700 text-white duration-150">
                                        <HiDocumentReport />
                                        {!isCollapsed && <p>Reports</p>}
                                    </a>
                                </li>
                                <li>
                                    <a href="/reviews" className="flex items-center gap-x-2 p-2 rounded-lg hover:bg-gray-700 text-white duration-150">
                                        <VscPreview />
                                        {!isCollapsed && <p>Reviews</p>}
                                    </a>
                                </li>
                                <li>
                                    <a href="/gymNavibar" className="flex items-center gap-x-2 p-2 rounded-lg hover:bg-gray-700 text-white duration-150">
                                        <CgGym />
                                        {!isCollapsed && <p>Gym</p>}
                                    </a>

                                    
                                </li>
                            </>
                        )}
                        {isReceptionist && (
                                <>
        
                                <li>
                                    <a href="/dashboard" className="flex items-center gap-x-2 p-2 rounded-lg hover:bg-gray-700 text-white duration-150">
                                        <FaHome />
                                        {!isCollapsed && <p>Dashboard</p>}
                                    </a>
                                </li>
                                <li>
                                    <a href="/doctors" className="flex items-center gap-x-2 p-2 rounded-lg hover:bg-gray-700 text-white duration-150">
                                       <FaCalendarCheck />
                                       {!isCollapsed && <p>Add Appointments</p>}
                                    </a>
                                </li>
                                <li>
                                    <a href="/schedule" className="flex items-center gap-x-2 p-2 rounded-lg hover:bg-gray-700 text-white duration-150">
                                       <FaRegClipboard />
                                       {!isCollapsed && <p>Schedule</p>}
                                    </a>
                                </li>
                                <li>
                                    <a href="/unpaid" className="flex items-center gap-x-2 p-2 rounded-lg hover:bg-gray-700 text-white duration-150">
                                       <MdOutlinePayments />
                                       {!isCollapsed && <p>Payments</p>}
                                    </a>
                                </li>
                            </>
                        )}

                        {isOwner && (
                                <>
        
                                <li>
                                    <a href="/dashboard" className="flex items-center gap-x-2 p-2 rounded-lg hover:bg-gray-700 text-white duration-150">
                                        <FaHome />
                                        {!isCollapsed && <p>Dashboard</p>}
                                    </a>
                                </li>
                                <li>
                                    <a href="/staff" className="flex items-center gap-x-2 p-2 rounded-lg hover:bg-gray-700 text-white duration-150">
                                       <FaCalendarCheck />
                                       {!isCollapsed && <p>Staff</p>}
                                    </a>
                                </li>
                                <li>
                                    <a href="/completedjobs" className="flex items-center gap-x-2 p-2 rounded-lg hover:bg-gray-700 text-white duration-150">
                                       <FaRegClipboard />
                                       {!isCollapsed && <p>Completed Jobs</p>}
                                    </a>
                                </li>
                                <li>
                                    <a href="/vehiclehistory" className="flex items-center gap-x-2 p-2 rounded-lg hover:bg-gray-700 text-white duration-150">
                                       <MdOutlinePayments />
                                       {!isCollapsed && <p>Vehicle History</p>}
                                    </a>
                                </li>
                            </>
                        )}
                       {isCoach && (
                                <>
        
                                <li>
                                    <a href="/dashboard" className="flex items-center gap-x-2 p-2 rounded-lg hover:bg-gray-700 text-white duration-150">
                                        <FaHome />
                                        {!isCollapsed && <p>Dashboard</p>}
                                    </a>
                                </li>
                                <li>
                                    <a href="/repairvehicles" className="flex items-center gap-x-2 p-2 rounded-lg hover:bg-gray-700 text-white duration-150">
                                       <FaCalendarCheck />
                                       {!isCollapsed && <p>Assigned Jobs</p>}
                                    </a>
                                </li>
                                <li>
                                    <a href="/completedjobs" className="flex items-center gap-x-2 p-2 rounded-lg hover:bg-gray-700 text-white duration-150">
                                       <FaRegClipboard />
                                       {!isCollapsed && <p>Completed Jobs</p>}
                                    </a>
                                </li>
                                <li>
                                    <a href="/vehiclehistory" className="flex items-center gap-x-2 p-2 rounded-lg hover:bg-gray-700 text-white duration-150">
                                       <MdOutlinePayments />
                                       {!isCollapsed && <p>Vehicle History</p>}
                                    </a>
                                </li>
                            </>
                        )}
                    {isPhysio && (
                                <>
        
                                <li>
                                    <a href="/dashboard" className="flex items-center gap-x-2 p-2 rounded-lg hover:bg-gray-700 text-white duration-150">
                                        <FaHome />
                                        {!isCollapsed && <p>Dashboard</p>}
                                    </a>
                                </li>
                                
                                <li>
                                    <a href="/leaves" className="flex items-center gap-x-2 p-2 rounded-lg hover:bg-gray-700 text-white duration-150">
                                       <FaRegClipboard />
                                       {!isCollapsed && <p>Leave</p>}
                                    </a>
                                </li>
                                <li>
                                    <a href="/makeAppoinment" className="flex items-center gap-x-2 p-2 rounded-lg hover:bg-gray-700 text-white duration-150">
                                       <FaCalendarCheck />
                                       {!isCollapsed && <p>Make Appoinment</p>}
                                    </a>
                                </li>
                                <li>
                                    <a href="/patientReports" className="flex items-center gap-x-2 p-2 rounded-lg hover:bg-gray-700 text-white duration-150">
                                       <HiDocumentReport />
                                       {!isCollapsed && <p>Patient Reports</p>}
                                    </a>
                                </li>
                                <li>
                                    <a href="/reservationSchedule" className="flex items-center gap-x-2 p-2 rounded-lg hover:bg-gray-700 text-white duration-150">
                                       <FaRegClipboard />
                                       {!isCollapsed && <p>Reservation Schedule</p>}
                                    </a>
                                </li>
                                <li>
                                    <a href="/reviews" className="flex items-center gap-x-2 p-2 rounded-lg hover:bg-gray-700 text-white duration-150">
                                       <VscPreview />
                                       {!isCollapsed && <p>Reviews</p>}
                                    </a>
                                </li>
                                <li>
                                    <a href="/uploadVideos" className="flex items-center gap-x-2 p-2 rounded-lg hover:bg-gray-700 text-white duration-150">
                                       <FaPhotoVideo />
                                       {!isCollapsed && <p>Upload Videos</p>}
                                    </a>
                                </li>
                                
                               
                            </>
                        )}  
                       {isManager && (
                                <>
        
                                <li>
                                    <a href="/dashboard" className="flex items-center gap-x-2 p-2 rounded-lg hover:bg-gray-700 text-white duration-150">
                                        <FaHome />
                                        {!isCollapsed && <p>Dashboard</p>}
                                    </a>
                                </li>
                                <li>
                                    <a href="/dashboard" className="flex items-center gap-x-2 p-2 rounded-lg hover:bg-gray-700 text-white duration-150">
                                       <FaCalendarCheck />
                                       {!isCollapsed && <p>Staff</p>}
                                    </a>
                                </li>
                                <li>
                                    <a href="/dashboard" className="flex items-center gap-x-2 p-2 rounded-lg hover:bg-gray-700 text-white duration-150">
                                       <FaRegClipboard />
                                       {!isCollapsed && <p>Completed Jobs</p>}
                                    </a>
                                </li>
                                <li>
                                    <a href="/dashboard" className="flex items-center gap-x-2 p-2 rounded-lg hover:bg-gray-700 text-white duration-150">
                                       <MdOutlinePayments />
                                       {!isCollapsed && <p>Vehicle History</p>}
                                    </a>
                                </li>
                            </>
                        )}


                    </ul>
                    <div>
                        <ul className="px-4 pb-4 text-sm font-medium">
                        <li>
                                <a href="/" className="flex items-center gap-x-2 p-2 rounded-lg hover:bg-gray-700 text-white duration-150">
                                    <CgProfile />
                                    {!isCollapsed && <p>Profile</p>}
                                </a>
                            </li>
                            <li>
                                <a href="/" onClick={handleLogout} className="flex items-center gap-x-2 p-2 rounded-lg hover:bg-gray-700 text-white duration-150">
                                    <FaSignOutAlt />
                                    {!isCollapsed && <p>Sign Out</p>}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Sidebar;
