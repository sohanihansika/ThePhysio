import React, { useEffect, useState } from 'react';
import BookingService from '../../service/BookingService';
import UserService from '../../service/UserService';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [users, setUsers] = useState({});
  const [selectedTab, setSelectedTab] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchAppointments = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      const fetchedAppointments = await BookingService.getAllBookings(token);
      setAppointments(fetchedAppointments);
    } catch (err) {
      console.error('Error fetching appointments:', err);
      alert('Failed to fetch appointments.');
    } finally {
      setLoading(false);
    }
  };



 const fetchUserDetails = async () => {
  try {
    const token = localStorage.getItem('token');
    // Collect unique user and physio IDs
    const userIds = [...new Set(appointments.map((a) => a.userId))];
    const physioIds = [...new Set(appointments.map((a) => a.physioId))];
    const uniqueIds = [...new Set([...userIds, ...physioIds])];

    // Fetch details for all unique IDs
    const userPromises = uniqueIds.map((id) => UserService.getUserById(id, token));
    const userResponses = await Promise.all(userPromises);

    // Map user IDs to user details
    const userMap = userResponses.reduce((acc, response) => {
      if (response?.ourUsers) {
        acc[response.ourUsers.id] = response.ourUsers;
      }
      return acc;
    }, {});
    setUsers(userMap);
  } catch (err) {
    console.error('Error fetching user details:', err);
  }
};


  const filterAppointments = () => {
    const now = new Date();
    const upcoming = appointments.filter((appointment) => new Date(appointment.date) > now);
    const past = appointments.filter((appointment) => new Date(appointment.date) <= now);
    return [upcoming, past];
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  useEffect(() => {
    if (appointments.length > 0) {
      fetchUserDetails();
    }
  }, [appointments]);

  const [upcomingAppointments, pastAppointments] = filterAppointments();

  const tabs = [
    { label: 'Upcoming', data: upcomingAppointments },
    { label: 'Past', data: pastAppointments },
  ];

  const labelColors = {
    "Good": "text-green-600 bg-green-50",
    "Normal": "text-blue-600 bg-blue-50",
    "Great": "text-pink-600 bg-pink-50",
    "Bad": "text-red-600 bg-red-50",
  };

  const handleDelete = async (appointmentId) => {
    const token = localStorage.getItem('token');
    
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you really want to delete this appointment?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await BookingService.deleteBooking(appointmentId, token);
          Swal.fire('Deleted!', 'The appointment has been deleted.', 'success');
          fetchAppointments(); // Refresh the appointments list
        } catch (err) {
          console.error('Error deleting booking:', err);
          Swal.fire('Error!', 'Failed to delete booking. Please try again later.', 'error');
        }
      }
    });
  };
  
  const handleReschedule = (appointment) => {
    const today = new Date();
    const scheduledDate = new Date(appointment.date);
  
    // Check if today's date is at least 2 days before the scheduled date
    const diffInTime = scheduledDate - today;
    const diffInDays = Math.ceil(diffInTime / (1000 * 60 * 60 * 24));
  
    if (diffInDays >= 2) {
      // Navigate to the reschedule page
      window.location.href = `/recalendar?physioId=${appointment.physioId}&Slot=${appointment.timeslot}&Id=${appointment.id}&date=${appointment.date.split('T')[0]}`;
    } else {
      // Show SweetAlert message
      Swal.fire({
        icon: 'error',
        title: 'Cannot Reschedule',
        text: 'Sorry, you can only reschedule at least 2 days before the scheduled date.',
        confirmButtonText: 'OK',
      });
    }
  };
  
  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      <h1 className="text-2xl font-bold mb-4">Appointments</h1>

      {loading ? (
        <div className="flex justify-center items-center my-4">
          <div className="loader">Loading...</div>
        </div>
      ) : (
        <>
          <ul role="tablist" className="w-full border-b flex items-center gap-x-3 overflow-x-auto">
            {tabs.map((tab, idx) => (
              <li
                key={idx}
                className={`py-2 border-b-2 ${selectedTab === idx ? 'border-indigo-600 text-indigo-600' : 'border-white text-gray-500'}`}
              >
                <button
                  role="tab"
                  aria-selected={selectedTab === idx}
                  className="py-2.5 px-4 rounded-lg duration-150 hover:text-indigo-600 hover:bg-gray-50 active:bg-gray-100 font-medium"
                  onClick={() => setSelectedTab(idx)}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>

          <table className="w-full table-auto text-left mt-6">
            <thead className="text-gray-600 font-medium border-b">
              <tr>
                <th className="w-4/12 py-4 pr-6">Physio</th>
                <th className="w-4/12 py-4 pr-6">Date</th>
                <th className="w-4/12 py-4 pr-6">Time</th>
                <th className="w-4/12 py-4 pr-6">Status</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 divide-y">
              {tabs[selectedTab].data.map((appointment, idx) => (
                <tr key={idx}>
                  <td className="pr-6 py-4 whitespace-nowrap">
                     {users[appointment.physioId]?.name || 'Unknown Physio'}
                  </td>
                  <td className="pr-6 py-4 whitespace-nowrap">
                    {new Date(appointment.date).toLocaleDateString()}
                  </td>
                  <td className="pr-6 py-4 whitespace-nowrap">
                    {appointment.timeslot}
                  </td>

                  <td className="pr-6 py-4 whitespace-nowrap">
                    <span className={`py-2 px-3 rounded-full font-semibold text-xs
                      ${appointment.paymentStatus === 'Not Paid' ? 'text-red-600 bg-red-50' : 'text-green-600 bg-green-50'}`}>
                      {appointment.paymentStatus || 'N/A'}
                    </span>
                  </td>

                  <td className="text-right px-6 whitespace-nowrap flex">
           {selectedTab === 0 && (
    <>
      <button
  onClick={() => handleReschedule(appointment)}
  className="py-1 px-2 font-medium text-white bg-[#172b59] rounded-md shadow-sm hover:bg-[#101b3e] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#172b59] focus:ring-opacity-50 transform transition-transform duration-150 hover:scale-105 active:scale-95 mr-2"
>
  Reschedule
</button>

      <button
        onClick={() => handleDelete(appointment.id)}
        className="py-1 px-2 font-medium text-white bg-red-700 rounded-md shadow-sm hover:bg-red-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transform transition-transform duration-150 hover:scale-105 active:scale-95"
      >
        Delete
      </button>
    </>
  )}
</td>

                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default Appointments;