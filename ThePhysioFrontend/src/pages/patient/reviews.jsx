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
    <div>
      <h1>Physiotherapist Session Reviews</h1>
      
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="patientName" 
          value={newReview.patientName} 
          onChange={handleChange} 
          placeholder="Your Name" 
          required 
        />
        <input 
          type="number" 
          name="rating" 
          value={newReview.rating} 
          onChange={handleChange} 
          placeholder="Rating (1-5)" 
          min="1" 
          max="5" 
          required 
        />
        <textarea 
          name="comment" 
          value={newReview.comment} 
          onChange={handleChange} 
          placeholder="Your Review" 
          required 
        />
        <button type="submit">Submit Review</button>
      </form>

      <div>
        <h2>Reviews</h2>
        {reviews.length === 0 && <p>No reviews yet.</p>}
        {reviews.map((review, index) => (
          <div key={index}>
            <h3>{review.patientName}</h3>
            <p>Rating: {review.rating}</p>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhysiotherapistSession;
