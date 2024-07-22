import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

const TrainerForm = ({ trainer, onSuccess }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        bio: '',
        photo: ''
    });

    useEffect(() => {
        if (trainer) {
            setFormData(trainer);
        }
    }, [trainer]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (trainer) {
            axios.put(`/api/trainers/${trainer.id}`, formData)
                .then(onSuccess)
                .catch(error => console.error('Error updating trainer:', error));
        } else {
            axios.post('/api/trainers', formData)
                .then(onSuccess)
                .catch(error => console.error('Error adding trainer:', error));
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId='name'>
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group controlId='email'>
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group controlId='bio'>
                <Form.Label>Bio</Form.Label>
                <Form.Control
                    as='textarea'
                    name='bio'
                    value={formData.bio}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group controlId='photo'>
                <Form.Label>Photo URL</Form.Label>
                <Form.Control
                    type='text'
                    name='photo'
                    value={formData.photo}
                    onChange={handleChange}
                />
            </Form.Group>
            <Button variant='primary' type='submit'>Submit</Button>
        </Form>
    );
};

export default TrainerForm;
