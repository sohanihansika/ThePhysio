import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const GymProfile = () => {
    const [user, setUser] = useState({});
    const [trainingSlots, setTrainingSlots] = useState([]);
    const [gymCoaches, setGymCoaches] = useState([]);

    useEffect(() => {
        axios.get('/api/user')
            .then(response => {
                setUser(response.data);
            })
            .catch(error => console.error('Error fetching user data:', error));

        axios.get('/api/training-slots')
            .then(response => {
                setTrainingSlots(Array.isArray(response.data) ? response.data : []);
            })
            .catch(error => console.error('Error fetching training slots data:', error));

        axios.get('/api/gym-coaches')
            .then(response => {
                setGymCoaches(Array.isArray(response.data) ? response.data : []);
            })
            .catch(error => console.error('Error fetching gym coaches data:', error));
    }, []);

    return (
        <div className="container mx-auto p-6">
            {/* User Profile */}
            <div className="text-center">
                {user.profilePhoto ? (
                    <img src={user.profilePhoto} alt="Profile" className="mx-auto rounded-full w-24 h-24" />
                ) : (
                    <div className="mx-auto rounded-full w-24 h-24 bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500">No Photo</span>
                    </div>
                )}
                <h2 className="text-xl font-bold mt-4">{user.name || 'No Name'}</h2>
                <p className="text-gray-600">{user.email || 'No Email'}</p>
            </div>

            {/* Gym Coach Details */}
            <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Gym Coach Details</h2>
                <div className="flex flex-wrap">
                    {gymCoaches.map(coach => (
                        <div className="bg-white shadow-md rounded-lg p-4 m-2 w-80" key={coach.id}>
                            <img src={coach.photo} alt={coach.name} className="w-full h-48 object-cover rounded-t-lg mb-4" />
                            <h3 className="text-lg font-semibold">{coach.name}</h3>
                            <p className="text-gray-600 mb-4">{coach.bio}</p>
                            <Link to={`/schedule/${coach.id}`}>
                                <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                    Schedule
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            {/* Reserved Training Slots */}
            <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">My Appointments</h2>
                {trainingSlots.length > 0 ? (
                    <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-2 border-b text-left">Date</th>
                                <th className="px-4 py-2 border-b text-left">Time</th>
                                <th className="px-4 py-2 border-b text-left">Coach</th>
                            </tr>
                        </thead>
                        <tbody>
                            {trainingSlots.map(slot => (
                                <tr key={slot.id}>
                                    <td className="px-4 py-2 border-b">{slot.date}</td>
                                    <td className="px-4 py-2 border-b">{slot.time}</td>
                                    <td className="px-4 py-2 border-b">{slot.gymCoach}</td> {/* Adjust if necessary */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="mt-4 text-center text-gray-600">No Appointments</p>
                )}
            </div>
        </div>
    );
};

export default GymProfile;
