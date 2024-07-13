import React, { useEffect, useState } from 'react';

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const savedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
    setReviews(savedReviews);
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center">Reviews</h2>
      {reviews.length === 0 && <p className="text-gray-500 text-center">No reviews yet.</p>}
      {reviews.map((review, index) => (
        <div key={index} className="bg-gray-100 p-4 rounded-md shadow-md mb-4">
          <h3 className="text-xl font-bold">{review.patientName}</h3>
          <p className="text-yellow-500 font-bold">Rating: {review.rating}</p>
          <p className="text-gray-700">{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewsPage;
