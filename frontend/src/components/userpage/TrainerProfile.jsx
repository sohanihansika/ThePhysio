import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Card, Button, Modal } from 'react-bootstrap';
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
        <div className='container'>
            <Card className='text-center'>
                <Card.Img variant='top' src={trainer.photo} />
                <Card.Body>
                    <Card.Title>{trainer.name}</Card.Title>
                    <Card.Text>{trainer.email}</Card.Text>
                    <Card.Text>{trainer.bio}</Card.Text>
                    <Button variant='info' onClick={handleEdit}>Edit</Button>
                </Card.Body>
            </Card>

            <h2 className='mt-4'>Reservations</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>User</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {reservations.map(reservation => (
                        <tr key={reservation.id}>
                            <td>{reservation.date}</td>
                            <td>{reservation.time}</td>
                            <td>{reservation.user}</td>
                            <td>
                                <Button variant='info'>Edit</Button>
                                <Button variant='danger'>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Trainer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <TrainerForm trainer={trainer} onSuccess={() => {
                        setShowModal(false);
                        fetchTrainer();
                    }} />
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default TrainerProfile;
