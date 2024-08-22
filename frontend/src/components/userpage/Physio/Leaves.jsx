import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LeaveService from '../../service/LeaveService';
import UserService from '../../service/UserService'; // Assuming you have a UserService for fetching user profile

function PhysioLeaves() {
    const navigate = useNavigate();
    const [leave, setLeave] = useState([]);
    const [remainingLeaves, setRemainingLeaves] = useState(0);
    const [error, setError] = useState(null);

    const TOTAL_LEAVES = 14; // Total leaves entitlement per year

    const handleApplyLeave = () => {
        navigate('/applyLeave');
    };

    useEffect(() => {
        fetchLeaves();
    }, []);

    const validateLeavesData = (data) => {
        return Array.isArray(data) && data.every(item =>
            typeof item.id === 'number' &&
            (item.physioId === null || typeof item.physioId === 'number') &&
            typeof item.date === 'string' &&
            typeof item.reason === 'string' &&
            typeof item.count === 'number'
        );
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
            setError('Error fetching profile information. Please try again later.');
        }
    };

    const fetchLeaves = async () => {
        try {
            const userId = await fetchProfileInfo(); // Fetch the userId of the logged-in user
            const token = localStorage.getItem('token');
            const response = await LeaveService.getAllleaves(token);

            console.log('Fetched leaves:', response);

            if (validateLeavesData(response)) {
                const filteredLeaves = response.filter(leave => leave.physioId === userId);
                setLeave(filteredLeaves);

                const leaveCount = filteredLeaves.length; // This will give you the number of leaves

               console.log('Number of leaves:', leaveCount);

                setRemainingLeaves(TOTAL_LEAVES - leaveCount);
            } else {
                throw new Error('Invalid data structure');
            }
        } catch (error) {
            console.error('Error fetching leaves:', error);
            setError('Error fetching leaves. Please try again later.');
        }
    };

    return (
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 mt-10">
            <div className="items-start justify-between md:flex mb-8">
                <div className="max-w-lg">
                    <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
                         Leaves
                    </h3>
                    <p className="text-gray-600 mt-2">
                        View leave history and apply for new leaves.
                    </p>
                </div>
            </div>
            
            <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                <h4 className="text-gray-700 text-xl font-semibold mb-4">
                    Remaining Leaves: <span className="text-[#3e4c6b]">{remainingLeaves}/14</span>
                    Remaining Leaves: <span className="text-[#3e4c6b]">{remainingLeaves}/14</span>
                </h4>
                <button 
                    onClick={handleApplyLeave}
                    className="px-6 py-2 text-white bg-[#3e4c6b] rounded-lg hover:bg-[#0e1b3b] transition duration-300 ease-in-out transform hover:scale-105"
                >
                    Apply for Leave
                </button>
            </div>

            {error && <p className="text-red-500 mb-4">{error}</p>}

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
    {leave.map((leaveItem, idx) => (
        <tr key={idx} className="hover:bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap">
                {new Date(leaveItem.date).toISOString().slice(0, 10)}
            </td>
            <td className="px-6 py-4">{leaveItem.reason}</td>
            
            <td className="px-6 py-4">
                {leaveItem.status === 1 && 'Pending'}
                {leaveItem.status === 2 && 'Approved'}
                {leaveItem.status === 3 && 'Disapproved'}
            </td>
        </tr>
    ))}
</tbody>

                        </table>
                    </div>
                </div>
                <div>
                    <h4 className="text-gray-800 text-xl font-semibold mb-4">Rejected Leaves</h4>
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
                                {rejectedLeaves.map((leave, idx) => (
                                    <tr key={idx} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap">{leave.date}</td>
                                        <td className="px-6 py-4">{leave.reason}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
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
