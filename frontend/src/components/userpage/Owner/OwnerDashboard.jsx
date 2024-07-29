import React from 'react';
import { FaUsers, FaDollarSign, FaCalendarAlt, FaClipboardList, FaUserMd, FaDumbbell, FaClipboardCheck, FaUserPlus, FaMoneyBillWave, FaHeartbeat, FaRunning, FaClipboard } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="bg-white shadow p-4 rounded-lg mb-6">
        <h1 className="text-3xl font-bold text-center text-[#000099]">Welcome Keheliya!</h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow p-4 rounded-lg">
          <div className="flex items-center mb-4">
            <FaUserPlus className="text-green-500 text-3xl mr-3" />
            <h2 className="text-xl font-bold">Total Gym Members Added Today</h2>
          </div>
          <p className="text-3xl font-bold text-center">10</p>
        </div>

        <div className="bg-white shadow p-4 rounded-lg">
          <div className="flex items-center mb-4">
            <FaUserPlus className="text-green-500 text-3xl mr-3" />
            <h2 className="text-xl font-bold">Total Patients Added Today <br /> </h2>
          </div>
          <p className="text-3xl font-bold text-center">4</p>
        </div>

        <div className="bg-white shadow p-4 rounded-lg">
          <div className="flex items-center mb-4">
            <FaHeartbeat className="text-red-500 text-3xl mr-3" />
            <h2 className="text-xl font-bold">Physiotherapy Sessions Conducted Today</h2>
          </div>
          <p className="text-3xl font-bold text-center">5</p>
        </div>

        <div className="bg-white shadow p-4 rounded-lg">
          <div className="flex items-center mb-4">
            <FaRunning className="text-blue-500 text-3xl mr-3" />
            <h2 className="text-xl font-bold">Gym Sessions Conducted Today</h2>
          </div>
          <p className="text-3xl font-bold text-center">8</p>
        </div>

        <div className="bg-white shadow p-4 rounded-lg">
          <div className="flex items-center mb-4">
            <FaMoneyBillWave className="text-yellow-500 text-3xl mr-3" />
            <h2 className="text-xl font-bold">Today's Revenue</h2>
          </div>
          <p className="text-3xl font-bold text-center">$1,000</p>
        </div>

        <div className="bg-white shadow p-4 rounded-lg">
          <div className="flex items-center mb-4">
            <FaCalendarAlt className="text-[#000099] text-3xl mr-3" />
            <h2 className="text-xl font-bold">Upcoming Gym Classes</h2>
          </div>
          <ul className="text-gray-700">
            <li>Yoga - 10:00 AM</li>
            <li>Zumba - 12:00 PM</li>
            <li>Pilates - 02:00 PM</li>
          </ul>
        </div>

        <div className="bg-white shadow p-4 rounded-lg">
          <div className="flex items-center mb-4">
            <FaClipboard className="text-[#000099] text-3xl mr-3" />
            <h2 className="text-xl font-bold">Upcoming Physiotherapy Sessions</h2>
          </div>
          <ul className="text-gray-700">
            <li>Session with Dr. Smith - 11:00 AM</li>
            <li>Session with Dr. Johnson - 01:00 PM</li>
            <li>Session with Dr. Brown - 03:00 PM</li>
          </ul>
        </div>

        <div className="bg-white shadow p-4 rounded-lg">
          <div className="flex items-center mb-4">
            <FaClipboardCheck className="text-[#000099] text-3xl mr-3" />
            <h2 className="text-xl font-bold">Recent Activities</h2>
          </div>
          <ul className="text-gray-700">
            <li>New member registered - John Doe</li>
            <li>Membership renewed - Jane Smith</li>
            <li>Physiotherapy session booked - Mark Johnson</li>
          </ul>
        </div>

        <div className="bg-white shadow p-4 rounded-lg">
          <div className="flex items-center mb-4">
            <FaClipboardList className="text-[#000099] text-3xl mr-3" />
            <h2 className="text-xl font-bold">Financial Reports</h2>
          </div>
          <ul className="text-gray-700">
            <li>July Revenue: $10,000</li>
            <li>June Revenue: $8,000</li>
            <li>May Revenue: $9,000</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow p-4 rounded-lg">
          <div className="flex items-center mb-4">
            <FaDumbbell className="text-[#000099] text-3xl mr-3" />
            <h2 className="text-xl font-bold">Gym Members Management</h2>
          </div>
          <button className="bg-[#000099] text-white p-2 rounded-md hover:bg-[#00007f] w-full">
            Manage Members
          </button>
        </div>

        <div className="bg-white shadow p-4 rounded-lg">
          <div className="flex items-center mb-4">
            <FaUserMd className="text-[#000099] text-3xl mr-3" />
            <h2 className="text-xl font-bold">Clinic Staff Management</h2>
          </div>
          <button className="bg-[#000099] text-white p-2 rounded-md hover:bg-[#00007f] w-full">
            Manage Staff
          </button>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow p-4 rounded-lg">
          <div className="flex items-center mb-4">
            <FaClipboardList className="text-[#000099] text-3xl mr-3" />
            <h2 className="text-xl font-bold">Gym Coach Management</h2>
          </div>
          <button className="bg-[#000099] text-white p-2 rounded-md hover:bg-[#00007f] w-full">
            Manage Coaches
          </button>
        </div>

        <div className="bg-white shadow p-4 rounded-lg">
          <div className="flex items-center mb-4">
            <FaClipboardList className="text-[#000099] text-3xl mr-3" />
            <h2 className="text-xl font-bold">Physiotherapist Management</h2>
          </div>
          <button className="bg-[#000099] text-white p-2 rounded-md hover:bg-[#00007f] w-full">
            Manage Physiotherapists
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
