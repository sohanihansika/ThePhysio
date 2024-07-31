import React from 'react';

const PricingSection = () => {
    return (
        <section className="py-20 dark:bg-gray-100 dark:text-gray-800 ">
            <div className="container px-4 mx-auto  ">
                <div className="max-w-2xl mx-auto mb-10 text-center ">
                    <span className="font-bold tracking-wider uppercase text-[#051B40]">The Physio Gym</span>
                    <h2 className="text-4xl font-bold lg:text-5xl">Choose your best Gym plan</h2>
                </div>
                <div className="flex flex-wrap items-stretch -mx-4">
                    <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                        <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-[#051B40]">
                            <div className="space-y-2">
                                <h4 className="text-2xl text-white font-bold">Bronze</h4>
                                <span className="text-6xl text-white font-bold">2000
                                <span className="text-sm tracking-wide">/Rs</span>
                                </span>
                            </div>
                            <p className="mt-3 leading-relaxed text-white">3 Months Package</p>
                            <ul className="flex-1 mb-6 text-white">
                                <li className="flex mb-2 space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-600">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span>Kickstart your fitness journey.</span>
                                </li>
                                <li className="flex mb-2 space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-600">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span>Access to all gym facilities.</span>
                                </li>
                                <li className="flex mb-2 space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-600">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span>Perfect for those looking to build a routine</span>
                                </li>
                            </ul>
                            <a href ="/halfyear" className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded bg-white dark:text-gray-50">Get Started</a>
                        </div>
                    </div>
                    <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                        <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-gray-600 dark:text-gray-50">
                            <div className="space-y-2">
                                <h4 className="text-2xl font-bold">Gold</h4>
                                <span className="text-6xl font-bold">4000
                                <span className="text-sm tracking-wide">/Rs</span>
                                </span>
                            </div>
                            <p className="leading-relaxed">6 Months Package</p>
                            <ul className="flex-1 space-y-2">
                                <li className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span>Commit to a healthier you.</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span>Benefit from consistent workouts </span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span>Ideal to establish long-term fitness habits.</span>
                                </li>
                            </ul>
                            <a rel="noopener noreferrer" href="/halfyear" className="inline-block w-full px-5 py-3 font-bold tracking-wider text-center rounded bg-white dark:text-gray-50">Get Started</a>
                        </div>
                    </div>
                    <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                        <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-gray-800">
                            <div className="space-y-2 text-white">
                                <h4 className="text-2xl font-bold ">Platinum</h4>
                                <span className="text-6xl font-bold">7000
                                    <span className="text-sm tracking-wide">/Rs</span>
                                </span>
                            </div>
                            <p className="leading-relaxed text-white">12 Month Package</p>
                            <ul className="flex-1 space-y-2 text-white">
                                <li className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-600">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span>Transform your lifestyle</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-600">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span>Get One free session</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-600">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span>Best value for dedicated individuals</span>
                                </li>
                            </ul>
                            <a rel="noopener noreferrer" href="/fullyear" className="inline-block w-full px-5 py-3 font-semibold tracking-wider text-center rounded bg-white dark:text-gray-50">Get Started</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PricingSection;
