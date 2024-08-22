import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../../../assets/1.jpg'

function ApplyLeave() {
    const [leaveDate, setLeaveDate] = useState('');
    const [leaveReason, setLeaveReason] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Leave application:', { date: leaveDate, reason: leaveReason });
        // TODO: Add API call to submit leave application
        navigate('/leaves');
    };

    return (
        <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative">
            <div 
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    opacity: '0.5'
                }}
            ></div>

            <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Apply for Leave
                </h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="leaveDate" className="block text-sm font-medium text-gray-700">
                                Leave Date
                            </label>
                            <div className="mt-1">
                                <input
                                    type="date"
                                    id="leaveDate"
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    value={leaveDate}
                                    onChange={(e) => setLeaveDate(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="leaveReason" className="block text-sm font-medium text-gray-700">
                                Reason for Leave
                            </label>
                            <div className="mt-1">
                                <textarea
                                    id="leaveReason"
                                    rows="4"
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder="Enter your reason for leave..."
                                    value={leaveReason}
                                    onChange={(e) => setLeaveReason(e.target.value)}
                                    required
                                ></textarea>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#172b59] hover:bg-[#1e3a7b] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#172b59]"
                            >
                                Apply for Leave
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ApplyLeave;