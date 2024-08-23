import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserReviews from '../Owner/viewReviews';

export default function Reviews() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [error, setError] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState(''); // State for selected doctor
  const navigate = useNavigate();

  // Example list of doctors
  const doctors = [
    { id: 1, name: 'Dr. John Smith' },
    { id: 2, name: 'Dr. Jane Doe' },
    { id: 3, name: 'Dr. Emily Johnson' },
  ];

  const handleRatingChange = (event) => {
    setRating(Number(event.target.value));
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleDoctorChange = (event) => {
    setSelectedDoctor(event.target.value);
  };

  const handleSubmit = () => {
    if (rating === 0 || comment.trim() === '' || selectedDoctor === '') {
      setError('Please fill out all fields including selecting a doctor.');
      return;
    }
    navigate('/success');

    // Handle submission logic here
    console.log('Rating:', rating);
    console.log('Comment:', comment);
    console.log('Selected Doctor:', selectedDoctor);

    // Clear the fields after submission
    setRating(0);
    setComment('');
    setSelectedDoctor('');
    setError('');
  };

  const starStyle = {
    fontSize: '2rem',
    color: '#d3d3d3',
    cursor: 'pointer',
    transition: 'color 0.2s',
  };

  const starCheckedStyle = {
    ...starStyle,
    color: '#ffcc00',
  };

  const starHoverStyle = {
    ...starStyle,
    color: '#ffcc00',
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="flex flex-col max-w-xl p-8 shadow-lg rounded-xl bg-white text-gray-800">
        <h2 className="text-3xl font-semibold text-center mb-4">
          Your opinion matters!
        </h2>
        <p className="text-center text-gray-600 mb-6">
          We value your feedback. Please share your thoughts with us!
        </p>

        {/* Error Message */}
        {error && (
          <p className="text-red-500 text-center mb-4">{error}</p>
        )}

        {/* Dropdown Menu for Selecting Doctor */}
        <div className="mb-6">
          <label htmlFor="doctor" className="block text-gray-700 mb-2">
            Select Doctor
          </label>
          <select
            id="doctor"
            value={selectedDoctor}
            onChange={handleDoctorChange}
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#172b59]"
          >
            <option value="">Select a doctor</option>
            {doctors.map((doctor) => (
              <option key={doctor.id} value={doctor.name}>
                {doctor.name}
              </option>
            ))}
          </select>
          
        </div>

        {/* Star Rating Section */}
        <div className="flex justify-center mb-6">
          <fieldset className="flex items-center">
            <legend className="sr-only">Rating</legend>
            {[...Array(5)].map((_, index) => (
              <input
                key={index}
                type="radio"
                name="rating"
                value={index + 1}
                id={`star${index + 1}`}
                checked={rating === index + 1}
                onChange={handleRatingChange}
                style={{ display: 'none' }} // Hide radio buttons
              />
            ))}
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <label
                  key={index}
                  htmlFor={`star${index + 1}`}
                  style={{
                    ...starStyle,
                    color: rating >= index + 1 ? starCheckedStyle.color : starStyle.color,
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = starHoverStyle.color)}
                  onMouseOut={(e) => (e.currentTarget.style.color = rating >= index + 1 ? starCheckedStyle.color : starStyle.color)}
                >
                  ★
                </label>
              ))}
            </div>
          </fieldset>
        </div>

        <textarea
          rows="4"
          value={comment}
          onChange={handleCommentChange}
          className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#172b59]"
          placeholder="Leave a comment..."
        ></textarea>
        <button
          onClick={handleSubmit}
          className="block text-center text-white px-6 py-3 mt-6 rounded-full bg-[#172b59] hover:bg-[#0d1a33] active:bg-[#0b1627] shadow-lg transition-transform transform hover:scale-105"
        >
          Send
        </button>
        <div className="text-center mt-4">
          <a
            rel="noopener noreferrer"
            href="#"
            className="text-sm text-gray-600 hover:underline"
          >
            Maybe later
          </a>
        </div>
      </div>
      <div style={{ width: '1000px', marginLeft: '-200px' }}>
        <UserReviews />
      </div>
    </div>
  );
}
