import React, { useState, useEffect } from 'react';
import UserService from '../service/UserService';
import { FaAccessibleIcon, FaCog, FaSignOutAlt, FaHome, FaChartLine, FaUserTie, FaUsers, FaRegFrown, FaBullhorn, FaBusinessTime, FaCarAlt, FaCalendarCheck, FaMoneyCheckAlt, FaRegClipboard, FaWarehouse, FaUserPlus, FaClipboardList, FaClipboardCheck, FaCar, FaMoneyCheck, FaWrench, FaCalendarAlt } from "react-icons/fa";

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

    useEffect(() => {
        fetchProfileInfo();
    }, []);

    const fetchProfileInfo = async () => {
        try {

            const token = localStorage.getItem('token'); // Retrieve the token from localStorage
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

    //if not authenticated return null
    if (!isAuthenticated) {
        return null;
    }

    return (
        <>
            <nav
                className="fixed top-0 left-0 w-full h-full border-r bg-blue-950 space-y-8 sm:w-72 z-10">
                <div className="flex flex-col h-full">
                    <div className='h-20 flex items-center px-8'>
                        <a href='/dashboard' className='flex-none'>
                            <img src="./src/assets/logowithoutback.png" width={190} className="mx-auto mt-12" />
                        </a>
                    </div>
                    <div className="flex-1 flex flex-col h-full overflow-auto mt-10">
                        <ul className="px-4 text-lg font-medium flex-1">
                            {isAdmin && (
                               <li>
                                    <a href="/admindashboard" className="flex items-center gap-x-2 text-white p-2 rounded-lg  hover:bg-lightblue hover:text-black active:bg-gray-100 duration-150">
                                        <div className="absolute left-0 w-1.5 h-full rounded-r-full text-white scale-y-0 group-hover:scale-y-100 transition-transform ease-in-out" />
                                        <div className="flex-none">
                                            <FaHome />
                                        </div>
                                        <p className="flex-1">Dashboard</p>
                                    </a>
                                    <a href="/staffaccounts" className="flex items-center gap-x-2 text-white p-2 rounded-lg  hover:bg-lightblue hover:text-black active:bg-gray-100 duration-150">
                                        <div className="absolute left-0 w-1.5 h-full rounded-r-full bg-gray-600 scale-y-0 group-hover:scale-y-100 transition-transform ease-in-out" />
                                        <div className="flex-none">
                                            <FaUserTie />
                                        </div>
                                        <p className="flex-1">Staff Accounts</p>
                                    </a>
                                    <a href="/useraccounts" className="flex items-center gap-x-2 text-white p-2 rounded-lg  hover:bg-lightblue hover:text-black active:bg-gray-100 duration-150">
                                        <div className="absolute left-0 w-1.5 h-full rounded-r-full bg-gray-600 scale-y-0 group-hover:scale-y-100 transition-transform ease-in-out" />
                                        <div className="flex-none">
                                            <FaUsers />
                                        </div>
                                        <p className="flex-1">User Accounts</p>
                                    </a>
                                    <a href="/complaints" className="flex items-center gap-x-2 text-white p-2 rounded-lg  hover:bg-lightblue hover:text-black active:bg-gray-100 duration-150">
                                        <div className="absolute left-0 w-1.5 h-full rounded-r-full bg-gray-600 scale-y-0 group-hover:scale-y-100 transition-transform ease-in-out" />
                                        <div className="flex-none">
                                            <FaBusinessTime />
                                        </div>
                                        <p className="flex-1">Ongoing Jobs</p>
                                    </a>
                                    <a href="/complaints" className="flex items-center gap-x-2 text-white p-2 rounded-lg  hover:bg-lightblue hover:text-black active:bg-gray-100 duration-150">
                                        <div className="absolute left-0 w-1.5 h-full rounded-r-full bg-gray-600 scale-y-0 group-hover:scale-y-100 transition-transform ease-in-out" />
                                        <div className="flex-none">
                                            <FaCarAlt />
                                        </div>
                                        <p className="flex-1">Registered Vehicales</p>
                                    </a>
                                    <a href="/complaints" className="flex items-center gap-x-2 text-white p-2 rounded-lg  hover:bg-lightblue hover:text-black active:bg-gray-100 duration-150">
                                        <div className="absolute left-0 w-1.5 h-full rounded-r-full bg-gray-600 scale-y-0 group-hover:scale-y-100 transition-transform ease-in-out" />
                                        <div className="flex-none">
                                            <FaRegFrown />
                                        </div>
                                        <p className="flex-1">User Complaints</p>
                                    </a>
                                    <a href="/reports" className="flex items-center gap-x-2 text-white p-2 rounded-lg  hover:bg-lightblue hover:text-black active:bg-gray-100 duration-150">
                                        <div className="absolute left-0 w-1.5 h-full rounded-r-full bg-gray-600 scale-y-0 group-hover:scale-y-100 transition-transform ease-in-out" />
                                        <div className="flex-none">
                                            <FaChartLine />
                                        </div>
                                        <p className="flex-1">Reports & Analytics</p>
                                    </a>
                                    <a href="/dashboard" className="flex items-center gap-x-2 text-white p-2 rounded-lg  hover:bg-lightblue hover:text-black active:bg-gray-100 duration-150">
                                        <div className="absolute left-0 w-1.5 h-full rounded-r-full bg-gray-600 scale-y-0 group-hover:scale-y-100 transition-transform ease-in-out" />
                                        <div className="flex-none">
                                            <FaBullhorn />
                                        </div>
                                        <p className="flex-1">Site Announcements</p>
                                    </a>
                                </li>
                            )}
                            {isUser && (
                                <li>
                                    <a href="/dashboard" className="flex items-center gap-x-2 text-white p-2 rounded-lg  hover:bg-lightblue hover:text-black active:bg-gray-100 duration-150">
                                        <div className="absolute left-0 w-1.5 h-full rounded-r-full bg-gray-600 scale-y-0 group-hover:scale-y-100 transition-transform ease-in-out" />
                                        <div className="flex-none">
                                            <FaHome />
                                        </div>
                                        <p className="flex-1">Dashboard</p>
                                    </a>
                                    <a href="/myvehicles" className="flex items-center gap-x-2 text-white p-2 rounded-lg  hover:bg-lightblue hover:text-black active:bg-gray-100 duration-150">
                                        <div className="absolute left-0 w-1.5 h-full rounded-r-full bg-gray-600 scale-y-0 group-hover:scale-y-100 transition-transform ease-in-out" />
                                        <div className="flex-none">
                                            <FaCar />
                                        </div>
                                        <p className="flex-1">My Vehicles</p>
                                    </a>
                                    <a href="/ongoingservices" className="flex items-center gap-x-2 text-white p-2 rounded-lg  hover:bg-lightblue hover:text-black active:bg-gray-100 duration-150">
                                        <div className="absolute left-0 w-1.5 h-full rounded-r-full bg-gray-600 scale-y-0 group-hover:scale-y-100 transition-transform ease-in-out" />
                                        <div className="flex-none">
                                            <FaWrench />
                                        </div>
                                        <p className="flex-1">Onging Services</p>
                                    </a>
                                    <a href="/upcomingservices" className="flex items-center gap-x-2 text-white p-2 rounded-lg  hover:bg-lightblue hover:text-black active:bg-gray-100 duration-150">
                                        <div className="absolute left-0 w-1.5 h-full rounded-r-full bg-gray-600 scale-y-0 group-hover:scale-y-100 transition-transform ease-in-out" />
                                        <div className="flex-none">
                                            <FaCalendarAlt />
                                        </div>
                                        <p className="flex-1">Upcoming Services</p>
                                    </a>
                                    <a href="/billings" className="flex items-center gap-x-2 text-white p-2 rounded-lg  hover:bg-lightblue hover:text-black active:bg-gray-100 duration-150">
                                        <div className="absolute left-0 w-1.5 h-full rounded-r-full bg-gray-600 scale-y-0 group-hover:scale-y-100 transition-transform ease-in-out" />
                                        <div className="flex-none">
                                            <FaMoneyCheckAlt />
                                        </div>
                                        <p className="flex-1">Payments & Billing</p>
                                    </a>
                                </li>
                            )}
                            {isOwner && (
                                <li>
                                    <a href="/dashboard" className="flex items-center gap-x-2 text-white p-2 rounded-lg  hover:bg-lightblue hover:text-black active:bg-gray-100 duration-150">
                                        <div className="absolute left-0 w-1.5 h-full rounded-r-full bg-gray-600 scale-y-0 group-hover:scale-y-100 transition-transform ease-in-out" />
                                        <div className="flex-none">
                                            <FaHome />
                                        </div>
                                        <p className="flex-1">Dashboard</p>
                                    </a>

                                    <a href="/repairvehicles" className="flex items-center gap-x-2 text-white p-2 rounded-lg  hover:bg-lightblue hover:text-black active:bg-gray-100 duration-150">
                                        <div className="absolute left-0 w-1.5 h-full rounded-r-full bg-gray-600 scale-y-0 group-hover:scale-y-100 transition-transform ease-in-out" />
                                        <div className="flex-none">
                                            <FaClipboardList />
                                        </div>
                                        <p className="flex-1">Assigned Jobs</p>
                                    </a>

                                    <a href="/completedjobs" className="flex items-center gap-x-2 text-white p-2 rounded-lg  hover:bg-lightblue hover:text-black active:bg-gray-100 duration-150">
                                        <div className="absolute left-0 w-1.5 h-full rounded-r-full bg-gray-600 scale-y-0 group-hover:scale-y-100 transition-transform ease-in-out" />
                                        <div className="flex-none">
                                            <FaClipboardCheck />
                                        </div>
                                        <p className="flex-1">Completed Jobs</p>
                                    </a>

                                    <a href="/vehiclehistory" className="flex items-center gap-x-2 text-white p-2 rounded-lg  hover:bg-lightblue hover:text-black active:bg-gray-100 duration-150">
                                        <div className="absolute left-0 w-1.5 h-full rounded-r-full bg-gray-600 scale-y-0 group-hover:scale-y-100 transition-transform ease-in-out" />
                                        <div className="flex-none">
                                            <FaCar />
                                        </div>
                                        <p className="flex-1">Vehicle History</p>
                                    </a>

                                    <a href="/dashboard" className="flex items-center gap-x-2 text-white p-2 rounded-lg  hover:bg-lightblue hover:text-black active:bg-gray-100 duration-150">
                                        <div className="absolute left-0 w-1.5 h-full rounded-r-full bg-gray-600 scale-y-0 group-hover:scale-y-100 transition-transform ease-in-out" />
                                        <div className="flex-none">
                                            <FaWarehouse />
                                        </div>
                                        <p className="flex-1">Inventory Management</p>
                                    </a>
                                    <a href="/dashboard" className="flex items-center gap-x-2 text-white p-2 rounded-lg  hover:bg-lightblue hover:text-black active:bg-gray-100 duration-150">
                                        <div className="absolute left-0 w-1.5 h-full rounded-r-full bg-gray-600 scale-y-0 group-hover:scale-y-100 transition-transform ease-in-out" />
                                        <div className="flex-none">
                                            <FaUserPlus />
                                        </div>
                                        <p className="flex-1">Add Technicians</p>
                                    </a>
                                </li>
                            )}
                            {isReceptionist && (
                                <li>
                                    <a href="/dashboard" className="flex items-center gap-x-2 text-white p-2 rounded-lg  hover:bg-lightblue hover:text-black active:bg-gray-100 duration-150">
                                        <div className="absolute left-0 w-1.5 h-full rounded-r-full bg-gray-600 scale-y-0 group-hover:scale-y-100 transition-transform ease-in-out" />
                                        <div className="flex-none">
                                            <FaHome />
                                        </div>
                                        <p className="flex-1">Dashboard</p>
                                    </a>
                                    <a href="/jobmanagement" className="flex items-center gap-x-2 text-white p-2 rounded-lg  hover:bg-lightblue hover:text-black active:bg-gray-100 duration-150">
                                        <div className="absolute left-0 w-1.5 h-full rounded-r-full bg-gray-600 scale-y-0 group-hover:scale-y-100 transition-transform ease-in-out" />
                                        <div className="flex-none">
                                            <FaBusinessTime />
                                        </div>
                                        <p className="flex-1">Job Management</p>
                                    </a>
                                    <a href="/vehiclemanagement" className="flex items-center gap-x-2 text-white p-2 rounded-lg  hover:bg-lightblue hover:text-black active:bg-gray-100 duration-150">
                                        <div className="absolute left-0 w-1.5 h-full rounded-r-full bg-gray-600 scale-y-0 group-hover:scale-y-100 transition-transform ease-in-out" />
                                        <div className="flex-none">
                                            <FaCarAlt />
                                        </div>
                                        <p className="flex-1">Vehicle Management</p>
                                    </a>
                                    <a href="/bookingmanagement" className="flex items-center gap-x-2 text-white p-2 rounded-lg  hover:bg-lightblue hover:text-black active:bg-gray-100 duration-150">
                                        <div className="absolute left-0 w-1.5 h-full rounded-r-full bg-gray-600 scale-y-0 group-hover:scale-y-100 transition-transform ease-in-out" />
                                        <div className="flex-none">
                                            <FaCalendarCheck />
                                        </div>
                                        <p className="flex-1">Booking Management</p>
                                    </a>
                                    <a href="/billing" className="flex items-center gap-x-2 text-white p-2 rounded-lg  hover:bg-lightblue hover:text-black active:bg-gray-100 duration-150">
                                        <div className="absolute left-0 w-1.5 h-full rounded-r-full bg-gray-600 scale-y-0 group-hover:scale-y-100 transition-transform ease-in-out" />
                                        <div className="flex-none">
                                            <FaRegClipboard />
                                        </div>
                                        <p className="flex-1">Billing</p>
                                    </a>
                                    <a href="/userpayments" className="flex items-center gap-x-2 text-white p-2 rounded-lg  hover:bg-lightblue hover:text-black active:bg-gray-100 duration-150">
                                        <div className="absolute left-0 w-1.5 h-full rounded-r-full bg-gray-600 scale-y-0 group-hover:scale-y-100 transition-transform ease-in-out" />
                                        <div className="flex-none">
                                            <FaMoneyCheckAlt />
                                        </div>
                                        <p className="flex-1">User Payments</p>
                                    </a>
                                    <a href="/supplierpayments" className="flex items-center gap-x-2 text-white p-2 rounded-lg  hover:bg-lightblue hover:text-black active:bg-gray-100 duration-150">
                                        <div className="absolute left-0 w-1.5 h-full rounded-r-full bg-gray-600 scale-y-0 group-hover:scale-y-100 transition-transform ease-in-out" />
                                        <div className="flex-none">
                                            <FaMoneyCheck />
                                        </div>
                                        <p className="flex-1">Supplier Payments</p>
                                    </a>
                                </li>
                            )}
                            {isCoach && (
                                <li>
                                    <a href="/dashboard" className="flex items-center gap-x-2 text-white p-2 rounded-lg  hover:bg-lightblue hover:text-black active:bg-gray-100 duration-150">
                                        <div className="absolute left-0 w-1.5 h-full rounded-r-full bg-gray-600 scale-y-0 group-hover:scale-y-100 transition-transform ease-in-out" />
                                        <div className="flex-none">
                                            <FaHome />
                                        </div>
                                        <p className="flex-1">Dashboard</p>
                                    </a>

                                    <a href="/repairvehicles" className="flex items-center gap-x-2 text-white p-2 rounded-lg  hover:bg-lightblue hover:text-black active:bg-gray-100 duration-150">
                                        <div className="absolute left-0 w-1.5 h-full rounded-r-full bg-gray-600 scale-y-0 group-hover:scale-y-100 transition-transform ease-in-out" />
                                        <div className="flex-none">
                                            <FaClipboardList />
                                        </div>
                                        <p className="flex-1">Assigned Jobs</p>
                                    </a>

                                    <a href="/completedjobs" className="flex items-center gap-x-2 text-white p-2 rounded-lg  hover:bg-lightblue hover:text-black active:bg-gray-100 duration-150">
                                        <div className="absolute left-0 w-1.5 h-full rounded-r-full bg-gray-600 scale-y-0 group-hover:scale-y-100 transition-transform ease-in-out" />
                                        <div className="flex-none">
                                            <FaClipboardCheck />
                                        </div>
                                        <p className="flex-1">Completed Jobs</p>
                                    </a>

                                    <a href="/vehiclehistory" className="flex items-center gap-x-2 text-white p-2 rounded-lg  hover:bg-lightblue hover:text-black active:bg-gray-100 duration-150">
                                        <div className="absolute left-0 w-1.5 h-full rounded-r-full bg-gray-600 scale-y-0 group-hover:scale-y-100 transition-transform ease-in-out" />
                                        <div className="flex-none">
                                            <FaCar />
                                        </div>
                                        <p className="flex-1">Vehicle History</p>
                                    </a>

                                    <a href="/dashboard" className="flex items-center gap-x-2 text-white p-2 rounded-lg  hover:bg-lightblue hover:text-black active:bg-gray-100 duration-150">
                                        <div className="absolute left-0 w-1.5 h-full rounded-r-full bg-gray-600 scale-y-0 group-hover:scale-y-100 transition-transform ease-in-out" />
                                        <div className="flex-none">
                                            <FaWarehouse />
                                        </div>
                                        <p className="flex-1">Inventory Management</p>
                                    </a>
                                    <a href="/dashboard" className="flex items-center gap-x-2 text-white p-2 rounded-lg  hover:bg-lightblue hover:text-black active:bg-gray-100 duration-150">
                                        <div className="absolute left-0 w-1.5 h-full rounded-r-full bg-gray-600 scale-y-0 group-hover:scale-y-100 transition-transform ease-in-out" />
                                        <div className="flex-none">
                                            <FaUserPlus />
                                        </div>
                                        <p className="flex-1">Add Technicians</p>
                                    </a>
                                </li>
                            )}
                            {isManager && (
                                <li>
                                    <a href="/dashboard" className="flex items-center gap-x-2 text-white p-2 rounded-lg  hover:bg-lightblue hover:text-black active:bg-gray-100 duration-150">
                                        <div className="absolute left-0 w-1.5 h-full rounded-r-full bg-gray-600 scale-y-0 group-hover:scale-y-100 transition-transform ease-in-out" />
                                        <div className="flex-none">
                                            <FaHome />
                                        </div>
                                        <p className="flex-1">Dashboard</p>
                                    </a>

                                    <a href="/repairvehicles" className="flex items-center gap-x-2 text-white p-2 rounded-lg  hover:bg-lightblue hover:text-black active:bg-gray-100 duration-150">
                                        <div className="absolute left-0 w-1.5 h-full rounded-r-full bg-gray-600 scale-y-0 group-hover:scale-y-100 transition-transform ease-in-out" />
                                        <div className="flex-none">
                                            <FaClipboardList />
                                        </div>
                                        <p className="flex-1">Assigned Jobs</p>
                                    </a>

                                    <a href="/completedjobs" className="flex items-center gap-x-2 text-white p-2 rounded-lg  hover:bg-lightblue hover:text-black active:bg-gray-100 duration-150">
                                        <div className="absolute left-0 w-1.5 h-full rounded-r-full bg-gray-600 scale-y-0 group-hover:scale-y-100 transition-transform ease-in-out" />
                                        <div className="flex-none">
                                            <FaClipboardCheck />
                                        </div>
                                        <p className="flex-1">Completed Jobs</p>
                                    </a>

                                    <a href="/vehiclehistory" className="flex items-center gap-x-2 text-white p-2 rounded-lg  hover:bg-lightblue hover:text-black active:bg-gray-100 duration-150">
                                        <div className="absolute left-0 w-1.5 h-full rounded-r-full bg-gray-600 scale-y-0 group-hover:scale-y-100 transition-transform ease-in-out" />
                                        <div className="flex-none">
                                            <FaCar />
                                        </div>
                                        <p className="flex-1">Vehicle History</p>
                                    </a>

                                    <a href="/dashboard" className="flex items-center gap-x-2 text-white p-2 rounded-lg  hover:bg-lightblue hover:text-black active:bg-gray-100 duration-150">
                                        <div className="absolute left-0 w-1.5 h-full rounded-r-full bg-gray-600 scale-y-0 group-hover:scale-y-100 transition-transform ease-in-out" />
                                        <div className="flex-none">
                                            <FaWarehouse />
                                        </div>
                                        <p className="flex-1">Inventory Management</p>
                                    </a>
                                    <a href="/dashboard" className="flex items-center gap-x-2 text-white p-2 rounded-lg  hover:bg-lightblue hover:text-black active:bg-gray-100 duration-150">
                                        <div className="absolute left-0 w-1.5 h-full rounded-r-full bg-gray-600 scale-y-0 group-hover:scale-y-100 transition-transform ease-in-out" />
                                        <div className="flex-none">
                                            <FaUserPlus />
                                        </div>
                                        <p className="flex-1">Add Technicians</p>
                                    </a>
                                </li>
                            )}
                            {isPhysio && (
                                <li>
                                    <a href="/dashboard" className="flex items-center gap-x-2 text-white p-2 rounded-lg  hover:bg-lightblue hover:text-black active:bg-gray-100 duration-150">
                                        <div className="absolute left-0 w-1.5 h-full rounded-r-full bg-gray-600 scale-y-0 group-hover:scale-y-100 transition-transform ease-in-out" />
                                        <div className="flex-none">
                                            <FaHome />
                                        </div>
                                        <p className="flex-1">Dashboard</p>
                                    </a>

                                    <a href="/repairvehicles" className="flex items-center gap-x-2 text-white p-2 rounded-lg  hover:bg-lightblue hover:text-black active:bg-gray-100 duration-150">
                                        <div className="absolute left-0 w-1.5 h-full rounded-r-full bg-gray-600 scale-y-0 group-hover:scale-y-100 transition-transform ease-in-out" />
                                        <div className="flex-none">
                                            <FaClipboardList />
                                        </div>
                                        <p className="flex-1">Assigned Jobs</p>
                                    </a>

                                    <a href="/completedjobs" className="flex items-center gap-x-2 text-white p-2 rounded-lg  hover:bg-lightblue hover:text-black active:bg-gray-100 duration-150">
                                        <div className="absolute left-0 w-1.5 h-full rounded-r-full bg-gray-600 scale-y-0 group-hover:scale-y-100 transition-transform ease-in-out" />
                                        <div className="flex-none">
                                            <FaClipboardCheck />
                                        </div>
                                        <p className="flex-1">Completed Jobs</p>
                                    </a>

                                    <a href="/vehiclehistory" className="flex items-center gap-x-2 text-white p-2 rounded-lg  hover:bg-lightblue hover:text-black active:bg-gray-100 duration-150">
                                        <div className="absolute left-0 w-1.5 h-full rounded-r-full bg-gray-600 scale-y-0 group-hover:scale-y-100 transition-transform ease-in-out" />
                                        <div className="flex-none">
                                            <FaCar />
                                        </div>
                                        <p className="flex-1">Vehicle History</p>
                                    </a>

                                    <a href="/dashboard" className="flex items-center gap-x-2 text-white p-2 rounded-lg  hover:bg-lightblue hover:text-black active:bg-gray-100 duration-150">
                                        <div className="absolute left-0 w-1.5 h-full rounded-r-full bg-gray-600 scale-y-0 group-hover:scale-y-100 transition-transform ease-in-out" />
                                        <div className="flex-none">
                                            <FaWarehouse />
                                        </div>
                                        <p className="flex-1">Inventory Management</p>
                                    </a>
                                    <a href="/dashboard" className="flex items-center gap-x-2 text-white p-2 rounded-lg  hover:bg-lightblue hover:text-black active:bg-gray-100 duration-150">
                                        <div className="absolute left-0 w-1.5 h-full rounded-r-full bg-gray-600 scale-y-0 group-hover:scale-y-100 transition-transform ease-in-out" />
                                        <div className="flex-none">
                                            <FaUserPlus />
                                        </div>
                                        <p className="flex-1">Add Technicians</p>
                                    </a>
                                </li>
                            )}
                        </ul>
                        <div>
                            <ul className="px-4 pb-4 text-lg font-medium">
                                {isAuthenticated && (
                                    <li>
                                        <a href="/settings" className="flex items-center gap-x-2 text-white p-2 rounded-lg  hover:bg-lightblue hover:text-black active:bg-gray-100 duration-150">
                                            <div className="absolute left-0 w-1.5 h-full rounded-r-full bg-gray-600 scale-y-0 group-hover:scale-y-100 transition-transform ease-in-out" />
                                            <div className="flex-none">
                                                <FaCog />
                                            </div>
                                            <p className="flex-1">Settings</p>
                                        </a>
                                        <a  onClick={handleLogout} className="flex items-center gap-x-2 text-white p-2 rounded-lg  hover:bg-blue-400 hover:text-red-600 active:bg-gray-100 duration-150">
                                            <div className="absolute left-0 w-1.5 h-full rounded-r-full bg-gray-600 scale-y-0 group-hover:scale-y-100 transition-transform ease-in-out" />
                                            <div className="flex-none">
                                                <FaSignOutAlt />
                                            </div>
                                            <p className="flex-1">Logout</p>
                                        </a>
                                    </li>
                                )}
                            </ul>
                            <div className="py-4 px-4 border-t">
                                <div className="flex items-center gap-x-4">
                                    <img src="https://e7.pngegg.com/pngimages/81/570/png-clipart-profile-logo-computer-icons-user-user-blue-heroes-thumbnail.png" className="w-12 h-12 rounded-full" />
                                    <div>
                                        <span className="block text-white text-lg font-semibold">{profileInfo.name}</span>
                                        <a
                                            href="#"
                                            className="block mt-px text-white hover:text-indigo-600 text-sm"
                                        >
                                            View profile
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                </div>
            </nav>
        </>
    );

    
}

export default Sidebar;
    

