import React from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarCheck, FaUserMd, FaDumbbell } from 'react-icons/fa'; // Import icons

export default function Cards() {
  return (
    <div className="mt-8 flex justify-between">
      <Link to="/dashboard" className="w-1/2 p-10 bg-[#172B59] border rounded-lg shadow-sm mr-4 hover:bg-[#051B40]">
        <div className="flex items-center mb-4">
          <FaCalendarCheck className="text-white text-3xl mr-4" /> {/* Appointments Icon */}
          <h3 className="text-white text-xl font-bold sm:text-2xl">Appointments</h3>
        </div>
      </Link>

      <Link to="/dashboard" className="w-1/2 p-10 bg-[#172B59] border rounded-lg shadow-sm ml-4 hover:bg-[#051B40]">
        <div className="flex items-center mb-4">
          <FaUserMd className="text-white text-3xl mr-4" /> {/* Physios Icon */}
          <h3 className="text-white text-xl font-bold sm:text-2xl">Physios</h3>
        </div>
      </Link>

      <Link to="/dashboard" className="w-1/2 p-10 bg-[#172B59] border rounded-lg shadow-sm ml-4 hover:bg-[#051B40]">
        <div className="flex items-center mb-4">
          <FaDumbbell className="text-white text-3xl mr-4" /> {/* Gym Icon */}
          <h3 className="text-white text-xl font-bold sm:text-2xl">GYM</h3>
        </div>
      </Link>
    </div>
  );
}
