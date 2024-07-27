import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [eventTitle, setEventTitle] = useState('');

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
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
        
        <button
          onClick={handleAddEvent}
          className="mt-2 bg-blue-500 text-white py-2 px-4 rounded"
        >
          View Schedule
        </button>
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

export default CalendarComponent;