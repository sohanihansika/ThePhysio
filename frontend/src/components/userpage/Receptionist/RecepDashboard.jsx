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
    <div className="max-w-md mx-auto mt-10 ml-6 ">
      <Calendar onChange={handleDateChange} value={date} className= "bg-[#B4B4B4]"/>
      <div className="mt-4 ">
        
        <button
          onClick={handleAddEvent}
          className="mt-2 bg-[#ADE8F4] text-black py-2 px-4 rounded"
        >
          View Schedule
        </button>
      </div>
      <ul className="mt-4 ">
        {events.map((event, idx) => (
          <li key={idx} className="mt-2 bg-[#ADE8F4]">
            <span>{event.date.toDateString()}</span> - <span>{event.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const integrations = [
  {
      title: "Reservations",
      desc: "Doctor Reservations",
      url: "/doctors",
      icon: <img src="./src/assets/reservation.png" alt="Reservations" className="w-10 h-10" />
  },
  {
      title: "Schedule",
      desc: "Patient Ongoing and Past Schedule",
      url: "/ongoingschedule",
      icon: <img src="./src/assets/schedule.png" alt="Schedule" className="w-10 h-10" />
  },
  {
      title: "Manual Payment",
      desc: "Payment Handling",
      url: "/payments",
      icon: <img src="./src/assets/payment.png" alt="Manual Payment" className="w-10 h-10" />
  },
];

const MainComponent = () => (
  <section className="py-16 mb-8">
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      <div className="max-w-md">
        <h1 className="text-gray-800 text-xl font-extrabold sm:text-2xl">THE PHYSIO</h1>
      </div>
      <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {integrations.map((item, idx) => (
          <li key={idx} className="border rounded-lg bg-[#ADE8F4]">
            <div className="flex items-start justify-between p-4">
              <div className="space-y-2">
                {item.icon}
                <h4 className="text-gray-800 font-semibold">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
            <div className="py-5 px-4 border-t text-right">
              <a href={item.url} className="text-indigo-600 hover:text-indigo-500 text-sm font-medium">
                Go to Page
              </a>
            </div>
          </li>
        ))}
      </ul>
      <CalendarComponent />
    </div>
  </section>
);

export default MainComponent;
