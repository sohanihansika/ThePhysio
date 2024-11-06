import React, { useState, useEffect } from 'react';
import userImage from '../../../assets/user.png';
import ReviewService from '../../service/ReviewService'; // Make sure to adjust the path as necessary

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [filteredReviews, setFilteredReviews] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(''); // Empty string for no category selected
  const [error, setError] = useState('');
  const token = localStorage.getItem('token'); // Replace with your token retrieval method

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await ReviewService.getAllreviews(token);
        if (response.statusCode === 200) {
          setReviews(response.data); // Assuming the API returns an array of reviews in `response.data`
        } else {
          setError('Failed to fetch reviews');
        }
      } catch (error) {
        console.error('Failed to fetch reviews:', error);
        setError('Failed to load reviews.');
      }
    };

    fetchReviews();
  }, [token]);

  useEffect(() => {
    if (selectedCategory) {
      // Filter reviews based on selected category
      const filtered = reviews.filter((review) => review.category === selectedCategory);
      setFilteredReviews(filtered);
    } else {
      setFilteredReviews(reviews); // Show all reviews if no category is selected
    }
  }, [selectedCategory, reviews]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="max-w-2xl mx-auto px-4">
      {/* Category Filter Buttons */}
      <div className="flex justify-center space-x-4 mb-4">
        <button
          className={`px-4 py-2 rounded ${selectedCategory === 'Physio' ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}
          onClick={() => handleCategoryChange('Physio')}
        >
          Physio
        </button>
        <button
          className={`px-4 py-2 rounded ${selectedCategory === 'GymCoach' ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}
          onClick={() => handleCategoryChange('GymCoach')}
        >
          Gym Coach
        </button>
        <button
          className={`px-4 py-2 rounded ${selectedCategory === 'Company' ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}
          onClick={() => handleCategoryChange('Company')}
        >
          Company
        </button>
        <button
          className={`px-4 py-2 rounded ${selectedCategory === '' ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}
          onClick={() => handleCategoryChange('')}
        >
          All
        </button>
      </div>

      {/* Display Error Message if Any */}
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      {/* Reviews List */}
      <ul className="mt-12 divide-y divide-gray-200">
        {filteredReviews.map((item, idx) => (
          <li key={idx} className="py-5 flex items-start justify-between">
            <div className="flex gap-3">
              <img
                src={userImage} // Use the imported image
                alt={item.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <span className="block text-sm text-gray-700 font-semibold">{item.name}</span>
                <span className="block text-sm text-gray-500">{item.date}</span>
                <p className="mt-1 text-sm text-gray-600">{item.review}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
