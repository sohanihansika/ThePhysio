import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Table, Card, Button } from 'react-bootstrap';

const GymProfile = () => {
    const [user, setUser] = useState({});
    const [trainingSlots, setTrainingSlots] = useState([]);
    const [trainers, setTrainers] = useState([]);
    
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
        
        axios.get('/api/trainers')
            .then(response => {
                setTrainers(Array.isArray(response.data) ? response.data : []);
            })
            .catch(error => console.error('Error fetching trainers data:', error));
    }, []);

    return (
        <div className='container'>
            <Card className='text-center'>
                <div style={{ width: '150px', height: '150px', margin: '0 auto', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {user.profilePhoto ? <Card.Img variant='top' src={user.profilePhoto} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : <div>No Photo</div>}
                </div>
                <Card.Body>
                    <Card.Title>
                        <div>User Name: {user.name}</div>
                    </Card.Title>
                    <Card.Text>
                        <div>Email: {user.email}</div>
                    </Card.Text>
                </Card.Body>
            </Card>

            <h2 className='mt-4'>Reserved Training Slots</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Trainer</th>
                    </tr>
                </thead>
                <tbody>
                    {trainingSlots.map(slot => (
                        <tr key={slot.id}>
                            <td>{slot.date}</td>
                            <td>{slot.time}</td>
                            <td>{slot.trainer}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <h2 className='mt-4'>Trainer Details</h2>
            <div className='d-flex flex-wrap'>
                {trainers.map(trainer => (
                    <Card className='m-2' style={{ width: '18rem' }} key={trainer.id}>
                        <Card.Img variant='top' src={trainer.photo} />
                        <Card.Body>
                            <Card.Title>{trainer.name}</Card.Title>
                            <Card.Text>{trainer.bio}</Card.Text>
                            <Link to={`/schedule/${trainer.id}`}>
                                <Button variant='primary'>Schedule</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default GymProfile;
