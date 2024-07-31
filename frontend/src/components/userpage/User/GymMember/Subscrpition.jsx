import React from "react";

function MembershipOptions() {
  return (
    <div className="flex justify-center items-center min-h-screen">

      <section className="py-6 dark:bg-gray-800 dark:text-gray-100 ">
      <h1 className="text-4xl font-bold leading-none text-start ml-28">Subscriptions</h1>

        <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">

         

          <div className="flex flex-wrap justify-center mt-8 space-x-4">

            <div className="flex flex-col overflow-hidden border-2 rounded-md  bg-[#051B40] w-60 md:w-72">
              <div className="flex flex-col items-center justify-center px-2 py-4 space-y-2 bg-[#051B40] text-white">
                <p className="text-xl font-medium">Cardio Workout</p>
                <p className="text-4xl font-bold">
                  2000Rs
                  <span className="text-xl dark:text-gray-600">/mo</span>
                </p>
                <p className="text-lg font-medium">3 days per week</p>
              </div>
              <div className="flex flex-col items-center justify-center px-2 py-4 bg-[#051B40]">
                <img src="./src/assets/GymPlans/cardio2.jpg" alt="Individual Plan" className="w-full h-auto" />
                <p className="text-sm font-medium text-white">Cardio workouts, including activities like running, cycling,..</p>
                <div className="flex justify-between space-x-2 mt-4">
                  <a href="/readmore" className="px-4 py-2 text-lg font-semibold rounded bg-white dark:text-black">
                    Read more
                  </a>
                  <a href="/subscriptionForm" className="px-4 py-2 text-lg font-semibold rounded bg-white dark:text-black">
                    Subscribe
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col overflow-hidden border-2 rounded-md  bg-[#051B40] w-60 md:w-72">
              <div className="flex flex-col items-center justify-center px-2 py-4 space-y-2 bg-[#051B40] text-white">
                <p className="text-xl font-medium">Strength Training</p>
                <p className="text-4xl font-bold">
                  3000Rs
                  <span className="text-xl dark:text-gray-600">/mo</span>
                </p>
                <p className="text-lg font-medium">3 days pr week</p>
              </div>
              <div className="flex flex-col items-center justify-center px-2 py-4 bg-[#051B40]">
                <img src="./src/assets/GymPlans/strength2.jpg" alt="Individual Plan" className="w-full h-auto" />
                <p className="text-sm font-medium text-white">Strength training workouts focus on increasing..</p>
                <div className="flex justify-between space-x-2 mt-4">
                  <a href="/readmore1" className="px-4 py-2 text-lg font-semibold rounded bg-white dark:text-black">
                    Read more
                  </a>
                  <a href="/subscriptionForm" className="px-4 py-2 text-lg font-semibold rounded bg-white dark:text-black">
                    Subscribe
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col overflow-hidden border-2 rounded-md  bg-[#051B40] w-60 md:w-72">
              <div className="flex flex-col items-center justify-center px-2 py-4 space-y-2 bg-[#051B40] text-white">
                <p className="text-xl font-medium">HIIT Training</p>
                <p className="text-4xl font-bold">
                  3000Rs
                  <span className="text-xl dark:text-gray-600">/mo</span>
                </p>
                <p className="text-lg font-medium">2 days per week</p>
              </div>
              <div className="flex flex-col items-center justify-center px-2 py-4 bg-[#051B40]">
                <img src="./src/assets/GymPlans/hiit2.jpg" alt="Individual Plan" className="w-full h-auto" />
                <p className="text-sm font-medium text-white">High-Intensity Interval Training (HIIT) involves.. </p>
                <div className="flex justify-between space-x-2 mt-4">
                  <a href="/readmore2" className="px-4 py-2 text-lg font-semibold rounded bg-white dark:text-black">
                    Read more
                  </a>
                  <a href="/subscriptionForm" className="px-4 py-2 text-lg font-semibold rounded bg-white dark:text-black">
                    Subscribe
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col overflow-hidden border-2 rounded-md  bg-[#051B40] w-60 md:w-72 mt-12">
              <div className="flex flex-col items-center justify-center px-2 py-4 space-y-2 bg-[#051B40] text-white">
                <p className="text-xl font-medium">Suspension Training</p>
                <p className="text-4xl font-bold">
                  3000Rs
                  <span className="text-xl dark:text-gray-600">/mo</span>
                </p>
                <p className="text-lg font-medium">2 days per week</p>
              </div>
              <div className="flex flex-col items-center justify-center px-2 py-4 bg-[#051B40]">
                <img src="./src/assets/GymPlans/suspension2.jpg" alt="Individual Plan" className="w-full h-auto" />
                <p className="text-sm font-medium text-white">Suspension training uses adjustable straps..</p>
                <div className="flex justify-between space-x-2 mt-4">
                  <a href="/readmore3" className="px-4 py-2 text-lg font-semibold rounded bg-white dark:text-black">
                    Read more
                  </a>
                  <a href="/subscriptionForm" className="px-4 py-2 text-lg font-semibold rounded bg-white dark:text-black">
                    Subscribe
                  </a>
                </div>              </div>
            </div>

            <div className="flex flex-col overflow-hidden border-2 rounded-md  bg-[#051B40] w-60 md:w-72 mt-12">
              <div className="flex flex-col items-center justify-center px-2 py-4 space-y-2 dark:bg-[#051B40] text-white">
                <p className="text-xl font-medium">Body Weight Training</p>
                <p className="text-4xl font-bold">
                  3000Rs
                  <span className="text-xl dark:text-gray-600">/mo</span>
                </p>
                <p className="text-lg font-medium">3 days per week</p>
              </div>
              <div className="flex flex-col items-center justify-center px-2 py-4 bg-[#051B40]">
                <img src="./src/assets/GymPlans/bodywei2.jpg" alt="Individual Plan" className="w-full h-auto" />
                <p className="text-sm font-medium text-white">Bodyweight training involves exercises that..</p>
                <div className="flex justify-between space-x-2 mt-4">
                  <a href="/readmore4" className="px-4 py-2 text-lg font-semibold rounded bg-white dark:text-black">
                    Read more
                  </a>
                  <a href="/subscriptionForm" className="px-4 py-2 text-lg font-semibold rounded bg-white dark:text-black">
                    Subscribe
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col overflow-hidden border-2 rounded-md  bg-[#051B40] w-60 md:w-72 mt-12">
              <div className="flex flex-col items-center justify-center px-2 py-4 space-y-2 bg-[#051B40] text-white">
                <p className="text-xl font-medium">Functional Training</p>
                <p className="text-4xl font-bold">
                  2000Rs
                  <span className="text-xl dark:text-gray-600">/mo</span>
                </p>
                <p className="text-lg font-medium">2 days per week</p>
              </div>
              <div className="flex flex-col items-center justify-center px-2 py-4 bg-[#051B40]">
                <img src="./src/assets/GymPlans/functional2.jpg" alt="Individual Plan" className="w-full h-auto" />
                <p className="text-sm font-medium text-white">Functional training focuses on exercises that..</p>
                <div className="flex justify-between space-x-2 mt-4">
                  <a href="/readmore5" className="px-4 py-2 text-lg font-semibold rounded bg-white dark:text-black">
                    Read more
                  </a>
                  <a href="/subscriptionForm" className="px-4 py-2 text-lg font-semibold rounded bg-white dark:text-black">
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
