import React, { useState } from 'react';
import UserService from '../service/UserService';
import { FaBars } from 'react-icons/fa';

function Sidebar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const isAuthenticated = UserService.isAuthenticated();
    const isAdmin = UserService.isAdmin();
    const isCustomer = UserService.isCustomer();
    const isReceptionist = UserService.isReceptionist();
    const isPhysio = UserService.isPhysio();

    const handleLogout = () => {
        const confirmDelete = window.confirm('Are you sure you want to logout this user?');
        if (confirmDelete) {
            UserService.logout();
        }
    };

    if (!isAuthenticated) {
        return null;
    }

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <div className="fixed top-0 left-0 h-full flex z-10">
                <div className={`transition-width duration-300 ${isSidebarOpen ? 'w-64' : 'w-16'} bg-deepblue`} style={{ backgroundColor: '#172b59' }}>
                    <div className="flex flex-col h-full">
                        <div className='h-20 flex items-center px-8'>
                            <a href='/dashboard' className='flex-none'>
                                <img src="./src/assets/logowithoutback.png" width={isSidebarOpen ? 100 : 40} className="mx-auto mt-12" />
                            </a>
                        </div>
                        {isSidebarOpen && (
                            <div className="flex-1 flex flex-col h-full overflow-auto mt-10">
                                <ul className="px-4 text-lg font-medium flex-1">
                                    {isAdmin && (
                                        <li>
                                            <a href="/admindash" className="flex items-center gap-x-2 text-white p-2 rounded-lg hover:bg-lightblue hover:text-black active:bg-gray-100 duration-150">
                                                <p className="flex-1">Dashboard</p>
                                            </a>
                                            <a href="#" className="flex items-center gap-x-2 text-white p-2 rounded-lg hover:bg-lightblue hover:text-black active:bg-gray-100 duration-150">
                                                <p className="flex-1">Staff Accounts</p>
                                            </a>
                                            <a href="#" className="flex items-center gap-x-2 text-white p-2 rounded-lg hover:bg-lightblue hover:text-black active:bg-gray-100 duration-150">
                                                <p className="flex-1">Customer Accounts</p>
                                            </a>
                                            <a href="#" className="flex items-center gap-x-2 text-white p-2 rounded-lg hover:bg-lightblue hover:text-black active:bg-gray-100 duration-150">
                                                <p className="flex-1">Ongoing Jobs</p>
                                            </a>
                                            <a href="#" className="flex items-center gap-x-2 text-white p-2 rounded-lg hover:bg-lightblue hover:text-black active:bg-gray-100 duration-150">
                                                <p className="flex-1">Registered Vehicles</p>
                                            </a>
                                            <a href="#" className="flex items-center gap-x-2 text-white p-2 rounded-lg hover:bg-lightblue hover:text-black active:bg-gray-100 duration-150">
                                                <p className="flex-1">Customer Complaints</p>
                                            </a>
                                            <a href="#" className="flex items-center gap-x-2 text-white p-2 rounded-lg hover:bg-lightblue hover:text-black active:bg-gray-100 duration-150">
                                                <p className="flex-1">Reports & Analytics</p>
                                            </a>
                                            <a href="#" className="flex items-center gap-x-2 text-white p-2 rounded-lg hover:bg-lightblue hover:text-black active:bg-gray-100 duration-150">
                                                <p className="flex-1">Site Announcements</p>
                                            </a>
                                        </li>
                                    )}
                                    {isCustomer && (
                                        <li>
                                            <a href="/profile" className="flex items-center gap-x-2 text-white p-2 rounded-lg hover:bg-lightblue hover:text-black active:bg-gray-100 duration-150">
                                                <p className="flex-1">Dashboard</p>
                                            </a>
                                            <a href="#" className="flex items-center gap-x-2 text-white p-2 rounded-lg hover:bg-lightblue hover:text-black active:bg-gray-100 duration-150">
                                                <p className="flex-1">Vehicle repair</p>
                                            </a>
                                           
                                        </li>
                                    )}
                                    {isPhysio && (
                                        <li>
                                            <a href="/physiodash" className="flex items-center gap-x-2 text-white p-2 rounded-lg hover:bg-lightblue hover:text-black active:bg-gray-100 duration-150">
                                                <p className="flex-1">Dashboard</p>
                                            </a>
                                            <a href="#" className="flex items-center gap-x-2 text-white p-2 rounded-lg hover:bg-lightblue hover:text-black active:bg-gray-100 duration-150">
                                                <p className="flex-1">Vehicle repair</p>
                                            </a>
                                            <a href="#" className="flex items-center gap-x-2 text-white p-2 rounded-lg hover:bg-lightblue hover:text-black active:bg-gray-100 duration-150">
                                                <p className="flex-1">Inventory Management</p>
                                            </a>
                                        </li>
                                    )}
                                    {isReceptionist && (
                                        <li>
                                            <a href="/recepdash" className="flex items-center gap-x-2 text-white p-2 rounded-lg hover:bg-lightblue hover:text-black active:bg-gray-100 duration-150">
                                                <p className="flex-1">Dashboard</p>
                                            </a>
                                            <a href="/doctors" className="flex items-center gap-x-2 text-white p-2 rounded-lg hover:bg-lightblue hover:text-black active:bg-gray-100 duration-150">
                                                <p className="flex-1">Reservations</p>
                                            </a>
                                            {/* <a href="/payments" className="flex items-center gap-x-2 text-white p-2 rounded-lg hover:bg-lightblue hover:text-black active:bg-gray-100 duration-150">
                                                <p className="flex-1">Manual Payment</p>
                                            </a>
                                            <a href="/reports" className="flex items-center gap-x-2 text-white p-2 rounded-lg hover:bg-lightblue hover:text-black active:bg-gray-100 duration-150">
                                                <p className="flex-1">Reports</p>
                                            </a>
                                            <a href="/videos" className="flex items-center gap-x-2 text-white p-2 rounded-lg hover:bg-lightblue hover:text-black active:bg-gray-100 duration-150">
                                                <p className="flex-1">Videos</p>
                                            </a> */}
                                             <a href="/ongoingschedule" className="flex items-center gap-x-2 text-white p-2 rounded-lg hover:bg-lightblue hover:text-black active:bg-gray-100 duration-150">
                                                <p className="flex-1">Schedule</p>
                                            </a>
                                            <a href="/payments" className="flex items-center gap-x-2 text-white p-2 rounded-lg hover:bg-lightblue hover:text-black active:bg-gray-100 duration-150">
                                                <p className="flex-1">Manual Payment</p>
                                            </a>
                                        </li>
                                    )}
                                </ul>
                                <ul className="px-4 pb-4 text-lg font-medium">
                                    {isAuthenticated && (
                                        <li>
                                             <a href="/profileView" className="flex items-center gap-x-2 text-white p-2 rounded-lg  hover:bg-lightblue hover:text-black active:bg-gray-100 duration-150">
                                                <p className="flex-1">View Profile</p>
                                            </a>

                                            <a href="#" className="flex items-center gap-x-2 text-white p-2 rounded-lg  hover:bg-lightblue hover:text-black active:bg-gray-100 duration-150">
                                                <p className="flex-1">Settings</p>
                                            </a>
                                            <a href="/logout" onClick={handleLogout} className="flex items-center gap-x-2 text-white p-2 rounded-lg  hover:bg-lightblue hover:text-driveazered active:bg-gray-100 duration-150">
                                                <p className="flex-1">Logout</p>
                                            </a>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
                <button
                    onClick={toggleSidebar}
                    className="p-2 text-white bg-deepblue focus:outline-none z-20"
                    style={{ backgroundColor: '#172b59' }}
                >
                    <FaBars />
                </button>
            </div>
        </>
    );
}

export default Sidebar;
