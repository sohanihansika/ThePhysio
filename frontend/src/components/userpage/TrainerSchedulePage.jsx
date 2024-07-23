import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const TrainerSchedulePage = () => {
    const { trainerId } = useParams();
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [availableTimes, setAvailableTimes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`/api/trainers/${trainerId}/available-times`).then(response => {
            setAvailableTimes(response.data);
        });
    }, [trainerId]);

    const handleSchedule = () => {
        axios.post(`/api/schedule`, { trainerId, date, time }).then(response => {
            navigate('/gym-profile');
        });
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Schedule Training Session</h2>
            <form className="space-y-4">
                <div className="flex flex-col">
                    <label htmlFor="date" className="mb-2 font-medium">Date</label>
                    <input
                        id="date"
                        type="date"
                        className="p-2 border border-gray-300 rounded"
                        value={date}
                        onChange={e => setDate(e.target.value)}
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="time" className="mb-2 font-medium">Time</label>
                    <select
                        id="time"
                        className="p-2 border border-gray-300 rounded"
                        value={time}
                        onChange={e => setTime(e.target.value)}
                    >
                        <option value="">Select a time</option>
                        {availableTimes.map(time => (
                            <option key={time} value={time}>
                                {time}
                            </option>
                        ))}
                    </select>
                </div>
                <button
                    type="button"
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                    onClick={handleSchedule}
                >
                    Schedule
                </button>
            </form>
        </div>
    );
};

export default TrainerSchedulePage;
