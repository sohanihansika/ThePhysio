import React, { useState, useEffect } from 'react';
import userImage from '../../../assets/user.png';
import UserService from '../../service/UserService';
import { useNavigate } from 'react-router-dom';

function Appointments() {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch users data when the component mounts
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const token = localStorage.getItem('token'); // Retrieve the token from localStorage
            const response = await UserService.getAllPhysios(token);
            setUsers(response.ourUsersList); // Assuming the list of users is under the key 'ourUsersList'
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleMakeReportClick = (physioId) => {
        navigate(`/issuePrescription?physioId=${physioId}`);
    };

    return (
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 mt-10">
            <div className="items-start justify-between md:flex">
                <div className="max-w-lg">
                    <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
                        Patient Reports
                    </h3>
                    <p className="text-gray-600 mt-2">
                        Issue a report for patients.
                    </p>
                </div>
                <div className="mt-4 mb-8 w-1/4 ml-auto">
                    <input
                        type="text"
                        placeholder="Search by name or email"
                        value={searchTerm}
                        onChange={handleSearchTermChange}
                        className="p-2 border border-gray-300 rounded-lg w-full"
                    />
                </div>
            </div>
            <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
                <table className="w-full table-auto text-sm text-left">
                    <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                        <tr>
                            <th className="py-3 px-6">Username</th>
                            <th className="py-3 px-6"></th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                        {filteredUsers.map(user => (
                            <tr key={user.id}>
                                <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                                    <img src={userImage} className="w-10 h-10 rounded-full" alt="User" />
                                    <div>
                                        <span className="block text-gray-700 text-sm font-medium">{user.name}</span>
                                        <span className="block text-gray-700 text-xs">{user.email}</span>
                                    </div>
                                </td>
                                <td className="text-right px-6 whitespace-nowrap">
                                    <button
                                        onClick={() => handleMakeReportClick(user.id)}
                                        className="flex items-center gap-x-2 text-blue-600 p-2 rounded-lg hover:bg-lightblue hover:text-blue-500 active:bg-gray-100 duration-150 leading-none px-3 font-medium hover:bg-gray-50"
                                    >
                                        Make Report
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Appointments;
