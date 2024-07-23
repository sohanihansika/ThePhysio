import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TrainerForm from './TrainerForm';

const ManagerDashboard = () => {
    const [trainers, setTrainers] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedTrainer, setSelectedTrainer] = useState(null);

    // Dummy data for the manager profile
    const managerProfile = {
        photo: 'https://via.placeholder.com/150', // Replace with the actual photo URL
        name: 'John Doe',
        email: 'john.doe@example.com'
    };

    useEffect(() => {
        fetchTrainers();
    }, []);

    const fetchTrainers = () => {
        axios.get('/api/trainers')
            .then(response => setTrainers(response.data))
            .catch(error => console.error('Error fetching trainers:', error));
    };

    const deleteTrainer = (id) => {
        axios.delete(`/api/trainers/${id}`)
            .then(() => fetchTrainers())
            .catch(error => console.error('Error deleting trainer:', error));
    };

    const handleEdit = (trainer) => {
        setSelectedTrainer(trainer);
        setShowModal(true);
    };

    const handleAdd = () => {
        setSelectedTrainer(null);
        setShowModal(true);
    };

    return (
        <div className='container mx-auto p-4'>
            {/* Manager Profile Section */}
            <div className='bg-white shadow-md rounded-lg p-4 mb-6 flex items-center'>
                <img className='w-24 h-24 rounded-full mr-4' src={managerProfile.photo} alt='Manager' />
                <div>
                    <h2 className='text-xl font-bold'>{managerProfile.name}</h2>
                    <p className='text-gray-600'>{managerProfile.email}</p>
                </div>
            </div>

            <h2 className='text-2xl font-bold mb-4'>Gym Trainers</h2>
            <button onClick={handleAdd} className='mb-3 px-4 py-2 bg-blue-500 text-white rounded'>Add Trainer</button>
            <table className='min-w-full bg-white border border-gray-200'>
                <thead>
                    <tr>
                        <th className='py-2 px-4 border-b'>Name</th>
                        <th className='py-2 px-4 border-b'>Email</th>
                        <th className='py-2 px-4 border-b'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {trainers.map(trainer => (
                        <tr key={trainer.id} className='hover:bg-gray-100'>
                            <td className='py-2 px-4 border-b'>{trainer.name}</td>
                            <td className='py-2 px-4 border-b'>{trainer.email}</td>
                            <td className='py-2 px-4 border-b'>
                                <button onClick={() => handleEdit(trainer)} className='mr-2 px-4 py-2 bg-green-500 text-white rounded'>Edit</button>
                                <button onClick={() => deleteTrainer(trainer.id)} className='mr-2 px-4 py-2 bg-red-500 text-white rounded'>Delete</button>
                                <Link to={`/trainer/${trainer.id}`} className='px-4 py-2 bg-blue-500 text-white rounded'>View Profile</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {showModal && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>

                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">{selectedTrainer ? 'Edit Trainer' : 'Add Trainer'}</h3>
                                        <div className="mt-2">
                                            <TrainerForm trainer={selectedTrainer} onSuccess={() => {
                                                setShowModal(false);
                                                fetchTrainers();
                                            }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button onClick={() => setShowModal(false)} className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManagerDashboard;
