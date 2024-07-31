import React from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarCheck, FaUserMd, FaDumbbell } from 'react-icons/fa'; // Import icons

export default function Cards() {
  return (
    <div className="mt-8 flex justify-between">
      <Link to="/dashboard" className="w-1/3 p-10 bg-[#a4c2f5]  border rounded-lg shadow-sm mr-4 hover:bg-[#385381]  ">
        <div className="flex items-start justify-center p-4">
          <FaCalendarCheck className="text-black text-4xl mr-2 hover:text-white " /> {/* Appointments Icon */}
          <h3 className="text-black text-xl font-bold sm:text-2xl hover:text-white ">Appointments</h3>
        </div>
      </Link>

      <Link to="/dashboard" className="w-1/3 p-10 bg-[#a4c2f5] border rounded-lg shadow-sm ml-4 hover:bg-[#385381]">
        <div className="flex items-start justify-center p-4">
          <FaUserMd className="text-black text-4xl mr-2 hover:text-white" /> {/* Physios Icon */}
          <h3 className="text-black text-xl font-bold sm:text-3xl hover:text-white">Physios</h3>
        </div>
      </Link>

      <Link to="/dashboard" className="w-1/3 p-10 bg-[#a4c2f5]  border rounded-lg shadow-sm ml-4 hover:bg-[#385381]">
        <div className="flex items-start justify-center p-4">
          <FaDumbbell className="text-black text-4xl mr-2 hover:text-white" /> {/* Gym Icon */}
          <h3 className="text-black text-xl font-bold sm:text-3xl hover:text-white">GYM</h3>
        </div>
      </Link>
    </div>

    
  );
}


