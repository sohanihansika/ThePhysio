// src/components/GymCoachDashboard.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CoachDashboard = () => {
    const [coach, setCoach] = useState({});
    const [appointments, setAppointments] = useState([]);
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

    useEffect(() => {
        // Fetch coach details
        axios.get('/api/coach')
            .then(response => {
                const coachData = response.data || {};
                setCoach(coachData);
                setProfileFormData({
                    name: coachData.name || '',
                    email: coachData.email || '',
                    profilePhoto: coachData.profilePhoto || ''
                });
            })
            .catch(error => console.error('Error fetching coach details:', error));

        // Fetch appointments
        axios.get('/api/appointments')
            .then(response => setAppointments(response.data || []))
            .catch(error => console.error('Error fetching appointments:', error));
    }, []);

    const handleEditProfile = () => {
        axios.put('/api/coach', profileFormData)
            .then(response => {
                setCoach(response.data);
                setEditingProfile(false);
            })
            .catch(error => console.error('Error updating profile:', error));
    };

    const handleAddAppointment = () => {
        axios.post('/api/appointments', appointmentFormData)
            .then(response => {
                setAppointments([...appointments, response.data]);
                setAppointmentFormData({ date: '', time: '', user: '' });
            })
            .catch(error => console.error('Error adding appointment:', error));
    };

    const handleEditAppointment = (id) => {
        axios.put(`/api/appointments/${id}`, appointmentFormData)
            .then(response => {
                setAppointments(appointments.map(appointment => 
                    appointment.id === id ? response.data : appointment
                ));
                setEditingAppointmentId(null);
                setAppointmentFormData({ date: '', time: '', user: '' });
            })
            .catch(error => console.error('Error updating appointment:', error));
    };

    const handleDeleteAppointment = (id) => {
        axios.delete(`/api/appointments/${id}`)
            .then(() => {
                setAppointments(appointments.filter(appointment => appointment.id !== id));
            })
            .catch(error => console.error('Error deleting appointment:', error));
    };

    return (
        <div className="container mx-auto p-4">
            <div className="text-center">
                {coach.profilePhoto ? (
                    <img src={coach.profilePhoto} alt="Profile" className="mx-auto rounded-full w-24 h-24" />
                ) : (
                    <div className="mx-auto rounded-full w-24 h-24 bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500">No Photo</span>
                    </div>
                )}
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
                        <h2 className="text-xl font-semibold mt-4">{coach.name || 'No Name'}</h2>
                        <p className="text-gray-600">{coach.email || 'No Email'}</p>
                        <button
                            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
                            onClick={() => setEditingProfile(true)}
                        >
                            Edit Profile
                        </button>
                    </>
                )}
            </div>
            
            <h3 className="text-lg font-semibold mt-6">Appointments</h3>
            {appointments.length > 0 ? (
                <table className="table-auto w-full mt-2">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Date</th>
                            <th className="px-4 py-2">Time</th>
                            <th className="px-4 py-2">User</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.map(appointment => (
                            <tr key={appointment.id}>
                                <td className="border px-4 py-2">{appointment.date}</td>
                                <td className="border px-4 py-2">{appointment.time}</td>
                                <td className="border px-4 py-2">{appointment.user}</td>
                                <td className="border px-4 py-2">
                                    <button
                                        className="px-2 py-1 bg-yellow-500 text-white rounded mr-2"
                                        onClick={() => {
                                            setEditingAppointmentId(appointment.id);
                                            setAppointmentFormData({
                                                date: appointment.date,
                                                time: appointment.time,
                                                user: appointment.user
                                            });
                                        }}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="px-2 py-1 bg-red-500 text-white rounded"
                                        onClick={() => handleDeleteAppointment(appointment.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="mt-4 text-center text-gray-600">No Appointments</p>
            )}
            {editingAppointmentId ? (
                <div className="mt-4">
                    <h4 className="text-lg font-semibold">Edit Appointment</h4>
                    <input
                        type="date"
                        value={appointmentFormData.date}
                        onChange={(e) => setAppointmentFormData({ ...appointmentFormData, date: e.target.value })}
                        className="block mt-2 p-2 border rounded"
                    />
                    <input
                        type="time"
                        value={appointmentFormData.time}
                        onChange={(e) => setAppointmentFormData({ ...appointmentFormData, time: e.target.value })}
                        className="block mt-2 p-2 border rounded"
                    />
                    <input
                        type="text"
                        value={appointmentFormData.user}
                        onChange={(e) => setAppointmentFormData({ ...appointmentFormData, user: e.target.value })}
                        className="block mt-2 p-2 border rounded"
                    />
                    <button
                        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
                        onClick={() => handleEditAppointment(editingAppointmentId)}
                    >
                        Save Appointment
                    </button>
                    <button
                        className="mt-2 px-4 py-2 bg-gray-500 text-white rounded"
                        onClick={() => {
                            setEditingAppointmentId(null);
                            setAppointmentFormData({ date: '', time: '', user: '' });
                        }}
                    >
                        Cancel
                    </button>
                </div>
            ) : (
                <div className="mt-4">
                    <h4 className="text-lg font-semibold">Add Appointment</h4>
                    <input
                        type="date"
                        value={appointmentFormData.date}
                        onChange={(e) => setAppointmentFormData({ ...appointmentFormData, date: e.target.value })}
                        className="block mt-2 p-2 border rounded"
                    />
                    <input
                        type="time"
                        value={appointmentFormData.time}
                        onChange={(e) => setAppointmentFormData({ ...appointmentFormData, time: e.target.value })}
                        className="block mt-2 p-2 border rounded"
                    />
                    <input
                        type="text"
                        value={appointmentFormData.user}
                        onChange={(e) => setAppointmentFormData({ ...appointmentFormData, user: e.target.value })}
                        placeholder="User Name"
                        className="block mt-2 p-2 border rounded"
                    />
                    <button
                        className="mt-2 px-4 py-2 bg-green-500 text-white rounded"
                        onClick={handleAddAppointment}
                    >
                        Add Appointment
                    </button>
                </div>
            )}
        </div>
    );
};

export default CoachDashboard;
