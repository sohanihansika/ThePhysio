import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PhysioRequestsDashboard() {
    // Sample data for physio requests
    const [physioRequests, setPhysioRequests] = useState([
        { id: 1, patientName: 'John Doe', requestDate: '2024-05-15', reason: 'Back pain', status: 'Approved' },
        { id: 2, patientName: 'Jane Smith', requestDate: '2024-06-22', reason: 'Knee injury', status: 'Pending' },
        { id: 3, patientName: 'Sam Johnson', requestDate: '2024-07-10', reason: 'Post-surgery recovery', status: 'Approved' },
        { id: 4, patientName: 'Emily Davis', requestDate: '2024-08-05', reason: 'Sports injury', status: 'Pending' },
        { id: 5, patientName: 'Alex Brown', requestDate: '2024-06-10', reason: 'Chronic pain', status: 'Disapproved' },
        { id: 6, patientName: 'Sophia Lee', requestDate: '2024-07-15', reason: 'Shoulder pain', status: 'Disapproved' }
    ]);

    const navigate = useNavigate();

    const handleReviewRequest = (request) => {
        navigate(`/leavepopup`);
    };

    const handleStatusChange = (id, newStatus) => {
        setPhysioRequests(prevRequests =>
            prevRequests.map(request =>
                request.id === id ? { ...request, status: newStatus } : request
            )
        );
    };

    // Split requests into approved, pending, and disapproved
    const approvedRequests = physioRequests.filter(request => request.status === 'Approved');
    const pendingRequests = physioRequests.filter(request => request.status === 'Pending');
    const disapprovedRequests = physioRequests.filter(request => request.status === 'Disapproved');

    // Combine approved and disapproved requests for the "Viewed Requests" table
    const viewedRequests = [...approvedRequests, ...disapprovedRequests];

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
                                    <th className="py-3 px-6 text-left">Status</th>
                                    <th className="py-3 px-6 text-left">Action</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {pendingRequests.map((request) => (
                                    <tr key={request.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap">{request.patientName}</td>
                                        <td className="px-6 py-4">{request.requestDate}</td>
                                        <td className="px-6 py-4">{request.reason}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                                {request.status}
                                            </span>
                                        </td>
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

                {/* Viewed Requests Table */}
                <div>
                    <h4 className="text-gray-800 text-xl font-semibold mb-4">Viewed Requests</h4>
                    <div className="shadow-md rounded-lg overflow-hidden">
                        <table className="w-full table-auto text-sm">
                            <thead className="bg-[#a8b4ce] text-white">
                                <tr>
                                    <th className="py-3 px-6 text-left">Patient Name</th>
                                    <th className="py-3 px-6 text-left">Request Date</th>
                                    <th className="py-3 px-6 text-left">Reason</th>
                                    <th className="py-3 px-6 text-left">Status</th>
                                    <th className="py-3 px-6 text-left">Change Status</th> {/* Added column for status change */}
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {viewedRequests.map((request) => (
                                    <tr key={request.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap">{request.patientName}</td>
                                        <td className="px-6 py-4">{request.requestDate}</td>
                                        <td className="px-6 py-4">{request.reason}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${request.status === 'Approved' ? 'bg-green-100 text-green-800' : request.status === 'Disapproved' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                                {request.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <select
                                                value={request.status}
                                                onChange={(e) => handleStatusChange(request.id, e.target.value)}
                                                className="px-2 py-1 bg-gray-100 border border-gray-300 rounded-md"
                                            >
                                                <option value="Pending">Pending</option>
                                                <option value="Approved">Approved</option>
                                                <option value="Disapproved">Disapproved</option>
                                            </select>
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
