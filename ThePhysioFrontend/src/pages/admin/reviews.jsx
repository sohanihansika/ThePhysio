import React, { useState } from 'react';

const PhysiotherapistSession = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    patientName: '',
    rating: '',
    comment: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReviews([...reviews, newReview]);
    setNewReview({ patientName: '', rating: '', comment: '' });
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Physiotherapist Session Reviews</h1>
      
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-md shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="patientName">
            Your Name
          </label>
          <input 
            type="text" 
            name="patientName" 
            value={newReview.patientName} 
            onChange={handleChange} 
            placeholder="Your Name" 
            required 
            className="w-full py-2 px-3 border rounded-md shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rating">
            Rating (1-5)
          </label>
          <input 
            type="number" 
            name="rating" 
            value={newReview.rating} 
            onChange={handleChange} 
            placeholder="Rating (1-5)" 
            min="1" 
            max="5" 
            required 
            className="w-full py-2 px-3 border rounded-md shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="comment">
            Your Review
          </label>
          <textarea 
            name="comment" 
            value={newReview.comment} 
            onChange={handleChange} 
            placeholder="Your Review" 
            required 
            className="w-full py-2 px-3 border rounded-md shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          ></textarea>
        </div>
        <button 
          type="submit" 
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Submit Review
        </button>
      </form>

      <div className="mt-8">
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
    </div>
  );
};

export default PhysiotherapistSession;
