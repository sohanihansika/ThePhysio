import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link, useNavigate } from 'react-router-dom';
import UserService from '../../service/UserService';
import BookingService from '../../service/BookingService';
import Swal from 'sweetalert2';


const Appointments = () => {
  const [users, setUsers] = useState({});

  const [selectedDate, setSelectedDate] = useState(null);
  const [statusSearchQuery, setStatusSearchQuery] = useState('');
  const [userSearchQuery, setUserSearchQuery] = useState('');
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  const fetchAppointments = async () => {
    try {
      const token = localStorage.getItem('token');
      const fetchedAppointments = await BookingService.getAllBookings(token);
      setAppointments(fetchedAppointments);
    } catch (err) {
      console.error('Error fetching appointments:', err);
      alert('Failed to fetch appointments.');
    }
  };

  const fetchUserDetails = async (userId) => {
    try {
      const token = localStorage.getItem('token');
      const user = await UserService.getUserById(userId, token);
      setUsers(prevUsers => ({...prevUsers, [userId]: user}));
    } catch (err) {
      console.error('Error fetching user details:', err);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  useEffect(() => {
    appointments.forEach(appointment => {
      if (appointment.userId && !users[appointment.userId]) {
        fetchUserDetails(appointment.userId);
      }
    });
  }, [appointments]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleDelete = async (appointmentId) => {
    const token = localStorage.getItem('token');
    try {
      const confirmDelete = window.confirm('Are you sure you want to delete this appointment?');
      if (confirmDelete) {
        await BookingService.deleteBooking(appointmentId, token);
        alert('Booking deleted successfully');
        fetchAppointments();
      }
    } catch (err) {
      console.error('Error deleting booking:', err);
      alert('Failed to delete booking.');
    }
  };

  const handleButtonClick = () => {
    if (selectedDate) {
      const currentDate = new Date();
      currentDate.setHours(0, 0, 0, 0);
      const selectedDateWithoutTime = new Date(selectedDate);
      selectedDateWithoutTime.setHours(0, 0, 0, 0);

      if (selectedDateWithoutTime < currentDate) {
        navigate('/pastSchedule');
      } else if (selectedDateWithoutTime > currentDate) {
        navigate('/futureSchedule');
      } else {
        window.location.reload();
      }
    } else {
      alert("Please select a date first.");
    }
  };

  const handleStatusSearchChange = (e) => {
    setStatusSearchQuery(e.target.value);
  };

  const handleUserSearchChange = (e) => {
    setUserSearchQuery(e.target.value);
  };

  const filteredAppointments = appointments.filter((appointment) => {
    const matchesUserId = userSearchQuery
      ? appointment.userId.toLowerCase().includes(userSearchQuery.toLowerCase())
      : true;
    const matchesStatus = statusSearchQuery
      ? appointment.paymentStatus.toLowerCase().includes(statusSearchQuery.toLowerCase())
      : true;

    return matchesUserId && matchesStatus;
  });

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
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 mt-6">
      <div className="mb-4 flex justify-between items-center">
        <h3 className="text-gray-800 text-2xl font-bold sm:text-2xl mr-4">Appointments</h3>
        <div className="flex items-center ml-auto">
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            className="px-4 py-2 border rounded-md"
            placeholderText="Select a date for schedule"
          />
          <button
            onClick={handleButtonClick}
            className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            View Schedule
          </button>
        </div>
      </div>

      <div className="mb-4 flex gap-6">
        <div className="mt-5 flex items-center space-x-4">
          <label htmlFor="user-search" className="text-sm font-medium text-black">User ID:</label>
          <input
            id="user-search"
            type="text"
            placeholder="Enter user ID..."
            value={userSearchQuery}
            onChange={handleUserSearchChange}
            className="w-1/2 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div className="mt-5 flex items-center space-x-4">
          <label htmlFor="status-search" className="text-sm font-medium text-black">Payment Status:</label>
          <input
            id="status-search"
            type="text"
            placeholder="Enter status..."
            value={statusSearchQuery}
            onChange={handleStatusSearchChange}
            className="w-1/2 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
      </div>

      <div className="mt-6 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">User</th>
              <th className="py-3 px-6">Physio</th>
              <th className="py-3 px-6">Date</th>
              <th className="py-3 px-6">Time</th>
              <th className="py-3 px-6">Payment Status</th>
              <th className="py-3 px-6"></th>
              <th className="py-3 px-6"></th>

            </tr>
          </thead>
          <tbody className="text-black divide-y">
            {filteredAppointments.map((appointment, idx) => (
              <tr key={idx}>
<td className="px-6 py-4 whitespace-nowrap">
            {appointment.userId || 'Unknown User'}
          </td>                <td className="px-6 py-4 whitespace-nowrap">{appointment.physioId || 'Unknown Physio'}</td>
                <td className="px-6 py-4 whitespace-nowrap">{appointment.date ? new Date(appointment.date).toLocaleDateString() : 'N/A'}</td>
                <td className="px-6 py-4 whitespace-nowrap">{appointment.timeslot || 'N/A'}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-4 py-3 rounded-full font-semibold text-xs ${
                      appointment.paymentStatus === 'Paid'
                        ? 'text-green-600 bg-green-50'
                        : appointment.paymentStatus === 'Pending'
                        ? 'text-yellow-600 bg-yellow-50'
                        : 'text-red-600 bg-red-50'
                    }`}
                  >
                    {appointment.paymentStatus || 'Unknown'}
                  </span>
                  
                </td>
                <button
  onClick={() => handleReschedule(appointment)}
  className="py-1 px-2 font-medium text-white bg-[#172b59] rounded-md shadow-sm hover:bg-[#101b3e] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#172b59] focus:ring-opacity-50 transform transition-transform duration-150 hover:scale-105 active:scale-95 mr-2"
>
  Reschedule
</button>
                <td className="text-right px-6 whitespace-nowrap flex">
                  <button
                    onClick={() => handleDelete(appointment.id)}
                    className="py-2 px-4 font-medium text-white bg-red-700 rounded-lg shadow-md hover:bg-red-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transform transition-transform duration-150 hover:scale-105 active:scale-95"
                  >
                      Delete  
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Appointments;
