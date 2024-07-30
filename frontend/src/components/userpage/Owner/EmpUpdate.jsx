import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import UserService from '../../service/UserService';

function EmpUpdate() {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [error, setError] = useState('');
  const [contactError, setContactError] = useState('');
  const [emailError, setEmailError] = useState('');
  const roles = ['PHYSIO', 'RECEPTIONIST', 'COACH', 'MANAGER'];
  const [emptyFieldError, setEmptyFieldError] = useState('');

  const [initialUserData, setInitialUserData] = useState(null);
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    address: '',
    contact_no: '',
    role: ''
  });

  useEffect(() => {
    if (userId) {
      fetchUserDataById(userId);
    } else {
      console.error('No userId provided');
    }
  }, [userId]);

  const fetchUserDataById = async (userId) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('No token found');
      const response = await UserService.getUserById(userId, token);
      setInitialUserData(response.ourUsers);
      setUserData(response.ourUsers);
    } catch (error) {
      console.error('Error fetching user data:', error.response?.data || error.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value
    }));

    if (name === 'contact_no') {
      const phonePattern = /^\d{10}$/;
      setContactError(!phonePattern.test(value) ? 'Invalid contact number' : '');
    } else if (name === 'email') {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setEmailError(!emailPattern.test(value) ? 'Invalid email address' : '');
    }
  };

  const isFormChanged = () => {
    return JSON.stringify(initialUserData) !== JSON.stringify(userData);
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
    if (!userData.name || !userData.address || !userData.contact_no || !userData.email || !userData.role) {
      setEmptyFieldError('All fields must have values.');
      setTimeout(() => {
        setEmptyFieldError('');
      }, 5000);
      return;
    }

    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('No token found');

      if (isFormChanged()) {
        const confirmUpdate = window.confirm('Are you sure you want to update this employee?');
        if (confirmUpdate) {
          const res = await UserService.empUpdate(userId, userData, token);
          if (res.statusCode === 400) {
            setError('Email is already taken by another user');
          } else {
            navigate("/staff");
          }
        }
      } else {
        navigate("/staff");
      }
    } catch (error) {
      if (error.response?.status === 400) {
        setError('Email is already taken by another user');
      }
      console.error('Error updating user profile:', error.response?.data || error.message);
      alert('Failed to update user profile. Please check the console for more details.');
    }
  };

  return (
    <div className="profile-page-container">
      <section className="p-6 dark:text-gray-800">
        <form onSubmit={handleSubmit} className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-50">
          <h2 className="w-full text-3xl font-bold leading-tight text-center">Edit Employee Profile</h2>
          <div>
            <label htmlFor="name" className="block mb-1 ml-1 font-bold">Name :</label>
            <input
              id="name"
              type="text"
              name="name"
              value={userData.name}
              onChange={handleInputChange}
              className="block w-full p-2 rounded bg-gray-100"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 ml-1 font-bold">Email :</label>
            <input
              id="email"
              type="text"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
              className="block w-full p-2 rounded bg-gray-100"
            />
            {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
          </div>
          <div>
            <label htmlFor="address" className="block mb-1 ml-1 font-bold">Address :</label>
            <input
              id="address"
              type="text"
              name="address"
              value={userData.address}
              onChange={handleInputChange}
              className="block w-full p-2 rounded bg-gray-100"
            />
          </div>
          <div>
            <label htmlFor="contact_no" className="block mb-1 ml-1 font-bold">Contact Number :</label>
            <input
              id="contact_no"
              type="text"
              name="contact_no"
              value={userData.contact_no}
              onChange={handleInputChange}
              className="block w-full p-2 rounded bg-gray-100"
            />
            {contactError && <p className="text-red-500 text-sm mt-1">{contactError}</p>}
          </div>
          <div>
            <label htmlFor="role" className="block mb-1 ml-1 font-bold">Role :</label>
            <select
              name="role"
              value={userData.role}
              onChange={handleInputChange}
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            >
              <option value="">Select Role</option>
              {roles.map(role => (
                <option key={role} value={role}>{role}</option>
              ))}
            </select>
          </div>
          <div>
            <button type="submit" className="w-full px-4 py-2 font-bold rounded shadow text-center block bg-[#172b59] text-gray-50 hover:bg-[#425ea0]">Update</button>
            {error && <p className="text-red-500 text-center mt-2">{error}</p>}
            {emptyFieldError && <p className="text-red-500 text-center mt-2">{emptyFieldError}</p>}
          </div>
        </form>
      </section>
    </div>
  );
}

export default EmpUpdate;
