import { useState } from "react";

export default () => {
    return (
        <>
            <section className="dark:bg-gray-100 dark:text-gray-900 mt-10 w-3/4 ml-6">
                <div className="container mx-auto flex flex-col items-center justify-center px-4 lg:px-8 bg-gray-500 w-full h-auto py-20">
                    <div className="flex flex-col lg:flex-row items-center justify-between space-y-5 lg:space-y-0 w-full">
                        <div className="flex-none space-y-5 lg:max-w-sm sm:mr-8 lg:w-1/2 w-full">
                            <h1 className="text-4xl text-black font-bold md:text-5xl">
                                Cardio Workout
                            </h1>
                            <p className="text-black text-justify font-bold">
                                Cardio workouts, including activities like running, cycling, and swimming, elevate heart rate, improve cardiovascular health, and boost endurance. These exercises burn calories, aid weight loss, and enhance overall fitness. Regular cardio reduces the risk of heart disease, improves lung capacity, and increases energy levels, promoting a healthier lifestyle.
                            </p>
                            <p className="text-black ">
                                Payment Amount: 2000Rs<br/>
                                Days Per week : 3<br/>
                                Duration      : 1 month
                            </p>
                            <a href="/subscriptionForm" className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 bg-white border rounded-lg md:inline-flex">
                                Subscribe
                            </a>
                        </div>
                        <div className="flex-none mt-8 lg:mt-0 lg:w-1/2 w-full flex justify-center">
                            <img
                                src="./src/assets/GymPlans/cardio.png"
                                className="w-full lg:w-auto lg:max-w-md md:rounded-tl-[108px]"
                                alt="Cardio Workout"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
