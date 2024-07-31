import React from "react";

function MembershipOptions() {
  return (
    <div className="flex justify-center items-center min-h-screen">

      <section className="py-6 dark:bg-gray-800 dark:text-gray-100 ">

        <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">

          <h1 className="text-4xl font-bold leading-none text-center">Subscriptions</h1>

          <div className="flex flex-wrap justify-center mt-8 space-x-4">

            <div className="flex flex-col overflow-hidden border-2 rounded-md dark:border-gray-300 bg-[#051B40] w-60 md:w-72">
              <div className="flex flex-col items-center justify-center px-2 py-4 space-y-2 dark:bg-gray-100 text-white">
                <p className="text-xl font-medium">Cardio Workout</p>
                <p className="text-4xl font-bold">
                  2000Rs
                  <span className="text-xl dark:text-gray-600">/mo</span>
                </p>
                <p className="text-lg font-medium">3 days per week</p>
              </div>
              <div className="flex flex-col items-center justify-center px-2 py-4 dark:bg-gray-50">
                <img src="./src/assets/GymPlans/cardio.png" alt="Individual Plan" className="w-full h-auto" />
                <p className="text-sm font-medium text-white">The cardio workout keeps your hear healthier..</p>
                <div className="flex justify-between space-x-2 mt-4">
                  <a href="/readmore" className="px-4 py-2 text-lg font-semibold rounded bg-white dark:text-gray-50">
                    Read more
                  </a>
                  <a href="/subscriptionForm" className="px-4 py-2 text-lg font-semibold rounded bg-white dark:text-gray-50">
                    Subscribe
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col overflow-hidden border-2 rounded-md dark:border-gray-300 bg-[#051B40] w-60 md:w-72">
              <div className="flex flex-col items-center justify-center px-2 py-4 space-y-2 dark:bg-gray-100 text-white">
                <p className="text-xl font-medium">Strength Training</p>
                <p className="text-4xl font-bold">
                  3000Rs
                  <span className="text-xl dark:text-gray-600">/mo</span>
                </p>
                <p className="text-lg font-medium">3 days pr week</p>
              </div>
              <div className="flex flex-col items-center justify-center px-2 py-4 dark:bg-gray-50">
                <img src="./src/assets/GymPlans/strength.png" alt="Individual Plan" className="w-full h-auto" />
                <p className="text-sm font-medium text-white">The Strength Training always keeps you actively..</p>
                <div className="flex justify-between space-x-2 mt-4">
                  <a href="/readmore1" className="px-4 py-2 text-lg font-semibold rounded bg-white dark:text-gray-50">
                    Read more
                  </a>
                  <a href="/subscriptionForm" className="px-4 py-2 text-lg font-semibold rounded bg-white dark:text-gray-50">
                    Subscribe
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col overflow-hidden border-2 rounded-md dark:border-gray-300 bg-[#051B40] w-60 md:w-72">
              <div className="flex flex-col items-center justify-center px-2 py-4 space-y-2 dark:bg-gray-100 text-white">
                <p className="text-xl font-medium">HIIT Training</p>
                <p className="text-4xl font-bold">
                  3000Rs
                  <span className="text-xl dark:text-gray-600">/mo</span>
                </p>
                <p className="text-lg font-medium">2 days per week</p>
              </div>
              <div className="flex flex-col items-center justify-center px-2 py-4 dark:bg-gray-50">
                <img src="./src/assets/GymPlans/hiit.png" alt="Individual Plan" className="w-full h-auto" />
                <p className="text-sm font-medium text-white">HIIT Training make your muscels more fit and healthy.. </p>
                <div className="flex justify-between space-x-2 mt-4">
                  <a href="/readmore2" className="px-4 py-2 text-lg font-semibold rounded bg-white dark:text-gray-50">
                    Read more
                  </a>
                  <a href="/subscriptionForm" className="px-4 py-2 text-lg font-semibold rounded bg-white dark:text-gray-50">
                    Subscribe
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col overflow-hidden border-2 rounded-md dark:border-gray-300 bg-[#051B40] w-60 md:w-72 mt-12">
              <div className="flex flex-col items-center justify-center px-2 py-4 space-y-2 dark:bg-gray-100 text-white">
                <p className="text-xl font-medium">Suspension Training</p>
                <p className="text-4xl font-bold">
                  3000Rs
                  <span className="text-xl dark:text-gray-600">/mo</span>
                </p>
                <p className="text-lg font-medium">2 days per week</p>
              </div>
              <div className="flex flex-col items-center justify-center px-2 py-4 dark:bg-gray-50">
                <img src="./src/assets/GymPlans/suspension.png" alt="Individual Plan" className="w-full h-auto" />
                <p className="text-sm font-medium text-white">The  Suspension training keeps your body healthier..</p>
                <div className="flex justify-between space-x-2 mt-4">
                  <a href="/readmore3" className="px-4 py-2 text-lg font-semibold rounded bg-white dark:text-gray-50">
                    Read more
                  </a>
                  <a href="/subscriptionForm" className="px-4 py-2 text-lg font-semibold rounded bg-white dark:text-gray-50">
                    Subscribe
                  </a>
                </div>              </div>
            </div>

            <div className="flex flex-col overflow-hidden border-2 rounded-md dark:border-gray-300 bg-[#051B40] w-60 md:w-72 mt-12">
              <div className="flex flex-col items-center justify-center px-2 py-4 space-y-2 dark:bg-gray-100 text-white">
                <p className="text-xl font-medium">Body Weight Training</p>
                <p className="text-4xl font-bold">
                  3000Rs
                  <span className="text-xl dark:text-gray-600">/mo</span>
                </p>
                <p className="text-lg font-medium">3 days per week</p>
              </div>
              <div className="flex flex-col items-center justify-center px-2 py-4 dark:bg-gray-50">
                <img src="./src/assets/GymPlans/bodywei.png" alt="Individual Plan" className="w-full h-auto" />
                <p className="text-sm font-medium text-white">To maintain your body weight this traing is the best one..</p>
                <div className="flex justify-between space-x-2 mt-4">
                  <a href="/readmore4" className="px-4 py-2 text-lg font-semibold rounded bg-white dark:text-gray-50">
                    Read more
                  </a>
                  <a href="/subscriptionForm" className="px-4 py-2 text-lg font-semibold rounded bg-white dark:text-gray-50">
                    Subscribe
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col overflow-hidden border-2 rounded-md dark:border-gray-300 bg-[#051B40] w-60 md:w-72 mt-12">
              <div className="flex flex-col items-center justify-center px-2 py-4 space-y-2 dark:bg-gray-100 text-white">
                <p className="text-xl font-medium">Functional Training</p>
                <p className="text-4xl font-bold">
                  2000Rs
                  <span className="text-xl dark:text-gray-600">/mo</span>
                </p>
                <p className="text-lg font-medium">2 days per week</p>
              </div>
              <div className="flex flex-col items-center justify-center px-2 py-4 dark:bg-gray-50">
                <img src="./src/assets/GymPlans/functional.png" alt="Individual Plan" className="w-full h-auto" />
                <p className="text-sm font-medium text-white">The functional Train gives you much more energy..</p>
                <div className="flex justify-between space-x-2 mt-4">
                  <a href="/readmore5" className="px-4 py-2 text-lg font-semibold rounded bg-white dark:text-gray-50">
                    Read more
                  </a>
                  <a href="/subscriptionForm" className="px-4 py-2 text-lg font-semibold rounded bg-white dark:text-gray-50">
                    Subscribe
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default MembershipOptions;
