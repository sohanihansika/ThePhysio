import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SchedulePage = () => {
    const { trainerId } = useParams();
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [availableTimes, setAvailableTimes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`/api/trainers/${trainerId}/available-times`)
            .then(response => {
                setAvailableTimes(response.data);
            })
            .catch(error => console.error('Error fetching available times:', error));
    }, [trainerId]);

    const handleSchedule = () => {
        axios.post(`/api/schedule`, { trainerId, date, time })
            .then(response => {
                navigate('/gym-profile');
            })
            .catch(error => console.error('Error scheduling session:', error));
    };

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-2xl font-semibold mb-4">Schedule Training Session</h2>
            <form className="bg-white shadow-md rounded-lg p-6 space-y-4">
                <div className="mb-4">
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
                    <input
                        type="date"
                        id="date"
                        value={date}
                        onChange={e => setDate(e.target.value)}
                        className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700">Time</label>
                    <select
                        id="time"
                        value={time}
                        onChange={e => setTime(e.target.value)}
                        className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    >
                        {availableTimes.map(timeOption => (
                            <option key={timeOption} value={timeOption}>
                                {timeOption}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mt-6">
                    <button
                        type="button"
                        onClick={handleSchedule}
                        className="w-full bg-blue-500 text-white py-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Schedule
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SchedulePage;
