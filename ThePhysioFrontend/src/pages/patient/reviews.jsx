import React, { useState } from 'react';

function PatientProfile() {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');
  const [rating, setRating] = useState(0);

  const addReview = (e) => {
    e.preventDefault();
    if (newReview.trim() !== '' && rating > 0) {
      const review = {
        id: reviews.length + 1,
        content: newReview,
        rating: rating,
        date: new Date().toLocaleDateString(),
      };
      setReviews([...reviews, review]);
      setNewReview('');
      setRating(0);
    }
  };

  const deleteReview = (id) => {
    const updatedReviews = reviews.filter(review => review.id !== id);
    setReviews(updatedReviews);
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-blue-900 p-4">
      <h1 className="text-3xl font-extrabold mb-6 text-white font-sans">Patient Profile</h1>

      <form onSubmit={addReview} className="bg-white p-6 rounded-md shadow-md w-full max-w-md mb-4">
        <h2 className="text-xl font-bold mb-2 text-gray-800">Add a Review</h2>
        <textarea
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          placeholder="Write your review..."
          rows="4"
          className="w-full py-2 px-3 border rounded-md shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4"
        />
        <div className="flex justify-between items-center mb-4">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className={`h-8 w-8 cursor-pointer ${rating >= star ? 'text-yellow-400' : 'text-gray-300'}`}
                onClick={() => handleRatingChange(star)}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049.745l2.392 6.943 7.614.01c.847 0 1.196 1.09.516 1.568L13.498 13.2l1.846 7.209c.193.753-.7 1.367-1.329.84l-5.874-4.418L2.266 21.25c-.63.527-1.522-.086-1.329-.84L2.784 13.2.011 8.282c-.68-.478-.331-1.568.516-1.568l7.614-.01L9.049.745z" />
              </svg>
            ))}
          </div>
          <span className="text-gray-700">{rating} / 5</span>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 font-semibold"
        >
          Submit Review
        </button>
      </form>

      <div className="w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-white font-sans">Reviews</h2>
        {reviews.length > 0 ? (
          <ul className="bg-white p-4 rounded-md shadow-md">
            {reviews.map((review) => (
              <li key={review.id} className="mb-2">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-800">{review.content}</p>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className={`h-5 w-5 ${review.rating >= star ? 'text-yellow-400' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049.745l2.392 6.943 7.614.01c.847 0 1.196 1.09.516 1.568L13.498 13.2l1.846 7.209c.193.753-.7 1.367-1.329.84l-5.874-4.418L2.266 21.25c-.63.527-1.522-.086-1.329-.84L2.784 13.2.011 8.282c-.68-.478-.331-1.568.516-1.568l7.614-.01L9.049.745z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                  <button
                    onClick={() => deleteReview(review.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 font-semibold"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-300">No reviews yet.</p>
        )}
      </div>
    </div>
  );
}

export default PatientProfile;
