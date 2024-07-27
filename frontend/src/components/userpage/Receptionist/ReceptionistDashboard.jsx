import React, { useState } from 'react';
import { Calendar } from 'react-calendar';
import { Link } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css'; // Import calendar styles
import {     FaMoneyCheckAlt, FaRegClipboard } from "react-icons/fa";
const AppointmentPage = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const tableItems = [
    { time: "9.00 - 9.30", name: "Bob", doc: "Steven", room: "1", status: "Done" },
    { time: "9.00 - 9.30", name: "Christine", doc: "Peter", room: "2", status: "Pending" },
    { time: "9.00 - 9.30", name: "Yasmine", doc: "Lewis", room: "3", status: "Done" },
    { time: "9.00 - 9.30", name: "Charlotte", doc: "John", room: "4", status: "Not Paid" },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 mt-6">
      <div className="flex justify-between items-start">
        {/* Calendar and Add Appointment Button on the left */}
        <div className="w-80">
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl mb-4">
            Add Appointments
          </h3>
          <Calendar
            onChange={handleDateChange}
            value={date}
            className="border rounded-lg shadow-sm"
          />
          <Link to="/doctors1">
            <button
              className="mt-4 py-2 px-4 bg-[#051B40] text-white rounded-md shadow-sm hover:bg-[#040F2F] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Add Appointment
            </button>
          </Link>
        </div>

        {/* Appointments Table on the right */}
        <div className="flex-grow ml-8">
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl mb-4">
            Ongoing Appointments
          </h3>
          <div className="shadow-sm border rounded-lg overflow-x-auto">
            <table className="w-full table-auto text-sm text-left">
              <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                <tr>
                  <th className="py-3 px-6">Time</th>
                  <th className="py-3 px-6">Patient Name</th>
                  <th className="py-3 px-6">Doctor</th>
                  <th className="py-3 px-6">Room No</th>
                  <th className="py-3 px-6">Payment Status</th>
                </tr>
              </thead>
              <tbody className="text-black divide-y">
                {tableItems.map((item, idx) => (
                  <tr key={idx}>
                    <td className="px-6 py-4 whitespace-nowrap">{item.time}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.doc}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.room}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-4 py-3 rounded-full font-semibold text-xs ${item.status === "Done" ? "text-green-600 bg-green-50" : "text-blue-600 bg-blue-50"}`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Cards for Schedule and Payment pages */}
      <div className="mt-8 flex justify-between">

        <Link to="/schedule" className="w-1/2 p-10 bg-[#051B40] border rounded-lg shadow-sm mr-4 hover:bg-[#051B40]">
        <div className="flex-none">
        <FaRegClipboard />
        </div>
          <h3 className="text-white text-xl font-bold sm:text-2xl mb-4">Schedule</h3>
        </Link>

        <Link to="/unpaid" className="w-1/2 p-10 bg-[#051B40] border rounded-lg shadow-sm ml-4 hover:bg-[#051B40]">
        <div className="flex-none">
        <FaMoneyCheckAlt />
        </div>
          <h3 className="text-white text-xl font-bold sm:text-2xl mb-4">Payments</h3>
        </Link>
      </div>
    </div>
  );
};

export default AppointmentPage;
