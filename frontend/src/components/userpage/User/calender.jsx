import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useNavigate, useLocation } from 'react-router-dom';
import LeaveService from '../../service/LeaveService'; // Adjust the path according to your project structure

const Calender = () => {
  const [date, setDate] = useState(new Date());
  const [unavailableDates, setUnavailableDates] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const physioId = queryParams.get('physioId');
  
  console.log('Physio ID:', physioId);

  useEffect(() => {
    const fetchUnavailableDates = async () => {
      const token = localStorage.getItem('token'); // Replace with your token retrieval method
      try {
        const allLeaves = await LeaveService.getAllleaves(token);
        console.log("All leaves:", allLeaves);
  
        // Ensure physioId is treated as a string or number consistently
        const physioIdNumber = Number(physioId);
        console.log("Physio ID for filtering:", physioIdNumber);
  
        // Filter leaves based on physioId and status
        const physioLeaves = allLeaves.filter(leave => 
          leave.physioId === physioIdNumber && leave.status === 2
        );
        console.log("Filtered leaves:", physioLeaves);
        
        // Convert dates to Date objects
        const dates = physioLeaves.map(leave => new Date(leave.date));
        setUnavailableDates(dates);
      } catch (error) {
        console.error('Failed to fetch leave data:', error);
        setUnavailableDates([]);
      }
    };
  
    fetchUnavailableDates();
  }, [physioId]);
  

  const isUnavailableDay = (date) => {
    return unavailableDates.some(d => d.toDateString() === date.toDateString());
  };

  const isAllBookedDay = (date) => {
    // Example: Return true for a specific set of dates (or modify this as needed)
    const allBookedDates = [
      new Date(2024, 7, 1),  // August 1, 2024
      new Date(2024, 7, 15) // August 15, 2024
    ];
    return allBookedDates.some(d => d.toDateString() === date.toDateString());
  };

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
    
    // Normalize the selected date to ensure it's at the start of the day
    const normalizedDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate());
    
    // Add one day to the normalized date
    const nextDay = new Date(normalizedDate);
    nextDay.setDate(nextDay.getDate() + 1);
    
    // Format the next day as YYYY-MM-DD
    const formattedNextDay = nextDay.toISOString().split('T')[0];
  
    if (isUnavailableDay(normalizedDate)) {
      console.log('Navigating to /notavilPopup');
      navigate(`/notavilPopup?physioId=${physioId}`); // Adjust the navigation as needed

    } else if (isAllBookedDay(normalizedDate)) {
      console.log('Navigating to /reserved');
      navigate(`/reserved?physioId=${physioId}`); // Adjust the navigation as needed

    } else {
      console.log(`Navigating to /timeslots?physioId=${physioId}&date=${formattedNextDay}`);
      navigate(`/timeslots?physioId=${physioId}&date=${formattedNextDay}`);
    }
  };
  

  const handleNextMonth = () => {
    const nextMonth = new Date(date.getFullYear(), date.getMonth() + 1, 1);
    setDate(nextMonth);
  };

  const handlePreviousMonth = () => {
    const prevMonth = new Date(date.getFullYear(), date.getMonth() - 1, 1);
    setDate(prevMonth);
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f7fafc',
  };

  const cardStyle = {
    maxWidth: '100rem',
    margin: 'auto',
    marginTop: '2.5rem',
    padding: '1.5rem',
    backgroundColor: '#fff',
    borderRadius: '0.5rem',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  };

  const headerStyle = {
    fontSize: '1.875rem',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: '1.5rem',
    color: '#172b59',
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '1rem',
  };

  const buttonStyle = {
    padding: '0.5rem 1rem',
    margin: '0.5rem',
    color: '#fff',
    backgroundColor: '#172b59',
    borderRadius: '0.25rem',
    cursor: 'pointer',
    border: 'none',
  };

  const calendarContainerStyle = {
    fontSize: '1.2em',
    display: 'flex',
    justifyContent: 'center',
  };

  const legendStyle = {
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center',
    marginTop: '1rem',
    fontSize: '0.9rem',
    color: '#4a5568',
  };

  const colorBoxStyle = {
    width: '1rem',
    height: '1rem',
    backgroundColor: 'orange',
    marginRight: '0.5rem',
  };
  const colorBoxStyle1 = {
    width: '1rem',
    height: '1rem',
    backgroundColor: '#006edc',
    marginRight: '0.5rem',
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={headerStyle}>Appointment Calendar</h1>
        <div style={buttonContainerStyle}>
          <button onClick={handlePreviousMonth} style={buttonStyle}>
            Previous Month
          </button>
          <button onClick={handleNextMonth} style={buttonStyle}>
            Next Month
          </button>
        </div>
        <div style={calendarContainerStyle}>
          <Calendar
            onChange={handleDateChange}
            value={date}
            tileClassName={({ date, view }) => {
              if (view === 'month') {
                if (date.getDate() === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
                  return 'bg-blue-100 text-blue-800';
                }
                if (isUnavailableDay(date)) {
                  return 'bg-orange-500 text-white';
                }
                if (isAllBookedDay(date)) {
                  return 'bg-blue-500 text-white';
                }
              }
              return '';
            }}
          />
        </div>
        <div style={legendStyle}>
          <div style={colorBoxStyle}></div>
          <span>Days the physiotherapist is not available</span>
        </div>
        <div style={legendStyle}>
          <div style={colorBoxStyle1}></div>
          <span>Days the physiotherapist is all booked</span>
        </div>
      </div>
    </div>
  );
};

export default Calender;
