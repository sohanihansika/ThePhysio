import React, { useState } from 'react';
import { Calendar } from 'react-calendar';
import { Link, useNavigate } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css'; // Import calendar styles
import { FaMoneyCheckAlt, FaRegClipboard } from "react-icons/fa";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registering the chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AppointmentPage = () => {
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleDateChange = (newDate) => {
    setDate(newDate);

    // Check if the newDate is today or in the future
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset time part to compare only the date

    if (newDate >= today) {
      navigate('/doctors1'); // Navigate to doctors1 page when a date is selected
    }
  };

  const tableItems = [
    { time: "9.00 - 9.30", name: "Bob", doc: "Steven", room: "1", status: "Done" },
    { time: "9.00 - 9.30", name: "Christine", doc: "Peter", room: "2", status: "Pending" },
    { time: "9.00 - 9.30", name: "Yasmine", doc: "Lewis", room: "3", status: "Done" },
    { time: "9.00 - 9.30", name: "Charlotte", doc: "John", room: "4", status: "Not Paid" },
  ];

  // Data for charts
  const sessionsData = {
    labels: ['Morning', 'Afternoon', 'Evening'],
    datasets: [
      {
        label: 'Total Sessions',
        data: [30, 45, 20], // Example data for total sessions
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const monthlyAppointmentsData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Monthly Appointments',
        data: [120, 150, 170, 140], // Example data
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="container">
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        

    <ul className="mt-16 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
     
    <li className="border rounded-lg bg-blue-100 p-2 shadow-md w-84 h-32">
      <Link to="/schedule" className="w-full h-full">
        <div className="flex items-center justify-between p-2 h-full">
          <div className="flex items-center space-x-2">
            <span className="text-4xl"><FaRegClipboard/></span>
            <h4 className="text-gray-800 font-semibold text-lg">Schedule</h4>
          </div>
        </div>
      </Link>
    </li>
    <li className="border rounded-lg bg-blue-100 p-2 shadow-md w-84 h-32">
      <Link to="/unpaid" className="w-full h-full">
        <div className="flex items-center justify-between p-2 h-full">
          <div className="flex items-center space-x-2">
            <span className="text-4xl"><FaMoneyCheckAlt/></span>
            <h4 className="text-gray-800 font-semibold text-lg">Payments</h4>
          </div>
        </div>
      </Link>
    </li>
        
         
     </ul>

 
 </div>
 <div style={{ marginTop: '50px' }}>
        {/* Content for the second section */}
      </div>    <div className="max-w-screen-xl mx-auto px-4 md:px-8 mt-6 style={{ marginTop: '100px' }}">
      
      <div className="flex flex-col lg:flex-row">
        {/* Left Side: Calendar */}
        <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl mb-4">
            Add Appointment
          </h3>
          <Calendar
            onChange={handleDateChange}
            value={date}
            className="border rounded-lg shadow-sm"
          />
        </div>

        {/* Right Side: Appointments Table */}
        <div className="w-full lg:w-2/3 lg:pl-8">
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl mb-4">
            Ongoing Appointments
          </h3>
          <div className="shadow-sm border rounded-lg overflow-x-auto mb-8">
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

      {/* Charts Section */}
      <div className="flex flex-col lg:flex-row mt-8">
        <div className="w-full lg:w-1/2 p-4 lg:pl-0 lg:pr-4 mb-8">
          <h3 className="text-gray-800 text-xl font-bold mb-4">
            Total Sessions
          </h3>
          <div className="w-full h-[200px]"> {/* Increased height */}
            <Bar data={sessionsData} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </div>
        <div className="w-full lg:w-1/2 p-4 lg:pl-4 lg:pr-0">
          <h3 className="text-gray-800 text-xl font-bold mb-4">
            Monthly Appointments
          </h3>
          <div className="w-full h-[200px]"> {/* Increased height */}
            <Bar data={monthlyAppointmentsData} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </div>
      </div>

      
      

    </div>
    </div>

  );
};

export default AppointmentPage;
