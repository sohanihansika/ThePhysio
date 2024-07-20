import React, { useState } from 'react';

const physiotherapistReviews = [
  {
    name: 'John Doe',
    reviews: [
      { rating: 5, comment: 'Excellent physiotherapist!' },
      { rating: 4, comment: 'Very helpful and professional.' },
    ],
  },
  {
    name: 'Jane Smith',
    reviews: [
      { rating: 5, comment: 'Great experience!' },
      { rating: 3, comment: 'Good but room for improvement.' },
    ],
  },
];

const gymCoachReviews = [
  {
    name: 'Mark Johnson',
    reviews: [
      { rating: 4, comment: 'Very motivating coach!' },
      { rating: 5, comment: 'Best coach ever!' },
    ],
  },
  {
    name: 'Emily Davis',
    reviews: [
      { rating: 5, comment: 'Loved the sessions!' },
      { rating: 4, comment: 'Great coach.' },
    ],
  },
];

const Reviews = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredReviews, setFilteredReviews] = useState([]);
  const [reviewType, setReviewType] = useState('physiotherapist'); // Default to physiotherapist

  const handleSearch = () => {
    const reviews = reviewType === 'physiotherapist' ? physiotherapistReviews : gymCoachReviews;
    const filtered = reviews.filter(review =>
      review.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredReviews(filtered);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Search Reviews</h1>
      <div className="flex mb-4">
        <select
          value={reviewType}
          onChange={(e) => setReviewType(e.target.value)}
          className="border border-gray-300 p-2 rounded-md mr-2"
        >
          <option value="physiotherapist">Physiotherapist</option>
          <option value="gymCoach">Gym Coach</option>
        </select>
        <input
          type="text"
          placeholder="Type name here..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 p-2 rounded-md mr-2"
        />
        <button onClick={handleSearch} className="bg-blue-500 text-white p-2 rounded-md">
          Search
        </button>
      </div>
      <div>
        {filteredReviews.length > 0 ? (
          filteredReviews.map((reviewItem) => (
            <div key={reviewItem.name} className="mb-4 p-4 bg-white shadow-md rounded-md">
              <h2 className="text-xl font-semibold mb-2">{reviewItem.name}</h2>
              {reviewItem.reviews.map((review, index) => (
                <div key={index} className="mb-2">
                  <div className="flex items-center mb-1">
                    {[...Array(review.rating)].map((star, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.249 3.843a1 1 0 00.95.69h4.1c.969 0 1.371 1.24.588 1.81l-3.318 2.414a1 1 0 00-.364 1.118l1.248 3.843c.3.921-.755 1.688-1.539 1.118L10 13.92l-3.318 2.414c-.783.57-1.838-.197-1.538-1.118l1.248-3.843a1 1 0 00-.364-1.118L2.71 9.27c-.783-.57-.38-1.81.588-1.81h4.1a1 1 0 00.95-.69l1.249-3.843z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                </div>
              ))}
            </div>
          ))
        ) : (
          <p className="text-gray-700">No reviews found for the specified name.</p>
        )}
      </div>
    </div>
  );
};

export default Reviews;
