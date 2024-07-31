import React from 'react';

const Card1 = () => {
  return (
    <section className="py-4 dark:bg-gray-100 dark:text-gray-900 mt-2">
      <div className="container mx-auto flex flex-col items-center justify-center max-w-md p-2 lg:max-w-full sm:p-4 lg:flex-row lg:space-x-4">
        <div className="flex flex-col items-center justify-center flex-1 p-2 pb-4 sm:p-4 lg:p-8 bg-gray-500 rounded-md">
          <p className="text-2xl font-bold text-center">Membership</p>
          <p className="text-center">We have 3 membership packages for our members</p>
          <a href="/gymMembership" className="px-4 py-2 mt-4 text-sm font-semibold border rounded dark:border-gray-300 bg-white">Get Membership</a>
        </div>
        <div className="flex flex-col items-center justify-center flex-1 p-2 pb-4 text-center rounded-md sm:p-4 lg:p-8 bg-gray-400 dark:text-gray-50">
          <p className="text-2xl font-bold">Subscriptions</p>
          <p className="text-center">We have over 10 workout plan packages for our members</p>
          <a href="/subscription" className="px-4 py-2 mt-4 text-sm font-semibold rounded bg-white dark:text-gray-900">Get Subscribed</a>
        </div>
      </div>
    </section>
  );
}

export default Card1;
