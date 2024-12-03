import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import BookingService from '../../service/BookingService'; // Adjust the import path

const TimeSlots = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const queryParams = new URLSearchParams(location.search);
  const physioId = queryParams.get('physioId');
  const selectedDate = queryParams.get('date');
  
  const [redSlots, setRedSlots] = useState([]);
  const token = localStorage.getItem("token");// Assuming you have a function to get the auth token
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const allBookings = await BookingService.getAllBookings(token);
        console.log("NotfilteredBookings", allBookings);
  
        // Normalize selectedDate to match the format in allBookings
        const formattedSelectedDate = new Date(selectedDate).toISOString().split('T')[0];
        console.log("Formatted Selected Date:", formattedSelectedDate);
  
        // Check the type and value of physioId
        console.log("Physio ID (from query):", physioId);
  
        // Filter bookings based on physioId and normalized date
        const filteredBookings = allBookings.filter(booking => {
          // Extract date part from booking.date
          const bookingDate = new Date(booking.date).toISOString().split('T')[0]; // Normalize booking.date to "YYYY-MM-DD"
          console.log("Booking Date:", bookingDate, "Booking Physio ID:", booking.physioId);
  
          // Log types and values for debugging
          console.log(`Comparing: booking.physioId=${booking.physioId} and physioId=${physioId}`);
          
          // Ensure physioId comparison is type-safe
          return booking.physioId === Number(physioId) && bookingDate === formattedSelectedDate;
        });
  
        console.log("filteredBookings", filteredBookings);
  
        // Extract booked slots
        const bookedSlots = filteredBookings.map(booking => booking.timeslot);
        
        setRedSlots(bookedSlots);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };
  
    fetchBookings(); // Invoke the fetchBookings function
  
  }, [physioId, selectedDate, token]); // Dependency array to trigger effect when these values change
  
  
  

  // Generate half-hour time slots from 8 AM to 6 PM
  const slots = [];
  const startHour = 8; // 8 AM
  const endHour = 18;  // 6 PM

  for (let hour = startHour; hour < endHour; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const start = `${hour.toString().padStart(2, '0')}:${minute === 0 ? '00' : minute}`;
      const end = minute === 0 ? `${hour.toString().padStart(2, '0')}:30` : `${(hour + 1).toString().padStart(2, '0')}:00`;
      slots.push(`${start} - ${end}`);
    }
  }

  const handleSlotClick = (slot) => {
    if (!redSlots.includes(slot)) {
      navigate(`/appoinmentdetails?physioId=${physioId}&date=${selectedDate}&slot=${slot}`);
      
    }
  };

  return (
    <div className="container">
      <h2>Select Suitable Time Slotsxxxxx</h2>
      <div className="slots">
        {slots.map(slot => (
          <div
            className={`slot ${redSlots.includes(slot) ? 'red-slot' : ''}`}
            key={slot}
            onClick={() => handleSlotClick(slot)}
            role="button"
            tabIndex="0"
            onKeyDown={(e) => { if (e.key === 'Enter') handleSlotClick(slot); }}
          >
            {slot}
          </div>
        ))}
      </div>
      <div className="legend">
        <div className="legend-item">
          <div className="color-box red"></div>
          <span>Reserved</span>
        </div>
        <div className="legend-item">
          <div className="color-box blue"></div>
          <span>Available</span>
        </div>
      </div>
      <style jsx>{`
        .container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 40px 20px;
          background-color: #eef3f7;
          border-radius: 15px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          text-align: center;
        }
        .slots {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          gap: 20px;
          padding: 20px;
        }
        .slot {
          background-color: #b0c4de; /* Default color for available slots */
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          text-align: center;
          font-size: 18px;
          font-weight: 600;
          transition: transform 0.3s ease, background-color 0.3s ease;
          cursor: pointer;
        }
        .slot:hover {
          background-color: #2a3b73;
          color: #ffffff;
          transform: translateY(-5px);
        }
        .red-slot {
          background-color: #D32F2F; /* Matte red color */
          cursor: not-allowed;
        }
        .red-slot:hover {
          background-color: #D32F2F;
          transform: none;
        }
        h2 {
          font-size: 28px;
          margin-bottom: 30px;
          color: #2a3b73;
        }
        .legend {
          margin-top: 40px;
          text-align: left;
        }
        .legend-item {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
        }
        .color-box {
          width: 20px;
          height: 20px;
          border-radius: 3px;
          margin-right: 10px;
        }
        .color-box.red {
          background-color: #D32F2F; /* Same matte red color for legend */
        }
        .color-box.blue {
          background-color: #b0c4de;
        }
      `}</style>
    </div>
  );
};

export default TimeSlots;
