import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import BookingService from '../../service/BookingService';
import UserService from '../../service/UserService';

const Appointments = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [appointments, setAppointments] = useState([]);
  const [users, setUsers] = useState({});

  // Fetch appointments with payment status "Not Paid"
  const fetchAppointments = async () => {
    try {
      const token = localStorage.getItem('token');
      const allAppointments = await BookingService.getAllBookings(token);
      console.log('All appointments:', allAppointments);
      const unpaidAppointments = allAppointments.filter(
        (appointment) => appointment.paymentStatus === 'Not Paid'
      );
      console.log('Unpaid appointments:', unpaidAppointments);
      setAppointments(unpaidAppointments);
    } catch (err) {
      console.error('Error fetching appointments:', err);
      alert('Failed to fetch appointments.');
    }
  };

  // Fetch user details by userId
  const fetchUserDetails = async (userId) => {
    try {
      const token = localStorage.getItem('token');
      const user = await UserService.getUserById(userId, token);
      setUsers((prevUsers) => ({ ...prevUsers, [userId]: user }));
    } catch (err) {
      console.error('Error fetching user details:', err);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  useEffect(() => {
    appointments.forEach((appointment) => {
      if (appointment.userId && !users[appointment.userId]) {
        fetchUserDetails(appointment.userId);
      }
    });
  }, [appointments]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handlePaymentConfirmation = (appointmentId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to change the state from "Not Paid" to "Paid"?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, proceed',
      cancelButtonText: 'Cancel',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const token = localStorage.getItem('token');
  
          // Fetch the full appointment details
          const appointment = await BookingService.getBookingById(appointmentId, token);
          
          // Prepare the updated appointment object
          const updatedAppointment = { 
            ...appointment, 
            paymentStatus: 'Paid' // Update the payment status
          };
  
          // Send the update request
          const response = await BookingService.BookingUpdate(updatedAppointment, token);
  
          if (response.statusCode === 200 || response.success) {
            Swal.fire('Error!', response.message || 'Failed to update payment status.', 'error');
            fetchAppointments(); // Refresh the appointments list
          } else {
            Swal.fire('Updated!', 'The payment status has been updated to "Paid".', 'success');
            fetchAppointments(); // Refresh the appointments list


          }
          
        } catch (err) {
          console.error('Error updating payment status:', err);
          Swal.fire('Error!', 'An unexpected error occurred. Please try again.', 'error');
        }
      }
    });
  };
  
  

  const filteredAppointments = appointments.filter((appointment) =>
    users[appointment.userId]?.name?.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 mt-6">
      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">Payments</h3>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mt-5 flex items-center space-x-4">
        <label htmlFor="search" className="text-sm font-medium text-black">Search Patient</label>
        <input
          type="text"
          id="search"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Enter patient name"
          className="w-1/4 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>

      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">Id</th>
              <th className="py-3 px-6">Patient Id</th>
              <th className="py-3 px-6">Physio Id</th>
              <th className="py-3 px-6">Time</th>
              <th className="py-3 px-6">Payment Status</th>
              <th className="py-3 px-6"></th>
            </tr>
          </thead>
          <tbody className="text-black divide-y">
            {appointments.length > 0 ? (
              appointments.map((appointment, idx) => (
                <tr key={idx}>
                  <td className="px-6 py-4 whitespace-nowrap">{appointment.id}</td>
                  {/* <td className="px-6 py-4 whitespace-nowrap">{users[appointment.userId]?.name || 'Unknown'}</td> */}
                  <td className="px-6 py-4 whitespace-nowrap">{appointment.userId}</td>

                  <td className="px-6 py-4 whitespace-nowrap">{appointment.physioId}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{appointment.timeslot}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-4 py-3 rounded-full font-semibold text-xs text-blue-600 bg-blue-50">
                      {appointment.paymentStatus}
                    </span>
                  </td>
                  <td className="text-center whitespace-nowrap">
                    <button
                      onClick={() => handlePaymentConfirmation(appointment.id)}
                      className="py-1.5 px-3 text-white duration-150 bg-[#051B40] border rounded-lg"
                    >
                      Pay
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="py-4 text-center text-gray-500">No unpaid appointments found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Appointments;