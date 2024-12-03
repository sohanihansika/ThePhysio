import React, { useState ,useEffect } from 'react';
import { FaCalendarCheck, FaUserMd, FaDumbbell } from "react-icons/fa"; 
// import { Link } from 'react-router-dom';

import UserService from '../../../service/BookingService';
import BookingService from '../../../service/UserService';
import ReviewService from '../../../service/ReviewService';

export default () => {

  const [userCount, setUserCount] = useState(0);
  const [reservationCount, setReservationCount] = useState(0);
  const [reportCount, setReportCount] = useState(0);
  const token = localStorage.getItem('token'); // Retrieve the token from localStorage

  useEffect(() => {
      // Fetch Users Count
      const fetchUserCount = async () => {
          try {
              const users = await UserService.getAllUsers(token);
              // Assuming `ourUsersList` contains the array of users
              setUserCount(users?.ourUsersList?.length || 0);
          } catch (err) {
              console.error("Error fetching users", err);
              setUserCount(0); // Handle gracefully by setting the count to 0
          }
      };
      

      // Fetch Reservations Count
      const fetchReservationCount = async () => {
          try {
              const bookings = await BookingService.getAllBookings(token);
              setReservationCount(bookings.length);
          } catch (err) {
              console.error("Error fetching bookings", err);
          }
      };

      // Fetch Reports Count
      const fetchReportCount = async () => {
          try {
              const reports = await ReviewService.getAllreviews(token);
              setReportCount(reports.length);
          } catch (err) {
              console.error("Error fetching reports", err);
          }
      };

      fetchUserCount();
      fetchReservationCount();
      fetchReportCount();
  }, [token]);

  const integrations = [
      {
          title: "Appointments",
          desc: reservationCount,
          path: "/users",
          icon: <FaCalendarCheck />
      },
      {
          title: "Patients",
          desc: userCount,
          path: "/Schedule",
          icon: <FaUserMd />
      },
      {
          title: "Workouts",
          desc: reportCount,
          path: "/ownerReports",
          icon: <FaDumbbell />
      },
  ];

  

  return (

    <section className="py-2">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 mt-8">
        

        <ul className="mt-4 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {
                integrations.map((item, idx) => (
                    <li key={idx} className="border rounded-lg bg-blue-100 p-2 shadow-md w-84 h-32">
                       <a href={item.path} className="w-full h-full">
                         <div className="flex items-center justify-between p-2 h-full">
                            <div className="flex items-center space-x-2">
                               <span className="text-4xl">{item.icon}</span>
                               <h4 className="text-gray-800 font-semibold text-lg">{item.title}</h4>
                             </div>
                             <p className="text-gray-600 text-4xl text-right w-1/2">{item.desc}</p>
                         </div>
                       </a>
                    </li>
                ))
            }
            </ul>

        
        </div>
      </section>
  )

}