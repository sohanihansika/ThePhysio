import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';

// Sample data
const gymCoachReviews = [
  { name: 'Mark Johnson', reviews: [{ rating: 4, comment: 'Very motivating coach!', date: '2023-07-05' }, { rating: 5, comment: 'Best coach ever!', date: '2023-06-25' }] },
  { name: 'Emily Davis', reviews: [{ rating: 5, comment: 'Loved the sessions!', date: '2023-07-02' }, { rating: 4, comment: 'Great coach.', date: '2023-06-10' }] },
  { name: 'Tom Wilson', reviews: [{ rating: 5, comment: 'Very effective workouts.', date: '2023-07-06' }, { rating: 3, comment: 'Good, but could improve.', date: '2023-06-12' }] },
  { name: 'Sarah Lee', reviews: [{ rating: 4, comment: 'Great coaching.', date: '2023-07-01' }, { rating: 5, comment: 'Very satisfied!', date: '2023-06-15' }] },
  { name: 'Paul Green', reviews: [{ rating: 5, comment: 'Highly motivating!', date: '2023-07-03' }, { rating: 4, comment: 'Effective training sessions.', date: '2023-06-18' }] },
];

const companyReviews = [
  { name: 'Professionalism', reviews: [{ rating: 5, comment: 'Excellent service!', date: '2023-07-10' }, { rating: 4, comment: 'Very professional.', date: '2023-06-28' }] },
  { name: 'Effectiveness', reviews: [{ rating: 4, comment: 'Great experience!', date: '2023-07-09' }, { rating: 3, comment: 'Good but room for improvement.', date: '2023-06-26' }] },
  { name: 'Bedside Manner', reviews: [{ rating: 5, comment: 'Highly recommend!', date: '2023-07-08' }, { rating: 5, comment: 'Very satisfied!', date: '2023-06-25' }] },
  { name: 'Facility Cleanliness', reviews: [{ rating: 3, comment: 'Average service.', date: '2023-07-07' }, { rating: 4, comment: 'Good, but could be better.', date: '2023-06-24' }] },
  { name: 'Classes/Programs', reviews: [{ rating: 5, comment: 'Outstanding experience!', date: '2023-07-06' }, { rating: 4, comment: 'Very good service.', date: '2023-06-23' }] },
];

const Reviews = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredGymCoachReviews, setFilteredGymCoachReviews] = useState(gymCoachReviews);
  const [filteredCompanyReviews, setFilteredCompanyReviews] = useState(companyReviews);
  const [reviewType, setReviewType] = useState('all'); // Default to all reviews

  useEffect(() => {
    const filteredGym = gymCoachReviews.filter(review =>
      review.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const filteredCompany = companyReviews.filter(review =>
      review.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredGymCoachReviews(filteredGym);
    setFilteredCompanyReviews(filteredCompany);
  }, [searchTerm]);

  const handleShowAll = () => {
    setSearchTerm('');
    setFilteredGymCoachReviews(gymCoachReviews);
    setFilteredCompanyReviews(companyReviews);
  };

  return (
    <div
      className="container mx-auto p-4"
      
    >
      <div className="mb-8">
        <div className="flex items-center justify-between">
        <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">Customer Reviews</h3>
          <div className="flex items-center">
            <select
              value={reviewType}
              onChange={(e) => setReviewType(e.target.value)}
              className="border border-gray-300 p-2 rounded-md mr-2"
              style={{ width: '150px' }}
            >
              <option value="all">All Reviews</option>
              <option value="gymCoach">Gym Coach</option>
              <option value="company">Company</option>
            </select>
            <input
              type="text"
              placeholder="Search by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-gray-300 p-2 rounded-md ml-2"
              style={{ width: '150px' }}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {(reviewType === 'all' || reviewType === 'gymCoach') && (
          <div className="w-full md:w-1/3 lg:w-1/3 p-2">
            <h2 className="text-xl font-bold mb-4 text-[#000099] text-center">Gym Coach Reviews</h2>
            {filteredGymCoachReviews.length > 0 ? (
              filteredGymCoachReviews.map((reviewItem) => (
                <div key={reviewItem.name} className="mb-4 p-2 bg-white shadow-sm rounded-md border border-gray-200">
                  <h2 className="text-lg font-semibold mb-2 text-[#000099]">{reviewItem.name}</h2>
                  {reviewItem.reviews.map((review, index) => (
                    <div key={index} className="mb-2">
                      <div className="flex items-center mb-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <FaStar key={i} className="w-3 h-3 text-yellow-500" />
                        ))}
                      </div>
                      <p className="text-gray-700 text-xs">{review.comment}</p>
                      <p className="text-gray-500 text-xs">Date: {review.date}</p>
                    </div>
                  ))}
                </div>
              ))
            ) : (
              <p className="text-gray-700 text-center text-xs">No reviews found for the specified name.</p>
            )}
          </div>
        )}
        {(reviewType === 'all' || reviewType === 'company') && (
          <div className="w-full md:w-1/3 lg:w-1/3 p-2">
            <h2 className="text-xl font-bold mb-4 text-[#000099] text-center">Company Reviews</h2>
            {filteredCompanyReviews.length > 0 ? (
              filteredCompanyReviews.map((reviewItem) => (
                <div key={reviewItem.name} className="mb-4 p-2 bg-white shadow-sm rounded-md border border-gray-200">
                  <h2 className="text-lg font-semibold mb-2 text-[#000099]">{reviewItem.name}</h2>
                  {reviewItem.reviews.map((review, index) => (
                    <div key={index} className="mb-2">
                      <div className="flex items-center mb-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <FaStar key={i} className="w-3 h-3 text-yellow-500" />
                        ))}
                      </div>
                      <p className="text-gray-700 text-xs">{review.comment}</p>
                      <p className="text-gray-500 text-xs">Date: {review.date}</p>
                    </div>
                  ))}
                </div>
              ))
            ) : (
              <p className="text-gray-700 text-center text-xs">No reviews found for the specified name.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Reviews;
