import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';

// Sample data
const physiotherapistReviews = [
  { name: 'John Doe', reviews: [{ rating: 5, comment: 'Excellent physiotherapist!', date: '2023-07-01' }, { rating: 4, comment: 'Very helpful and professional.', date: '2023-06-15' }] },
  { name: 'Jane Smith', reviews: [{ rating: 5, comment: 'Great experience!', date: '2023-06-20' }, { rating: 3, comment: 'Good but room for improvement.', date: '2023-05-30' }] },
  { name: 'Alice Brown', reviews: [{ rating: 4, comment: 'Very professional.', date: '2023-07-03' }, { rating: 5, comment: 'Highly recommend!', date: '2023-06-18' }] },
  { name: 'Bob White', reviews: [{ rating: 5, comment: 'Great service!', date: '2023-07-04' }, { rating: 3, comment: 'Satisfactory.', date: '2023-06-22' }] },
  { name: 'Carol Black', reviews: [{ rating: 4, comment: 'Very knowledgeable.', date: '2023-07-02' }, { rating: 5, comment: 'Amazing experience!', date: '2023-06-14' }] },
];

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
  const [filteredPhysiotherapistReviews, setFilteredPhysiotherapistReviews] = useState(physiotherapistReviews);
  const [filteredGymCoachReviews, setFilteredGymCoachReviews] = useState(gymCoachReviews);
  const [filteredCompanyReviews, setFilteredCompanyReviews] = useState(companyReviews);
  const [reviewType, setReviewType] = useState('all'); // Default to all reviews

  useEffect(() => {
    const filteredPhysio = physiotherapistReviews.filter(review =>
      review.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const filteredGym = gymCoachReviews.filter(review =>
      review.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const filteredCompany = companyReviews.filter(review =>
      review.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPhysiotherapistReviews(filteredPhysio);
    setFilteredGymCoachReviews(filteredGym);
    setFilteredCompanyReviews(filteredCompany);
  }, [searchTerm]);

  const handleShowAll = () => {
    setSearchTerm('');
    setFilteredPhysiotherapistReviews(physiotherapistReviews);
    setFilteredGymCoachReviews(gymCoachReviews);
    setFilteredCompanyReviews(companyReviews);
  };

  return (
    <div
      className="container mx-auto p-4"
      
    >
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
              <option value="physiotherapist">Physiotherapist</option>
              <option value="gymCoach">Gym Coach</option>
              <option value="company">Company</option>
            </select>
            <input
              type="text"
              placeholder="Search by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-gray-300 p-2 rounded-md ml-2"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {(reviewType === 'all' || reviewType === 'physiotherapist') && (
          <div>
            <h2 className="text-2xl font-bold mb-4 text-[#172b59]">Physiotherapist Reviews</h2>
            {filteredPhysiotherapistReviews.length > 0 ? (
              filteredPhysiotherapistReviews.map((reviewItem) => (
                <div key={reviewItem.name} className="mb-4 p-4 bg-white shadow-md rounded-md border border-gray-200">
                  <h2 className="text-xl font-semibold mb-2 text-[#5771b3]">{reviewItem.name}</h2>
                  {reviewItem.reviews.map((review, index) => (
                    <div key={index} className="mb-2">
                      <div className="flex items-center mb-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <FaStar key={i} className="w-4 h-4 text-yellow-200" />
                        ))}
                      </div>
                      <p className="text-gray-700 text-sm">{review.comment}</p>
                      <p className="text-gray-500 text-xs">Date: {review.date}</p>
                    </div>
                  ))}
                </div>
              ))
            ) : (
              <p className="text-gray-700">No reviews found for the specified name.</p>
            )}
          </div>
        )}
        {(reviewType === 'all' || reviewType === 'gymCoach') && (
          <div>
            <h2 className="text-2xl font-bold mb-4 text-[#172b59]">Gym Coach Reviews</h2>
            {filteredGymCoachReviews.length > 0 ? (
              filteredGymCoachReviews.map((reviewItem) => (
                <div key={reviewItem.name} className="mb-4 p-4 bg-white shadow-md rounded-md border border-gray-200">
                  <h2 className="text-xl font-semibold mb-2 text-[#5771b3]">{reviewItem.name}</h2>
                  {reviewItem.reviews.map((review, index) => (
                    <div key={index} className="mb-2">
                      <div className="flex items-center mb-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <FaStar key={i} className="w-4 h-4 text-yellow-200" />
                        ))}
                      </div>
                      <p className="text-gray-700 text-sm">{review.comment}</p>
                      <p className="text-gray-500 text-xs">Date: {review.date}</p>
                    </div>
                  ))}
                </div>
              ))
            ) : (
              <p className="text-gray-700">No reviews found for the specified name.</p>
            )}
          </div>
        )}
        {(reviewType === 'all' || reviewType === 'company') && (
          <div>
            <h2 className="text-2xl font-bold mb-4 text-[#172b59]">Company Reviews</h2>
            {filteredCompanyReviews.length > 0 ? (
              filteredCompanyReviews.map((reviewItem) => (
                <div key={reviewItem.name} className="mb-4 p-4 bg-white shadow-md rounded-md border border-gray-200">
                  <h2 className="text-xl font-semibold mb-2 text-[#5771b3]">{reviewItem.name}</h2>
                  {reviewItem.reviews.map((review, index) => (
                    <div key={index} className="mb-2">
                      <div className="flex items-center mb-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <FaStar key={i} className="w-4 h-4 text-yellow-200" />
                        ))}
                      </div>
                      <p className="text-gray-700 text-sm">{review.comment}</p>
                      <p className="text-gray-500 text-xs">Date: {review.date}</p>
                    </div>
                  ))}
                </div>
              ))
            ) : (
              <p className="text-gray-700">No reviews found for the specified name.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Reviews;
