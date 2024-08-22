import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LeaveService from '../../service/LeaveService'; // Adjust the import path as needed
import UserService from '../../service/UserService'; // Adjust the import path as needed

function PhysioRequestsDashboard() {
    const [physioRequests, setPhysioRequests] = useState([]);
    const [pendingRequests, setPendingRequests] = useState([]);
    const [reviewedRequests, setReviewedRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [profileInfo, setProfileInfo] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const token = localStorage.getItem('token');
                const data = await LeaveService.getAllleaves(token);
                console.log(data);
                setPhysioRequests(data);

                // Separate requests into pending and reviewed
                const pending = data.filter(request => request.status === 1);
                const reviewed = data.filter(request => request.status !== 1);
                setPendingRequests(pending);
                setReviewedRequests(reviewed);

                // Fetch profile info for all physios once the requests are loaded
                const physioIds = [...new Set(data.map(request => request.physioId))]; // Get unique physioIds
                physioIds.forEach(physioId => fetchProfileInfo(physioId));
            } catch (err) {
                setError('Failed to fetch data');
            } finally {
                setLoading(false);
            }
        };

        fetchRequests();
    }, []);

    const fetchProfileInfo = async (physioId) => {
        try {
            const token = localStorage.getItem('token');
            const response = await UserService.getUserById(physioId, token);
            console.log('Fetched profile information:', response);
            setProfileInfo(prevState => ({ ...prevState, [physioId]: response.ourUsers.name }));
        } catch (error) {
            console.error('Error fetching profile information:', error);
        }
    };

    const handleReviewRequest = (request) => {
        navigate(`/leavepopup?id=${request.id}`, { state: { request } });
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 mt-10">
            <div className="items-start justify-between md:flex mb-8">
                <div className="max-w-lg">
                    <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
                        Physio Requests
                    </h3>
                    <p className="text-gray-600 mt-2">
                        Review and manage physio requests from patients.
                    </p>
                </div>
            </div>

            <div className="space-y-8">
                {/* Pending Requests Table */}
                <div>
                    <h4 className="text-gray-800 text-xl font-semibold mb-4">Pending Requests</h4>
                    <div className="shadow-md rounded-lg overflow-hidden">
                        <table className="w-full table-auto text-sm">
                            <thead className="bg-[#a8b4ce] text-white">
                                <tr>
                                    <th className="py-3 px-6 text-left">Patient Name</th>
                                    <th className="py-3 px-6 text-left">Request Date</th>
                                    <th className="py-3 px-6 text-left">Reason</th>
                                    <th className="py-3 px-6 text-left">Action</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {pendingRequests.map((request) => (
                                    <tr key={request.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {profileInfo[request.physioId] || 'Loading...'}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {new Date(request.date).toLocaleDateString()}
                                        </td>
                                        <td className="px-6 py-4">{request.reason}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <button
                                                onClick={() => handleReviewRequest(request)}
                                                className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
                                            >
                                                Review
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Reviewed Requests Table */}
                <div>
                    <h4 className="text-gray-800 text-xl font-semibold mb-4">Reviewed Requests</h4>
                    <div className="shadow-md rounded-lg overflow-hidden">
                        <table className="w-full table-auto text-sm">
                            <thead className="bg-[#a8b4ce] text-white">
                                <tr>
                                    <th className="py-3 px-6 text-left">Patient Name</th>
                                    <th className="py-3 px-6 text-left">Request Date</th>
                                    <th className="py-3 px-6 text-left">Reason</th>
                                    <th className="py-3 px-6 text-left">Status</th>
                                    <th className="py-3 px-6 text-left">Action</th>

                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {reviewedRequests.map((request) => (
                                    <tr key={request.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {profileInfo[request.physioId] || 'Loading...'}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {new Date(request.date).toLocaleDateString()}
                                        </td>
                                        <td className="px-6 py-4">{request.reason}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {request.status === 2 && 'Approved'}
                                            {request.status === 3 && 'Disapproved'}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <button
                                                onClick={() => handleReviewRequest(request)}
                                                className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
                                            >
                                                Change Status
                                            </button>
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

export default PhysioRequestsDashboard;
