import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserService from '../../../service/UserService';

const PackageCard = ({ title, features, bgColor, btnColor, membershipType, userId }) => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate(`/finalize?Id=${userId}&Type=${membershipType}`);
    };

    return (
        <div className={`flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0`}>
            <div className={`flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 ${bgColor}`}>
                <p className="mt-3 leading-relaxed text-white text-4xl font-bold">{title}</p>
                <ul className="flex-1 mb-6 text-white">
                    {features.map((feature, index) => (
                        <li key={index} className="flex mb-2 space-x-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="flex-shrink-0 w-6 h-6 dark:text-violet-600"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
                <button
                    onClick={handleGetStarted}
                    className={`inline-block w-full px-5 py-3 font-bold tracking-wider text-center rounded ${btnColor}`}
                >
                    Get Started
                </button>
            </div>
        </div>
    );
};

const PricingSection = () => {
    const [currentUserId, setCurrentUserId] = useState(null);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const tokenValue = localStorage.getItem('token');
                const userProfileResponse = await UserService.getMyProfile(tokenValue);
                setCurrentUserId(userProfileResponse?.ourUsers?.id || 'N/A');
                console.log('Current user id:', currentUserId);
            } catch (error) {
                console.error('Error fetching user profile:', error);
                setCurrentUserId('N/A');
            }
        };

        fetchUserProfile();
    }, []);

    const packages = [
        {
            title: '3 Months Package',
            features: [
                'Ideal for those who want to kickstart their fitness journey.',
                'Great for individuals looking to focus on basic fitness goals.',
                'Perfect for trying out different workout routines without a long-term commitment.',
            ],
            bgColor: 'bg-[#051B40]',
            btnColor: 'bg-black text-blue-100',
            membershipType: 3,
        },
        {
            title: '6 Months Package',
            features: [
                'Commit to a healthier you and benefit from consistent workouts.',
                'Perfect for those ready to dedicate more time to fitness and well-being.',
                'Allows you to make lasting improvements in your fitness level.',
            ],
            bgColor: 'bg-gray-600',
            btnColor: 'bg-black text-blue-100',
            membershipType: 6,
        },
        {
            title: '12 Months Package',
            features: [
                'Commit to a healthier you and benefit from consistent workouts.',
                'Perfect for those ready to dedicate more time to fitness and well-being.',
                'Allows you to make lasting improvements in your fitness level.',
            ],
            bgColor: 'bg-gray-600',
            btnColor: 'bg-black text-blue-100',
            membershipType: 12,
        },
    ];

    return (
        <section className="py-20 dark:bg-gray-100 dark:text-gray-800">
            <div className="container px-4 mx-auto">
                <div className="max-w-2xl mx-auto mb-10 text-center">
                    <span className="font-bold tracking-wider uppercase text-[#051B40]">The Physio Gym</span>
                    <h2 className="text-4xl font-bold lg:text-5xl">Choose your best Gym plan</h2>
                </div>
                <div className="flex flex-wrap items-stretch -mx-4">
                    {packages.map((pkg, index) => (
                        <PackageCard
                            key={index}
                            {...pkg}
                            userId={currentUserId}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
