import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const physiotherapistReviews = [
  {
    name: 'John Doe',
    reviews: [
      { rating: 5, comment: 'Excellent physiotherapist!', date: '2023-07-01' },
      { rating: 4, comment: 'Very helpful and professional.', date: '2023-06-15' },
    ],
  },
  {
    name: 'Jane Smith',
    reviews: [
      { rating: 5, comment: 'Great experience!', date: '2023-06-20' },
      { rating: 3, comment: 'Good but room for improvement.', date: '2023-05-30' },
    ],
  },
];

const gymCoachReviews = [
  {
    name: 'Mark Johnson',
    reviews: [
      { rating: 4, comment: 'Very motivating coach!', date: '2023-07-05' },
      { rating: 5, comment: 'Best coach ever!', date: '2023-06-25' },
    ],
  },
  {
    name: 'Emily Davis',
    reviews: [
      { rating: 5, comment: 'Loved the sessions!', date: '2023-07-02' },
      { rating: 4, comment: 'Great coach.', date: '2023-06-10' },
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
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-3xl font-bold mb-4 text-[#000000]">Search Reviews</h1>
        <div className="flex">
          <select
            value={reviewType}
            onChange={(e) => setReviewType(e.target.value)}
            className="border border-gray-300 p-2 rounded-l-md mr-0"
            style={{ width: '200px' }} // Adjust the width as needed
          >
            <option value="physiotherapist">Physiotherapist</option>
            <option value="gymCoach">Gym Coach</option>
          </select>
          <input
            type="text"
            placeholder="Type name here..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 p-2 rounded-r-md mr-2"
          />
          <button onClick={handleSearch} className="bg-[#000099] text-white p-2 rounded-md hover:bg-[#00007f]">
            Search
          </button>
        </div>
      </div>
      <div>
        {filteredReviews.length > 0 ? (
          filteredReviews.map((reviewItem) => (
            <div key={reviewItem.name} className="mb-4 p-4 bg-white shadow-md rounded-md">
              <h2 className="text-xl font-semibold mb-2 text-[#000099]">{reviewItem.name}</h2>
              {reviewItem.reviews.map((review, index) => (
                <div key={index} className="mb-2">
                  <div className="flex items-center mb-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar key={i} className="w-5 h-5 text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                  <p className="text-gray-500 text-sm">Date: {review.date}</p>
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
