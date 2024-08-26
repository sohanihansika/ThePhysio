import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingService from '../../service/BookingService';

function EmpUpdate() {
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(window.location.search);
  const bookingId = queryParams.get('bookingId');
  const [error, setError] = useState('');
  const [emptyFieldError, setEmptyFieldError] = useState('');

  const [initialBookingData, setInitialBookingData] = useState(null);
  const [bookingData, setBookingData] = useState({
    userId: '',
    physioId: '',
    date: '',
    timeslot: '',
  });

  useEffect(() => {
    if (bookingId) {
      fetchBookingById(bookingId);
    } else {
      console.error('No bookingId provided');
    }
  }, [bookingId]);

  const fetchBookingById = async (bookingId) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('No token found');
      
      console.log('Fetching booking ID:', bookingId);
      
      const response = await BookingService.getBookingById(bookingId, token);
      
      // Log the entire response
      console.log('Full API response:', response);
      
      // Check if response is an object and contains expected fields
      if (response && response.userId) {
        console.log('Fetched booking data:', response);
        
        setInitialBookingData(response);
        setBookingData(response);
        
        // Log the updated state values
        console.log('Initial Booking Data:', response);
        console.log('Booking Data:', response);
      } else {
        console.error('Booking data is undefined or null');
      }
    } catch (error) {
      console.error('Error fetching booking data:', error.response?.data || error.message);
    }
  };
  
  
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData(prevBookingData => ({
      ...prevBookingData,
      [name]: value
    }));
  };

  const isFormChanged = () => {
    return JSON.stringify(initialBookingData) !== JSON.stringify(bookingData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!bookingData.userId || !bookingData.physioId || !bookingData.date || !bookingData.timeslot) {
      setEmptyFieldError('All fields must have values.');
      setTimeout(() => setEmptyFieldError(''), 5000);
      return;
    }

    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('No token found');

      if (isFormChanged()) {
        const confirmUpdate = window.confirm('Are you sure you want to update this booking?');
        if (confirmUpdate) {
          const res = await BookingService.BookingUpdate(bookingData, token);
          if (res.statusCode === 400) {
            setError('Email is already taken by another user');
          } else {
            navigate('/schedule');
          }
        }
      } else {
        navigate('/schedule');
      }
    } catch (error) {
      if (error.response?.status === 400) {
        setError('Email is already taken by another user');
      }
      console.error('Error updating booking:', error.response?.data || error.message);
      alert('Failed to update booking. Please check the console for more details.');
    }
  };

  return (
    <div className="profile-page-container">
      <section className="p-6 dark:text-gray-800">
        <form onSubmit={handleSubmit} className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-50">
          <h2 className="w-full text-3xl font-bold leading-tight text-center">Edit Booking</h2>
          <div>
            <label htmlFor="userId" className="block mb-1 ml-1 font-bold">User ID:</label>
            <input
              id="userId"
              type="text"
              name="userId"
              value={bookingData.userId}
              onChange={handleInputChange}
              className="block w-full p-2 rounded bg-gray-100"
            />
          </div>
          <div>
            <label htmlFor="physioId" className="block mb-1 ml-1 font-bold">Physio ID:</label>
            <input
              id="physioId"
              type="text"
              name="physioId"
              value={bookingData.physioId}
              onChange={handleInputChange}
              className="block w-full p-2 rounded bg-gray-100"
            />
          </div>
          <div>
            <label htmlFor="date" className="block mb-1 ml-1 font-bold">Date:</label>
            <input
              id="date"
              type="text"
              name="date"
              value={bookingData.date}
              onChange={handleInputChange}
              className="block w-full p-2 rounded bg-gray-100"
            />
          </div>
          <div>
            <label htmlFor="timeslot" className="block mb-1 ml-1 font-bold">Timeslot:</label>
            <input
              id="timeslot"
              type="text"
              name="timeslot"
              value={bookingData.timeslot}
              onChange={handleInputChange}
              className="block w-full p-2 rounded bg-gray-100"
            />
          </div>
          <div>
            <button type="submit" className="w-full px-4 py-2 font-bold rounded shadow text-center block bg-[#172b59] text-gray-50 hover:bg-[#425ea0]">Update</button>
            {error && <p className="text-red-500 text-center mt-2">{error}</p>}
            {emptyFieldError && <p className="text-red-500 text-center mt-2">{emptyFieldError}</p>}
          </div>
        </form>
      </section>
    </div>
  );
}

export default EmpUpdate;
