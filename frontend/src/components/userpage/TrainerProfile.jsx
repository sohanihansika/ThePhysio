import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TrainerForm from './TrainerForm';

const TrainerProfile = ({ match }) => {
    const { id } = match.params;
    const [trainer, setTrainer] = useState(null);
    const [reservations, setReservations] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        fetchTrainer();
        fetchReservations();
    }, [id]);

    const fetchTrainer = () => {
        axios.get(`/api/trainers/${id}`)
            .then(response => setTrainer(response.data))
            .catch(error => console.error('Error fetching trainer:', error));
    };

    const fetchReservations = () => {
        axios.get(`/api/reservations?trainerId=${id}`)
            .then(response => setReservations(response.data))
            .catch(error => console.error('Error fetching reservations:', error));
    };

    const handleEdit = () => {
        setShowModal(true);
    };

    if (!trainer) return <div>Loading...</div>;

    return (
        <div className='container mx-auto p-4'>
            <div className='bg-white shadow-md rounded-lg p-4 text-center'>
                <img className='w-32 h-32 rounded-full mx-auto' src={trainer.photo} alt={trainer.name} />
                <h2 className='text-xl font-bold mt-4'>{trainer.name}</h2>
                <p className='text-gray-600'>{trainer.email}</p>
                <p className='mt-2'>{trainer.bio}</p>
                <button className='mt-4 px-4 py-2 bg-blue-500 text-white rounded' onClick={handleEdit}>Edit</button>
            </div>

            <h2 className='mt-8 text-xl font-bold'>Reservations</h2>
            <div className='overflow-x-auto mt-4'>
                <table className='min-w-full bg-white border'>
                    <thead>
                        <tr>
                            <th className='py-2 border'>Date</th>
                            <th className='py-2 border'>Time</th>
                            <th className='py-2 border'>User</th>
                            <th className='py-2 border'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reservations.map(reservation => (
                            <tr key={reservation.id}>
                                <td className='py-2 border'>{reservation.date}</td>
                                <td className='py-2 border'>{reservation.time}</td>
                                <td className='py-2 border'>{reservation.user}</td>
                                <td className='py-2 border'>
                                    <button className='px-2 py-1 bg-blue-500 text-white rounded mr-2'>Edit</button>
                                    <button className='px-2 py-1 bg-red-500 text-white rounded'>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {showModal && (
                <div className='fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75'>
                    <div className='bg-white rounded-lg p-4 w-1/2'>
                        <div className='flex justify-between items-center'>
                            <h2 className='text-xl font-bold'>Edit Trainer</h2>
                            <button className='text-gray-600' onClick={() => setShowModal(false)}>X</button>
                        </div>
                        <TrainerForm trainer={trainer} onSuccess={() => {
                            setShowModal(false);
                            fetchTrainer();
                        }} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default TrainerProfile;
