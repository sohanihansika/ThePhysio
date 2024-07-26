import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ScheduleAppointments = () => {
  const { coachId } = useParams();
  const navigate = useNavigate();
  const [coach, setCoach] = useState({});
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    axios.get(`/api/gym-coaches/${coachId}`)
      .then(response => {
        setCoach(response.data);
      })
      .catch(error => console.error('Error fetching coach data:', error));
  }, [coachId]);

  const handleSchedule = (e) => {
    e.preventDefault();
    // Handle scheduling logic here
    axios.post('/api/training-slots', {
      coachId,
      date,
      time,
    })
    .then(() => {
      navigate('/gym-profile');
    })
    .catch(error => console.error('Error scheduling appointment:', error));
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Schedule Appointment with {coach.name}</h1>
      <form onSubmit={handleSchedule}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Date</label>
          <input
            type="date"
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Time</label>
          <input
            type="time"
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Schedule
        </button>
      </form>
    </div>
  );
};

export default ScheduleAppointments;
