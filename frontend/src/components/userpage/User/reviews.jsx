import React from 'react';
import UserReviews from './userReviews'; // Make sure to import the UserReviews component if it's in another file

export default function Reviews() {
  return (
    <div className="max-w-2xl mx-auto px-4">
      <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-50 dark:text-gray-800">
        <div className="flex flex-col items-center w-full">
          <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
          <div className="flex flex-col items-center py-6 space-y-3">
            <span className="text-center">How was your experience?</span>
            <div className="flex space-x-3">
              {Array.from({ length: 5 }, (_, index) => (
                <button
                  key={index}
                  type="button"
                  title={`Rate ${index + 1} stars`}
                  aria-label={`Rate ${index + 1} stars`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className={`w-10 h-10 ${
                      index + 1 <= 5 ? 'dark:text-yellow-500' : 'dark:text-gray-400'
                    }`}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </button>
              ))}
            </div>
          </div>
          <textarea
            rows="4"
            className="w-full p-2 mt-4 border rounded-md focus:ring focus:ring-opacity-75 focus:ring-indigo-500 dark:bg-gray-100 dark:text-gray-800"
            placeholder="Leave a comment..."
          ></textarea>
          <a
  href="/success"
  className="flex items-center gap-x-2 text-white px-6 py-3.5 mt-4 rounded-full bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 shadow-lg transform hover:scale-105 duration-150"
>
  <p className="flex-1">Send</p>
</a>

        </div>
        <div className="flex items-center justify-center mt-4">
          <a rel="noopener noreferrer" href="#" className="text-sm dark:text-gray-600">
            Maybe later
          </a>
        </div>
      </div>
      <UserReviews />
    </div>
  );
}
