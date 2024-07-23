// src/components/GymCoachAppointment.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const GymCoachAppointment = () => {
    const { coachId } = useParams(); // Get the coach ID from URL
    const [appointments, setAppointments] = useState([]);
    const [appointmentFormData, setAppointmentFormData] = useState({
        date: '',
        time: '',
        user: ''
    });
    const [editingAppointmentId, setEditingAppointmentId] = useState(null);

    useEffect(() => {
        // Fetch appointments for the specific coach
        axios.get(`/api/appointments?coachId=${coachId}`)
            .then(response => setAppointments(response.data))
            .catch(error => console.error('Error fetching appointments:', error));
    }, [coachId]);

    const handleAddAppointment = () => {
        axios.post('/api/appointments', { ...appointmentFormData, coachId })
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
            <h3 className="text-lg font-semibold mt-6">Appointments for Coach</h3>
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

export default GymCoachAppointment;
