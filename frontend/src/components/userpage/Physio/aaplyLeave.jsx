import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LeaveService from '../../service/LeaveService';
import UserService from '../../service/UserService';
import backgroundImage from '../../../assets/1.jpg';

function ApplyLeave() {
    const [leaveDate, setLeaveDate] = useState('');
    const [leaveReason, setLeaveReason] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [leaves, setLeaves] = useState([]); // State to hold fetched leaves
    const navigate = useNavigate();

    const getToken = () => {
        return localStorage.getItem('token');
    };

    const fetchProfileInfo = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await UserService.getMyProfile(token);
            console.log('Fetched profile information:', response);

            const userId = response.ourUsers.id;
            console.log('userid:', userId);

            return userId;
        } catch (error) {
            console.error('Error fetching profile information:', error);
        }
    };

    useEffect(() => {
        const fetchLeaves = async () => {
            try {
                setLoading(true);
                const token = getToken();
                const leavesData = await LeaveService.getAllleaves(token);
                setLeaves(leavesData);
            } catch (err) {
                setError('Failed to fetch leave records.');
            } finally {
                setLoading(false);
            }
        };

        fetchLeaves();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const token = getToken();
            const userId = await fetchProfileInfo(); // Await the fetched user ID

            const leave = {
                date: leaveDate,
                reason: leaveReason,
                physioId: userId // Add physioId to the leave object
            };

            await LeaveService.saveleave(leave, token);
            navigate('/leaves');
        } catch (err) {
            setError('Failed to apply for leave. Please try again.');
        } finally {
            setLoading(false);
        }
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

                        {error && (
                            <div className="text-red-500 text-sm">
                                {error}
                            </div>
                        )}

                        <div>
                            <button
                                type="submit"
                                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#172b59] hover:bg-[#1e3a7b]'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#172b59]`}
                                disabled={loading}
                            >
                                {loading ? 'Submitting...' : 'Apply for Leave'}
                            </button>
                        </div>
                    </form>

                    {leaves.length > 0 && (
                        <div className="mt-8">
                            <h3 className="text-lg font-semibold text-gray-900">Leave Records</h3>
                            <ul className="list-disc pl-5">
                                {leaves.map((leave, index) => (
                                    <li key={index} className="text-sm text-gray-700">
                                        <div>Date: {new Date(leave.date).toLocaleDateString()}</div>
                                        <div>Reason: {leave.reason}</div>
                                        <div>Physio ID: {leave.physioId}</div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ApplyLeave;
