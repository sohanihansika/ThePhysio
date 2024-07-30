import React from 'react';

const Card1 = () => {
  return (
    <section className="py-6 dark:bg-gray-100 dark:text-gray-900 mt-2">
      <div className="container mx-auto flex flex-col items-center justify-center max-w-lg p-4 lg:max-w-full sm:p-10 lg:flex-row lg:space-x-6">
        <div className="flex flex-col items-center justify-center flex-1 p-4 pb-8 sm:p-8 lg:p-16 bg-gray-500">
          <p className="text-3xl font-bold text-center">Membership</p>
          <p className="font-semibold text-center">We have 3 membership packages for our members</p>
          <a href="/gymMembership" className="px-8 py-3 mt-6 text-lg font-semibold border rounded sm:mt-12 dark:border-gray-300 bg-white">Get Membership</a>
        </div>
        <div className="flex flex-col items-center justify-center flex-1 p-4 pb-8 text-center rounded-md sm:p-8 lg:p-16 bg-gray-400 dark:text-gray-50">
          <p className="text-3xl font-bold">Subscriptions</p>
          <p className="font-semibold">We have over 10 workout plan packages for our members</p>
          <a href="/subscription" className="px-8 py-3 mt-6 text-lg font-semibold rounded sm:mt-12 bg-white dark:text-gray-900">Get Subscribed</a>
        </div>
      </div>
    </section>
  );
}

export default Card1;
