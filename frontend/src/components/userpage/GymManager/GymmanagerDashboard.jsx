// src/components/GymManagerDashboard.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const GymManagerDashboard = () => {
    const [manager, setManager] = useState({});
    const [coaches, setCoaches] = useState([]);
    const [editingProfile, setEditingProfile] = useState(false);
    const [profileFormData, setProfileFormData] = useState({
        name: '',
        email: '',
        profilePhoto: ''
    });
    const [appointmentFormData, setAppointmentFormData] = useState({
        date: '',
        time: '',
        user: ''
    });
    const [editingAppointmentId, setEditingAppointmentId] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch manager details
        axios.get('/api/manager')
            .then(response => {
                setManager(response.data);
                setProfileFormData({
                    name: response.data.name,
                    email: response.data.email,
                    profilePhoto: response.data.profilePhoto
                });
            })
            .catch(error => console.error('Error fetching manager details:', error));

        // Fetch coaches
        axios.get('/api/coaches')
            .then(response => setCoaches(response.data))
            .catch(error => console.error('Error fetching coaches:', error));
    }, []);

    const handleEditProfile = () => {
        axios.put('/api/manager', profileFormData)
            .then(response => {
                setManager(response.data);
                setEditingProfile(false);
            })
            .catch(error => console.error('Error updating profile:', error));
    };

    const handleDeleteCoach = (id) => {
        axios.delete(`/api/coaches/${id}`)
            .then(() => {
                setCoaches(coaches.filter(coach => coach.id !== id));
            })
            .catch(error => console.error('Error deleting coach:', error));
    };

    const navigateToCoachAppointments = (id) => {
        navigate(`/coach/${id}`);
    };

    return (
        <div className="container mx-auto p-4">
            <div className="text-center">
                <img src={manager.profilePhoto} alt="Profile" className="mx-auto rounded-full w-24 h-24" />
                {editingProfile ? (
                    <div>
                        <input 
                            type="text" 
                            value={profileFormData.name} 
                            onChange={(e) => setProfileFormData({ ...profileFormData, name: e.target.value })}
                            className="block mt-2 p-2 border rounded"
                        />
                        <input 
                            type="email" 
                            value={profileFormData.email} 
                            onChange={(e) => setProfileFormData({ ...profileFormData, email: e.target.value })}
                            className="block mt-2 p-2 border rounded"
                        />
                        <input 
                            type="text" 
                            value={profileFormData.profilePhoto} 
                            onChange={(e) => setProfileFormData({ ...profileFormData, profilePhoto: e.target.value })}
                            className="block mt-2 p-2 border rounded"
                        />
                        <button
                            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
                            onClick={handleEditProfile}
                        >
                            Save Profile
                        </button>
                        <button
                            className="mt-2 px-4 py-2 bg-gray-500 text-white rounded"
                            onClick={() => setEditingProfile(false)}
                        >
                            Cancel
                        </button>
                    </div>
                ) : (
                    <>
                        <h2 className="text-xl font-semibold mt-4">{manager.name}</h2>
                        <p className="text-gray-600">{manager.email}</p>
                        <button
                            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
                            onClick={() => setEditingProfile(true)}
                        >
                            Edit Profile
                        </button>
                    </>
                )}
            </div>

            <h3 className="text-lg font-semibold mt-6">Gym Coaches</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {coaches.map(coach => (
                    <div key={coach.id} className="border p-4 rounded shadow hover:bg-gray-100 cursor-pointer" onClick={() => navigateToCoachAppointments(coach.id)}>
                        <img src={coach.profilePhoto} alt="Profile" className="rounded-full w-16 h-16 mx-auto" />
                        <h4 className="text-center mt-2 font-semibold">{coach.name}</h4>
                        <p className="text-center text-gray-600">{coach.email}</p>
                        <div className="flex justify-center mt-2">
                            <button className="mx-1 px-2 py-1 bg-yellow-500 text-white rounded" onClick={(e) => { e.stopPropagation(); setEditingProfile(true); }}>Edit</button>
                            <button className="mx-1 px-2 py-1 bg-red-500 text-white rounded" onClick={(e) => { e.stopPropagation(); handleDeleteCoach(coach.id); }}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GymManagerDashboard;
