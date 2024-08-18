import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../../assets/actual2.jpg';

export default function ContactUs() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/register');
  };

  return (
    <div
      className="relative w-full h-[75vh] flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 w-full max-w-xl p-4 md:px-8 bg-white rounded-lg shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30">
        <div className="py-4 text-center">
          <h3 className="text-3xl text-white font-semibold md:text-4xl">
            Join Our Community
          </h3>
          <p className="text-white leading-relaxed mt-3">
            Stay updated with our latest news, exclusive offers, and more. Enter your email to be a part of our growing family!
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col items-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-full text-gray-700 focus:outline-none focus:ring focus:ring-indigo-300"
            placeholder="Enter your email"
            required
          />
          <button
            type="submit"
            className="mt-4 px-4 py-2 text-white font-medium rounded-full inline-flex items-center justify-center"
            style={{ backgroundColor: '#172b59' }} // Set button background color to #172b59
          >
            Join Now
          </button>
        </form>
      </div>
    </div>
  );
}
