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

  useEffect(() => {
    const fetchUnavailableDates = async () => {
      const token = localStorage.getItem('token'); // Replace with your token retrieval method
      try {
        const allLeaves = await LeaveService.getAllleaves(token);

        const physioIdNumber = Number(physioId);
        const physioLeaves = allLeaves.filter(
          leave => leave.physioId === physioIdNumber && leave.status === 2
        );

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
    const allBookedDates = [
      new Date(2024, 12, 11), // August 1, 2024
      new Date(2024, 7, 15) // August 15, 2024
    ];
    return allBookedDates.some(d => d.toDateString() === date.toDateString());
  };

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);

    const normalizedDate = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      selectedDate.getDate()
    );

    const nextDay = new Date(normalizedDate);
    nextDay.setDate(nextDay.getDate() + 1);

    const formattedNextDay = nextDay.toISOString().split('T')[0];

    if (isUnavailableDay(normalizedDate)) {
      navigate(`/notavilPopup?physioId=${physioId}`);
    } else if (isAllBookedDay(normalizedDate)) {
      navigate(`/reserved?physioId=${physioId}`);
    } else {
      navigate(`/timeslots?physioId=${physioId}&date=${formattedNextDay}`);
    }
  };

  const tileDisabled = ({ date }) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset time for comparison
    return (
      date < today || // Disable past dates
      isUnavailableDay(date) || // Disable unavailable dates
      date.getDay() === 0 // Disable Sundays
    );
  };

  const tileClassName = ({ date }) => {
    let className = "";

    if (date < new Date()) {
      // Past dates
      className = "past-date";
    }

    if (isUnavailableDay(date)) {
      // Unavailable dates
      className = "unavailable-date";
    }

    if (isAllBookedDay(date)) {
      // All booked dates
      className = "booked-date";
    }

    if (date.getDay() === 0) {
      // Sundays
      className = "sunday-date";
    }

    return className;
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
    boxShadow:
      '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  };

  const headerStyle = {
    fontSize: '1.875rem',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: '1.5rem',
    color: '#172b59',
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
    backgroundColor: '#6500dc',
    marginRight: '0.5rem',
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={headerStyle}>Appointment Calendar</h1>
        <div style={calendarContainerStyle}>
          <Calendar
            onChange={handleDateChange}
            value={date}
            tileDisabled={tileDisabled}
            tileClassName={tileClassName} // Apply custom classes for the tiles
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
