import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserService from '../../service/UserService';
import { FaArrowLeft } from "react-icons/fa";

function CreateAccount() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        contact_no: '',
        address: '',
        role: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [contactError, setContactError] = useState('');
    const [emailError, setEmailError] = useState('');
    const roles = ['PHYSIO', 'RECEPTIONIST', 'COACH', 'MANAGER'];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        if (name === 'contact_no') {
            const phonePattern = /^\d{10}$/;
            setContactError(!phonePattern.test(value) ? 'Invalid contact number' : '');
        } else if (name === 'email') {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            setEmailError(!emailPattern.test(value) ? 'Invalid email address' : '');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (contactError || emailError) {
            setError('');
            setTimeout(() => {
                setError('');
            }, 5000);
            return;
        }

        try {
            const token = localStorage.getItem('token');
            const res = await UserService.empRegister(formData, token);
            console.log(res);
            alert('Employee registered successfully');
            window.location.href = '/dashboard';
        } catch (error) {
            setError(error.response?.data?.message || error.message);
            setTimeout(() => {
                setError('');
            }, 5000);
        }
    }

    return (
        <main className="w-full h-screen flex flex-col items-center justify-center bg-gray-100 sm:px-4">
            <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
                <div className="bg-white shadow p-4 py-6 sm:p-6 sm:rounded-lg min-w-full">
                    <div className="flex justify-end">
                        <button className="text-gray-500 hover:text-gray-800" onClick={() => navigate('/')}>
                            <FaArrowLeft />
                        </button>
                    </div>
                    <div className="text-center">
                        <img src="./src/assets/logowithoutback.png" width={150} className="mx-auto" />
                        <div className="mt-5 space-y-2">
                            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Create a staff account</h3>
                            
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                        <div>
                            <label className="font-medium">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                             {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
                        </div>
                        <div>
                            <label className="font-medium">Contact Number</label>
                            <input
                                type="text"
                                name="contact_no"
                                value={formData.contact_no}
                                onChange={handleChange}
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                            {contactError && <p className="text-red-500 text-sm mt-1">{contactError}</p>}
                        </div>
                        <div>
                            <label className="font-medium">Address</label>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">Role</label>
                            <select
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            >
                                <option value="">Select Role</option>
                                {roles.map(role => (
                                    <option key={role} value={role}>{role}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="font-medium">Password</label>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                            <button type="button" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? 'Hide' : ''} 
                            </button>
                        </div>

                        <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150" type='submit'>
                            Sign Up
                        </button>
                        {error && <p className="text-red-500 text-center mt-2">{error}</p>}
                    </form>
                </div>
            </div>
        </main>
    );
}

export default CreateAccount;
