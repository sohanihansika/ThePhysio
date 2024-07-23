import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const GymProfile = () => {
    const [user, setUser] = useState({});
    const [trainingSlots, setTrainingSlots] = useState([]);
    const [trainers, setTrainers] = useState([]);

    useEffect(() => {
        axios.get('/api/user')
            .then(response => setUser(response.data))
            .catch(error => console.error('Error fetching user data:', error));

        axios.get('/api/training-slots')
            .then(response => setTrainingSlots(Array.isArray(response.data) ? response.data : []))
            .catch(error => console.error('Error fetching training slots data:', error));

        axios.get('/api/trainers')
            .then(response => setTrainers(Array.isArray(response.data) ? response.data : []))
            .catch(error => console.error('Error fetching trainers data:', error));
    }, []);

    return (
        <div className='container mx-auto p-4'>
            <div className='bg-white shadow-md rounded-lg p-4 text-center'>
                <div className='w-36 h-36 mx-auto bg-gray-200 flex items-center justify-center rounded-full'>
                    {user.profilePhoto ? (
                        <img src={user.profilePhoto} alt='Profile' className='w-full h-full object-cover rounded-full' />
                    ) : (
                        <div>No Photo</div>
                    )}
                </div>
                <div className='mt-4'>
                    <div className='text-lg font-semibold'>User Name: {user.name}</div>
                    <div className='text-gray-600'>Email: {user.email}</div>
                </div>
            </div>

            <h2 className='mt-8 text-xl font-semibold'>Reserved Training Slots</h2>
            <div className='overflow-x-auto'>
                <table className='min-w-full bg-white shadow-md rounded-lg'>
                    <thead className='bg-gray-200 border-b'>
                        <tr>
                            <th className='py-2 px-4 text-left'>Date</th>
                            <th className='py-2 px-4 text-left'>Time</th>
                            <th className='py-2 px-4 text-left'>Trainer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {trainingSlots.map(slot => (
                            <tr key={slot.id} className='border-b'>
                                <td className='py-2 px-4'>{slot.date}</td>
                                <td className='py-2 px-4'>{slot.time}</td>
                                <td className='py-2 px-4'>{slot.trainer}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <h2 className='mt-8 text-xl font-semibold'>Trainer Details</h2>
            <div className='flex flex-wrap gap-4'>
                {trainers.map(trainer => (
                    <div className='bg-white shadow-md rounded-lg overflow-hidden w-72' key={trainer.id}>
                        <img src={trainer.photo} alt={trainer.name} className='w-full h-40 object-cover' />
                        <div className='p-4'>
                            <div className='text-lg font-semibold'>{trainer.name}</div>
                            <div className='text-gray-600'>{trainer.bio}</div>
                            <Link to={`/schedule/${trainer.id}`}>
                                <button className='mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600'>
                                    Schedule
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GymProfile;
