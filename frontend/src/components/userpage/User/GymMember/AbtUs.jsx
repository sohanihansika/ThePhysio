import React from "react";

function MembershipOptions() {
  return (
    <div className="flex justify-center items-center"> {/* Removed min-h-screen and mt-5 */}
      <section className="py-4 dark:bg-gray-800 dark:text-gray-100"> {/* Reduced padding */}

        <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-6"> {/* Reduced padding */}
          <h1 className="text-4xl font-bold leading-none text-center">Our Coaches</h1>
          <div className="relative flex items-center mt-5"> {/* Container for the cards and arrow buttons */}
            <button className="absolute left-0 z-10 p-2 bg-gray-200 rounded-full"> {/* Left arrow button */}
              &#9664;
            </button>
            <div className="flex flex-wrap justify-center space-x-10 mx-12"> {/* Increased spacing */}
              <div className="flex flex-col overflow-hidden border-2 rounded-md bg-[#051B40] w-70 md:w-64"> {/* Adjusted width */}
                <div className="flex flex-col items-center justify-center px-2 py-2 space-y-5 bg-[#051B40] text-white">
                  <p className="text-xl font-medium">Coach</p>
                  <p className="text-4xl font-bold">Mandy</p>
                  <p className="text-lg font-medium">Gym Trainer</p>
                </div>
                <div className="flex flex-col items-center justify-center px-2 py-2 bg-[#051B40]">
                  <img src="./src/assets/GymPlans/coach1.jpg" alt="Individual Plan" className="w-full h-auto" />
                  <div className="flex justify-between space-x-2 mt-4">
                    <a href="/viewCoach" className="px-4 py-2 text-lg font-semibold rounded bg-white dark:text-black">
                      View
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col overflow-hidden border-2 rounded-md bg-[#051B40] w-70 md:w-64"> {/* Adjusted width */}
                <div className="flex flex-col items-center justify-center px-2 py-2 space-y-5 bg-[#051B40] text-white">
                  <p className="text-xl font-medium">Coach</p>
                  <p className="text-4xl font-bold">Joe</p>
                  <p className="text-lg font-medium">Zumba Trainer</p>
                </div>
                <div className="flex flex-col items-center justify-center px-2 py-3 bg-[#051B40]">
                  <img src="./src/assets/GymPlans/coach2.jpg" alt="Individual Plan" className="w-full h-auto" />
                  <div className="flex justify-between space-x-2 mt-4">
                    <a href="/viewCoach" className="px-4 py-2 text-lg font-semibold rounded bg-white dark:text-black">
                      View
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col overflow-hidden border-2 rounded-md bg-[#051B40] w-70 md:w-64"> {/* Adjusted width */}
                <div className="flex flex-col items-center justify-center px-2 py-2 space-y-5 bg-[#051B40] text-white">
                  <p className="text-xl font-medium">Coach</p>
                  <p className="text-4xl font-bold">Bob</p>
                  <p className="text-lg font-medium">Gym Trainer</p>
                </div>
                <div className="flex flex-col items-center justify-center px-2 py-3 bg-[#051B40]">
                  <img src="./src/assets/GymPlans/coach3.jpg" alt="Individual Plan" className="w-full h-auto" />
                  <div className="flex justify-between space-x-2 mt-4">
                    <a href="/viewCoach" className="px-4 py-2 text-lg font-semibold rounded bg-white dark:text-black">
                      View
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <button className="absolute right-0 z-10 p-2 bg-gray-200 rounded-full"> {/* Right arrow button */}
              &#9654;
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MembershipOptions;
