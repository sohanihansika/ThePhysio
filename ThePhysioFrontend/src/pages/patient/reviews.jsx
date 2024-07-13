import React, { useState, useEffect } from 'react';

const App = () => {
  const [reviews, setReviews] = useState([]);

  // Example: Fetching reviews from an API
  useEffect(() => {
    fetch('https://api.example.com/reviews')
      .then(response => response.json())
      .then(data => setReviews(data.reviews)) // Assuming data.reviews is an array of reviews
      .catch(error => console.error('Error fetching reviews:', error));
  }, []);

  return (
    <div className="App">
      <div>
        <h1>Applied Reviews</h1>
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <div>
                <strong>Author:</strong> {review.author}
              </div>
              <div>
                <strong>Rating:</strong> {review.rating}/5
              </div>
              <div>
                <strong>Comment:</strong> {review.comment}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
