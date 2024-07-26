import React from 'react';
import { Link } from 'react-router-dom';


const LandingPage = () => {
    return (
        <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('./components/assets/GymLayout.jpg')" }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white text-center px-4">
                <h1 className="text-4xl font-extrabold mb-4">Welcome to Our Gym</h1>
                <p className="text-lg mb-8 max-w-md">
                    Join us to achieve your fitness goals! Our gym offers state-of-the-art equipment, experienced trainers, and a welcoming environment. Whether you're a beginner or a seasoned athlete, we have something for everyone.
                </p>
                <div className="space-x-4">
                    <Link to="/GymMembershipRorm">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md">
                            Register
                        </button>
                    </Link>
                    <Link to="/GymProfile">
                        <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg shadow-md">
                            Profile
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
