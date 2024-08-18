import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function PhysioLeaves() {
    const [approvedLeaves, setApprovedLeaves] = useState([
        { date: '2024-05-15', reason: 'Personal', status: 'Approved' },
        { date: '2024-06-22', reason: 'Family event', status: 'Approved' }
    ]);
    const [pendingLeaves, setPendingLeaves] = useState([
        { date: '2024-07-10', reason: 'Medical appointment', status: 'Pending' },
        { date: '2024-08-05', reason: 'Personal', status: 'Pending' }
    ]);
    const [remainingLeaves, setRemainingLeaves] = useState(12);
    const navigate = useNavigate();

    const handleApplyLeave = () => {
        navigate('/applyLeave');
    };

    return (
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 mt-10">
            <div className="items-start justify-between md:flex mb-8">
                <div className="max-w-lg">
                    <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
                        Your Leaves
                    </h3>
                    <p className="text-gray-600 mt-2">
                        View your leave history and apply for new leaves.
                    </p>
                </div>
            </div>
            
            <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                <h4 className="text-gray-700 text-xl font-semibold mb-4">
                    Remaining Leaves: <span className="text-[#3e4c6b]">{remainingLeaves}</span>
                </h4>
                <button 
                    onClick={handleApplyLeave}
                    className="px-6 py-2 text-white bg-[#3e4c6b] rounded-lg hover:bg-[#0e1b3b] transition duration-300 ease-in-out transform hover:scale-105"
                >
                    Apply for Leave
                </button>
            </div>

            <div className="space-y-8">
                <div>
                    <h4 className="text-gray-800 text-xl font-semibold mb-4">Approved Leaves</h4>
                    <div className="shadow-md rounded-lg overflow-hidden">
                        <table className="w-full table-auto text-sm">
                            <thead className="bg-[#a8b4ce] text-white">
                                <tr>
                                    <th className="py-3 px-6 text-left">Date</th>
                                    <th className="py-3 px-6 text-left">Reason</th>
                                    <th className="py-3 px-6 text-left">Status</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {approvedLeaves.map((leave, idx) => (
                                    <tr key={idx} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap">{leave.date}</td>
                                        <td className="px-6 py-4">{leave.reason}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                {leave.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div>
                    <h4 className="text-gray-800 text-xl font-semibold mb-4">Pending Leaves</h4>
                    <div className="shadow-md rounded-lg overflow-hidden">
                        <table className="w-full table-auto text-sm">
                            <thead className="bg-[#a8b4ce] text-white">
                                <tr>
                                    <th className="py-3 px-6 text-left">Date</th>
                                    <th className="py-3 px-6 text-left">Reason</th>
                                    <th className="py-3 px-6 text-left">Status</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {pendingLeaves.map((leave, idx) => (
                                    <tr key={idx} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap">{leave.date}</td>
                                        <td className="px-6 py-4">{leave.reason}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                                {leave.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PhysioLeaves;