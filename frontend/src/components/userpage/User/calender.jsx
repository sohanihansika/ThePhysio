import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useNavigate, useLocation } from 'react-router-dom';

const calender = () => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [eventTitle, setEventTitle] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  
  const queryParams = new URLSearchParams(location.search);
  const physioId = queryParams.get('physioId');
  
  console.log('Physio ID:', physioId); // Log physioId to the console

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
    navigate(`/timeslots?physioId=${physioId}`); // Pass physioId to the /timeslots page
  };

  const handleAddEvent = () => {
    if (eventTitle) {
      setEvents([...events, { date, title: eventTitle }]);
      setEventTitle('');
    }
  };

  const handleTitleChange = (e) => {
    setEventTitle(e.target.value);
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <Calendar onChange={handleDateChange} value={date} />
      <div className="mt-4">
      
      </div>
      <ul className="mt-4">
        {events.map((event, idx) => (
          <li key={idx} className="mt-2">
            <span>{event.date.toDateString()}</span> - <span>{event.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default calender;
