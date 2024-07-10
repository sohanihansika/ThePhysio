import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Table, Card, Button} from 'react-bootstrap';

const GymProfile = () => {
    const [user, setUser] = useState({});
    const [triningSlots, setTrainingSlots] = useState([]);
    const [trainers, setTrainers] = useState([]);
    
    useEffect(() => {
        axios.get(`/api/user`).then(response => {
            setUser(response.data);
        });
        axios.get(`/api/trainers`).then(response => {
            setTrainers(response.data);
        });
    },[]);

    return (
        <div className='container'>
            <Card className= 'text-center'>
                <Card.Img variant='top' src={user.profilePhoto} />
                <Card.Body>
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Text>{user.email}</Card.Text>
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
                    {setTrainingSlots.map(slot => (
                        <tr key ={slot.id}>
                            <td>{slot.date}</td>
                            <td>{slot.time}</td>
                            <td>{slot.trainer}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <h2 className='mt-4'>Trainer Details</h2>
            <div className = 'd-flex flex-wrap'>
                {trainers.map(trainer => (
                    <Card className = 'm-2' style = {{width: '18rem'}} key = {trainer.id}>
                        <Card.Img variant = 'top' src = {trainer.photo} />
                        <Card.Body>
                            <Card.Title>{trainer.name}</Card.Title>
                            <Card.Text>{trainer.bio}</Card.Text>
                            <Link to={'/schedule/${trainer.id}'}>
                                <Button varient = 'primary'> Schedule</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default GymProfile;