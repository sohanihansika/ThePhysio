import { useState } from "react";

export default () => {
    return (
        <>
            <section className="py-6 dark:bg-gray-100 dark:text-gray-900 -mt-10">
                <div className="container mx-auto flex flex-col items-center justify-center px-4 lg:px-8 bg-white">
                    <div className="flex flex-col lg:flex-row items-center justify-between space-y-5 lg:space-y-0">
                        <div className="flex-none space-y-5 lg:max-w-lg lg:mr-8">
                            <h1 className=" text-lg text-black font-bold md:text-5xl">
                                About us
                            </h1>
                            <h2 className="text-4xl text-gray-800 font-extrabold md:text-5xl">
                                We help startups to build your health and fitness
                            </h2>
                            <p>
                                Our Gym is the best choice that you have ever made to maintain your health and fitness. There are multiple packages over 20 that you can follow in your comfy time.  
                            </p>
                            <a href="/subscription" className="flex items-center justify-center gap-x-2 py-2 px-4 text-white hover:text-gray-500 font-medium duration-150 active:bg-gray-100  bg-[#051B40] border rounded-lg md:inline-flex">
                                More
                            </a>
                        </div>
                        <div className="flex-none mt-8 lg:mt-0">
                            <img
                                src="./src/assets/GymPlans/gym2.png"
                                className="w-full lg:w-auto lg:max-w-md md:rounded-tl-[108px]"
                                alt="Startup"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
