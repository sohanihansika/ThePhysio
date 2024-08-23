import React from 'react';
import { FaCalendarCheck, FaUserMd, FaDumbbell } from 'react-icons/fa'; // Import icons

export default function Cards() {
  return (
    <div className="mt-8 flex space-x-4 ml-10">
      <div className="border rounded-lg bg-blue-100 p-4 shadow-md w-96 h-32 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <FaCalendarCheck className="text-4xl text-gray-800" />
          <h4 className="text-gray-800 font-semibold text-lg">Appointments</h4>
        </div>
        <p className="text-gray-600 text-4xl text-right">30</p>
      </div>
      
      <div className="border rounded-lg bg-blue-100 p-4 shadow-md w-96 h-32 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <FaUserMd className="text-4xl text-gray-800" />
          <h4 className="text-gray-800 font-semibold text-lg">Patients</h4>
        </div>
        <p className="text-gray-600 text-4xl text-right">15</p>
      </div>
      
      <div className="border rounded-lg bg-blue-100 p-4 shadow-md w-96 h-32 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <FaDumbbell className="text-4xl text-gray-800" />
          <h4 className="text-gray-800 font-semibold text-lg">Workouts</h4>
        </div>
        <p className="text-gray-600 text-4xl text-right">20</p>
      </div>
    </div>
  );
}
