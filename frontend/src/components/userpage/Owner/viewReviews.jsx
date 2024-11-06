import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import ReviewService from '../../service/ReviewService'; // Adjust the path according to your project structure
import UserService from '../../service/UserService'; // Adjust the path according to your project structure

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [filteredReviews, setFilteredReviews] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [reviewType, setReviewType] = useState('all'); // Default to all reviews
  const [error, setError] = useState('');
  const [physioNames, setPhysioNames] = useState({}); // State to store physio names
  const [coachNames, setCoachNames] = useState({}); // State to store physio names

  const token = localStorage.getItem('token'); // Replace with your token retrieval method

  // Fetch reviews when the component mounts
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await ReviewService.getAllreviews(token);
        console.log('API Responses:', response); // Log the entire response

        if (Array.isArray(response)) {
          const allReviews = response;
          console.log('Reviews Data:', allReviews); // Log the reviews data
          setReviews(allReviews);

          // Fetch physio names once reviews are set
          fetchPhysioNames(allReviews);
          fetchCoachNames(allReviews);

        } else {
          console.error('Error fetching reviews: Invalid response format', response);
          setReviews([]);
          setError('Failed to fetch reviews');
        }
      } catch (error) {
        console.error('Failed to fetch reviews:', error);
        setReviews([]);
        setError('Failed to load reviews.');
      }
    };

    fetchReviews();
  }, [token]);

  // Fetch physio names based on physioIds in reviews
  const fetchPhysioNames = async (reviews) => {
    const names = {};
    const physioIds = [...new Set(reviews.map((review) => review.physioId))]; // Get unique physio IDs
    console.log('Unique Physio IDs:', physioIds);
  
    await Promise.all(
      physioIds.map(async (physioId) => {
        if (physioId) { // Check if physioId is valid
          try {
            const userDetailsResponse = await UserService.getUserById(physioId, token);
            const userDetails = userDetailsResponse.ourUsers; // Access the user details
            names[physioId] = userDetails.name; // Assuming the fetched object has a "name" field
            console.log("Updated Physio Names:", names);
          } catch (error) {
            console.error(`Failed to fetch user details for physioId ${physioId}:`, error);
            names[physioId] = 'Unknown'; // Fallback name in case of error
          }
        }
      })
    );
    
    setPhysioNames(names); // Move this line outside of the map function
  };

  const fetchCoachNames = async (reviews) => {
    const names = {};
    const coachIds = [...new Set(reviews.map((review) => review.coachId))]; // Get unique coach IDs
    console.log('Unique Coach IDs:', coachIds);
  
    await Promise.all(
      coachIds.map(async (coachId) => {
        if (coachId) { // Check if coachId is valid
          try {
            const userDetailsResponse = await UserService.getUserById(coachId, token);
            const userDetails = userDetailsResponse.ourUsers; // Access the user details
            names[coachId] = userDetails.name; // Assuming the fetched object has a "name" field
            console.log("Updated Coach Names:", names);
          } catch (error) {
            console.error(`Failed to fetch user details for coachId ${coachId}:`, error);
            names[coachId] = 'Unknown'; // Fallback name in case of error
          }
        }
      })
    );
    
    setCoachNames(names); // Move this line outside of the map function
  };

  // Filter and sort reviews by search term, category, and rating
  useEffect(() => {
    if (Array.isArray(reviews) && reviews.length > 0) {
      const filtered = reviews
        .filter(
          (review) =>
            (reviewType === 'all' || (review.category && review.category.toLowerCase() === reviewType)) &&
            (review.comment && review.comment.toLowerCase().includes(searchTerm.toLowerCase()))
        )
        .sort((a, b) => b.rate - a.rate); // Sort by rating in descending order

      setFilteredReviews(filtered);
    } else {
      setFilteredReviews([]); // Reset filtered reviews if no valid data is present
    }
  }, [searchTerm, reviews, reviewType]);

  // Separate reviews by category
  const companyReviews = filteredReviews.filter((review) => review.category.toLowerCase() === 'company');
  const physioReviews = filteredReviews.filter((review) => review.category.toLowerCase() === 'physio');
  const coachReviews = filteredReviews.filter((review) => review.category.toLowerCase() === 'gymcoach');

  return (
    <div className="container mx-auto p-4">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <h3 className="text-3xl font-bold text-[#000000]">Customer Reviews</h3>
          <div className="flex items-center">
            <select
              value={reviewType}
              onChange={(e) => setReviewType(e.target.value)}
              className="border border-gray-300 p-2 rounded-md mr-2"
              style={{ width: '200px' }}
            >
              <option value="all">All Reviews</option>
              <option value="physio">Physiotherapist</option>
              <option value="gymcoach">Gym Coach</option>
              <option value="company">Company</option>
            </select>
            <input
              type="text"
              placeholder="Search by comment..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-gray-300 p-2 rounded-md ml-2"
            />
          </div>
        </div>
      </div>

      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="flex justify-between">
          {/* Company Reviews Section */}
          <div className="w-1/3 p-2">
            <h4 className="text-2xl font-bold mb-2">Company Reviews</h4>
            {companyReviews.length > 0 ? (
              companyReviews.map((review) => (
                <div key={review.id} className="mb-4 p-4 bg-white shadow-md rounded-md border border-gray-200">
                  <h2 className="text-xl font-semibold mb-2 text-[#5771b3]">{review.category}</h2>
                  <div className="flex items-center mb-1">
                    {[...Array(review.rate)].map((_, i) => (
                      <FaStar key={i} className="w-4 h-4 text-yellow-200" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm">{review.comment}</p>
                  <p className="text-gray-500 text-xs">Date: {review.createdDate || 'N/A'}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-700">No company reviews found.</p>
            )}
          </div>

          {/* Physio Reviews Section */}
          <div className="w-1/3 p-2">
            <h4 className="text-2xl font-bold mb-2">Physio Reviews</h4>
            {physioReviews.length > 0 ? (
              physioReviews.map((review) => (
                <div key={review.id} className="mb-4 p-4 bg-white shadow-md rounded-md border border-gray-200">
                  <h2 className="text-xl font-semibold mb-2 text-[#5771b3]">
                    {physioNames[review.physioId] || 'Unknown Physio'} {/* Display physio name or fallback */}
                  </h2>
                  <div className="flex items-center mb-1">
                    {[...Array(review.rate)].map((_, i) => (
                      <FaStar key={i} className="w-4 h-4 text-yellow-200" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm">{review.comment}</p>
                  <p className="text-gray-500 text-xs">Date: {review.createdDate || 'N/A'}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-700">No physio reviews found.</p>
            )}
          </div>

          {/* Gym Coach Reviews Section */}
          <div className="w-1/3 p-2">
            <h4 className="text-2xl font-bold mb-2">Gym Coach Reviews</h4>
            {coachReviews.length > 0 ? (
              coachReviews.map((review) => (
                <div key={review.id} className="mb-4 p-4 bg-white shadow-md rounded-md border border-gray-200">
                  <h2 className="text-xl font-semibold mb-2 text-[#5771b3]">
                    {coachNames[review.coachId] || 'Unknown Coach'} {/* Display coach name or fallback */}
                  </h2>
                  <div className="flex items-center mb-1">
                    {[...Array(review.rate)].map((_, i) => (
                      <FaStar key={i} className="w-4 h-4 text-yellow-200" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm">{review.comment}</p>
                  <p className="text-gray-500 text-xs">Date: {review.createdDate || 'N/A'}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-700">No gym coach reviews found.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Reviews;
