import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Table, Button, Modal } from 'react-bootstrap';
import TrainerForm from './TrainerForm';

const ManagerDashboard = () => {
    const [trainers, setTrainers] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedTrainer, setSelectedTrainer] = useState(null);

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
        <div className='container'>
            <h2 className='mt-4'>Gym Trainers</h2>
            <Button onClick={handleAdd} className='mb-3'>Add Trainer</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {trainers.map(trainer => (
                        <tr key={trainer.id}>
                            <td>{trainer.name}</td>
                            <td>{trainer.email}</td>
                            <td>
                                <Button variant='info' onClick={() => handleEdit(trainer)}>Edit</Button>
                                <Button variant='danger' onClick={() => deleteTrainer(trainer.id)}>Delete</Button>
                                <Link to={`/trainer/${trainer.id}`} className='btn btn-primary'>View Profile</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedTrainer ? 'Edit Trainer' : 'Add Trainer'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <TrainerForm trainer={selectedTrainer} onSuccess={() => {
                        setShowModal(false);
                        fetchTrainers();
                    }} />
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default ManagerDashboard;
