import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col">
                <label htmlFor='name' className="mb-2 font-medium">Name</label>
                <input
                    type='text'
                    name='name'
                    id='name'
                    className="p-2 border border-gray-300 rounded"
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor='email' className="mb-2 font-medium">Email</label>
                <input
                    type='email'
                    name='email'
                    id='email'
                    className="p-2 border border-gray-300 rounded"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor='bio' className="mb-2 font-medium">Bio</label>
                <textarea
                    name='bio'
                    id='bio'
                    className="p-2 border border-gray-300 rounded"
                    value={formData.bio}
                    onChange={handleChange}
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor='photo' className="mb-2 font-medium">Photo URL</label>
                <input
                    type='text'
                    name='photo'
                    id='photo'
                    className="p-2 border border-gray-300 rounded"
                    value={formData.photo}
                    onChange={handleChange}
                />
            </div>
            <button type='submit' className="px-4 py-2 bg-blue-500 text-white rounded">Submit</button>
        </form>
    );
};

export default TrainerForm;
