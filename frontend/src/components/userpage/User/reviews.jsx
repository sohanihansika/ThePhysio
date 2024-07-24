import React from 'react';
import UserReviews from './userReviews'; // Ensure to import the UserReviews component if it's in another file

export default function Reviews() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="flex flex-col max-w-xl p-8 shadow-lg rounded-xl bg-white text-gray-800">
        <h2 className="text-3xl font-semibold text-center mb-4">
          Your opinion matters!
        </h2>
        <p className="text-center text-gray-600 mb-6">
          We value your feedback. Please share your thoughts with us!
        </p>
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
