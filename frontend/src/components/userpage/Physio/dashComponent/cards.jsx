import React from 'react';
import { FaCalendarCheck, FaUserMd, FaDumbbell } from 'react-icons/fa'; // Import icons
import { Link } from 'react-router-dom';

export default function Cards() {
  return (
    <div className="mt-8 flex space-x-4">
      <Link to="/appoinments">
      <div className="border rounded-lg bg-blue-100 p-4 shadow-md w-96 h-32 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <FaCalendarCheck className="text-4xl text-gray-800" />
          <h4 className="text-gray-800 font-semibold text-lg">Appointments</h4>
        </div>
        <p className="text-gray-600 text-4xl text-right">30</p>
      </div> 
      </Link>
     
      <Link to="/reservationSchedule">

      <div className="border rounded-lg bg-blue-100 p-4 shadow-md w-96 h-32 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <FaUserMd className="text-4xl text-gray-800" />
          <h4 className="text-gray-800 font-semibold text-lg">Patients</h4>
        </div>
        <p className="text-gray-600 text-4xl text-right">15</p>
      </div>
      </Link>

      <Link to="/gymNavibar">

      
      <div className="border rounded-lg bg-blue-100 p-4 shadow-md w-96 h-32 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <FaDumbbell className="text-4xl text-gray-800" />
          <h4 className="text-gray-800 font-semibold text-lg">Workouts</h4>
        </div>
        <p className="text-gray-600 text-4xl text-right">20</p>
      </div>
      </Link>

    </div>
    
  );
}



// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaCalendarCheck, FaUserMd, FaDumbbell } from 'react-icons/fa'; // Import icons

// export default function Cards() {
//   return (
//     <div className="mt-8 flex justify-between">
//       <Link to="/appoinments" className="w-1/2 p-10 bg-[#172B59] border rounded-lg shadow-sm mr-4 hover:bg-[#051B40]">
//         <div className="flex items-center mb-4">
//           <FaCalendarCheck className="text-white text-3xl mr-4" /> {/* Appointments Icon */}
//           <h3 className="text-white text-xl font-bold sm:text-2xl">Appointments</h3>
//         </div>
//       </Link>

//       <Link to="/dashboard" className="w-1/2 p-10 bg-[#172B59] border rounded-lg shadow-sm ml-4 hover:bg-[#051B40]">
//         <div className="flex items-center mb-4">
//           <FaUserMd className="text-white text-3xl mr-4" /> {/* Physios Icon */}
//           <h3 className="text-white text-xl font-bold sm:text-2xl">Physios</h3>
//         </div>
//       </Link>

//       <Link to="/gymNavibar" className="w-1/2 p-10 bg-[#172B59] border rounded-lg shadow-sm ml-4 hover:bg-[#051B40]">
//         <div className="flex items-center mb-4">
//           <FaDumbbell className="text-white text-3xl mr-4" /> {/* Gym Icon */}
//           <h3 className="text-white text-xl font-bold sm:text-2xl">GYM</h3>
//         </div>
//       </Link>
//     </div>
//   );
// }
