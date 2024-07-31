import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useNavigate, useLocation } from 'react-router-dom';

const Calender = () => {
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const physioId = queryParams.get('physioId');
  
  console.log('Physio ID:', physioId);

  const unavailableDates = [
    new Date(2024, 7, 28), // August 28, 2024
  ];

  const allBookedDates = [
    new Date(2024, 7, 1),  // August 1, 2024
    new Date(2024, 7, 15), // August 15, 2024
  ];

  const isUnavailableDay = (date) => {
    return unavailableDates.some(d => d.toDateString() === date.toDateString());
  };

  const isAllBookedDay = (date) => {
    return allBookedDates.some(d => d.toDateString() === date.toDateString());
  };

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
    if (isUnavailableDay(selectedDate)) {
      navigate('/notavilPopup');
    } else if (isAllBookedDay(selectedDate)) {
      navigate('/reserved');
    } else {
      navigate(`/timeslots?physioId=${physioId}&date=${selectedDate.toISOString().split('T')[0]}`);
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

  // Styles

  
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