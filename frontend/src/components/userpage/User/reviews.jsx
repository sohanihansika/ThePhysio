import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserReviews from '../Owner/viewReviews';
import UserService from '../../service/UserService'; // Adjust import path as needed
import ReviewService from '../../service/ReviewService'; // Ensure this import path is correct
import Swal from 'sweetalert2';


export default function Reviews() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [error, setError] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPerson, setSelectedPerson] = useState('');
  const [physios, setPhysios] = useState([]);
  const [coaches, setCoaches] = useState([]);
  const [errorFetching, setErrorFetching] = useState('');
  const navigate = useNavigate();
  const token = localStorage.getItem("token"); // Replace with actual token retrieval method

  useEffect(() => {
    // Fetch Physios and Coaches from the API
    const fetchData = async () => {
      try {
        const physiosResponse = await UserService.getAllPhysios(token);
        const coachesResponse = await UserService.getAllCoaches(token);

        if (physiosResponse.statusCode === 200) {
          setPhysios(physiosResponse.ourUsersList || []); // Set physios data
        } else {
          setErrorFetching('Failed to fetch physios data.');
        }

        if (coachesResponse.statusCode === 200) {
          setCoaches(coachesResponse.ourUsersList || []); // Set coaches data
        } else {
          setErrorFetching('Failed to fetch coaches data.');
        }

      } catch (error) {
        console.error('Failed to fetch data:', error);
        setErrorFetching('Failed to load data.');
      }
    };

    fetchData();
  }, [token]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setSelectedPerson('');
  };

  const handleRatingChange = (event) => {
    setRating(Number(event.target.value));
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handlePersonChange = (event) => {
    setSelectedPerson(event.target.value);
  };

  const handleSubmit = async () => {
    if ((selectedCategory === 'Physio' || selectedCategory === 'GymCoach') && selectedPerson === '') {
      setError('Please select a person to review.');
      return;
    }
    if (rating === 0 || comment.trim() === '' || selectedCategory === '') {
      setError('Please fill out all fields including selecting a category.');
      return;
    }

    // Prepare the review object
    const review = {
      rate: rating,
      created_date: new Date().toISOString(), // Set the current date in ISO format
      comment: comment,
      category: selectedCategory,
      physioId: selectedCategory === 'Physio' ? physios.find(p => p.name === selectedPerson)?.id : null,
      coachId: selectedCategory === 'GymCoach' ? coaches.find(c => c.name === selectedPerson)?.id : null,
    };

    try {
      // Save review data using ReviewService
      await ReviewService.saveReview(review, token);

      // Show SweetAlert success message
      Swal.fire({
        title: 'Review Submitted!',
        text: 'Your review has been successfully submitted!',
        icon: 'success',
        confirmButtonText: 'OK',
      });

    } catch (error) {
      console.error('Failed to submit review:', error);
      setError('Failed to submit review. Please try again later.');
    }

    // Clear the fields after submission
    setRating(0);
    setComment('');
    setSelectedCategory('');
    setSelectedPerson('');
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
        {errorFetching && (
          <p className="text-red-500 text-center mb-4">{errorFetching}</p>
        )}

        {/* Dropdown Menu for Selecting Category */}
        <div className="mb-6">
          <label htmlFor="category" className="block text-gray-700 mb-2">
            Select Category
          </label>
          <select
            id="category"
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#172b59]"
          >
            <option value="">Select a category</option>
            <option value="Physio">Physio</option>
            <option value="GymCoach">GymCoach</option>
            <option value="Company">Company</option>
          </select>
        </div>

        {/* Dropdown Menu for Selecting Person (Conditional) */}
        {(selectedCategory === 'Physio' || selectedCategory === 'GymCoach') && (
          <div className="mb-6">
            <label htmlFor="person" className="block text-gray-700 mb-2">
              Select {selectedCategory}
            </label>
            <select
              id="person"
              value={selectedPerson}
              onChange={handlePersonChange}
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#172b59]"
            >
              <option value="">Select a {selectedCategory}</option>
              {(selectedCategory === 'Physio' ? physios : coaches).map((person) => (
                <option key={person.id} value={person.name}>
                  {person.name}
                </option>
              ))}
            </select>
          </div>
        )}

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
