import React, { useState } from 'react';
import UserReviews from '../Owner/viewReviews';
 // Ensure to import the UserReviews component if it's in another file

export default function Reviews() {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (event) => {
    setRating(Number(event.target.value));
  };

  const starStyle = {
    fontSize: '2rem', // Adjust size as needed
    color: '#d3d3d3', // Default color
    cursor: 'pointer',
    transition: 'color 0.2s',
  };

  const starCheckedStyle = {
    ...starStyle,
    color: '#ffcc00', // Color when selected
  };

  const starHoverStyle = {
    ...starStyle,
    color: '#ffcc00', // Color when hovered
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="flex flex-col max-w-xl p-8 shadow-lg rounded-xl bg-white text-gray-800">
        <h2 className="text-3xl font-semibold text-center mb-4">
          Your opinion matters!
        </h2>
        <p className="text-center text-gray-600 mb-6">
          We value your feedback. Please share your thoughts with us!
        </p>

        {/* Star Rating Section */}
        <div className="flex justify-center mb-6">
          <fieldset className="flex items-center">
            <legend className="sr-only">Rating</legend>
            {[...Array(5)].map((_, index) => (
              <input
                key={index}
                type="radio"
                name="rating"
                value={index + 1}
                id={`star${index + 1}`}
                checked={rating === index + 1}
                onChange={handleRatingChange}
                style={{ display: 'none' }} // Hide radio buttons
              />
            ))}
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <label
                  key={index}
                  htmlFor={`star${index + 1}`}
                  style={{
                    ...starStyle,
                    color: rating >= index + 1 ? starCheckedStyle.color : starStyle.color,
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = starHoverStyle.color)}
                  onMouseOut={(e) => (e.currentTarget.style.color = rating >= index + 1 ? starCheckedStyle.color : starStyle.color)}
                >
                  ★
                </label>
              ))}
            </div>
          </fieldset>
        </div>

        <textarea
          rows="4"
          className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#172b59]"
          placeholder="Leave a comment..."
        ></textarea>
        <a
          href="/success"
          className="block text-center text-white px-6 py-3 mt-6 rounded-full bg-[#172b59] hover:bg-[#0d1a33] active:bg-[#0b1627] shadow-lg transition-transform transform hover:scale-105"
        >
          Send
        </a>
        <div className="text-center mt-4">
          <a
            rel="noopener noreferrer"
            href="#"
            className="text-sm text-gray-600 hover:underline"
          >
            Maybe later
          </a>
        </div>
      </div>
      <UserReviews />
    </div>
  );
}
