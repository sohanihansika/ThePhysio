import React, { useState, useEffect } from 'react';
import UserService from '../../service/UserService';

function Appoinments() {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        // Fetch users data when the component mounts
        fetchUsers();
    }, []);

    useEffect(() => {
        // Filter users based on the search term
        if (searchTerm === '') {
            setFilteredUsers(users);
        } else {
            setFilteredUsers(users.filter(user =>
                user.name.toLowerCase().includes(searchTerm.toLowerCase())
            ));
        }
    }, [searchTerm, users]);

    const fetchUsers = async () => {
        try {
            const token = localStorage.getItem('token'); // Retrieve the token from localStorage
            const response = await UserService.getAllPhysios(token);
            setUsers(response.ourUsersList); // Assuming the list of users is under the key 'ourUsersList'
            setFilteredUsers(response.ourUsersList); // Initialize filteredUsers with the fetched users
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    return (
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 mt-10">
            <div className="items-start justify-between md:flex">
                <div className="max-w-lg">
                    <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
                        Physio Accounts
                    </h3>
                    <p className="text-gray-600 mt-2">
                        Search for a physiotherapist and make an appointment.
                    </p>
                </div>
            </div>
            <div className="mt-4 mb-8">
                <input
                    type="text"
                    placeholder="Search by name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="p-2 border border-gray-300 rounded-lg w-1/4"
                />
            </div>
            <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
                <table className="w-full table-auto text-sm text-left">
                    <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                        <tr>
                            <th className="py-3 px-6">Name</th>
                            <th className="py-3 px-6">Email</th>
                            <th className="py-3 px-6">Specialty</th>
                            <th className="py-3 px-6"></th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                        {filteredUsers.map(user => (
                            <tr key={user.id}>
                                <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                                    <img
                                        src="https://e7.pngegg.com/pngimages/81/570/png-clipart-profile-logo-computer-icons-user-user-blue-heroes-thumbnail.png"
                                        className="w-10 h-10 rounded-full"
                                        alt="User"
                                    />
                                    <div>
                                        <span className="block text-gray-700 text-sm font-medium">{user.name}</span>
                                        <span className="block text-gray-700 text-xs">{user.email}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap">Specialty Info</td> {/* Placeholder for specialty info */}
                                <td className="text-right px-6 whitespace-nowrap">
                                    <button
                                        onClick={() => window.location.href = `/timeSlots?physioId=${user.id}`}
                                        className="flex items-center gap-x-2 text-blue-600 p-2 rounded-lg hover:bg-blue-100 hover:text-blue-500 active:bg-blue-200 duration-150 leading-none px-3 font-medium"
                                    >
                                        Add Appointment
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

export default Appoinments;
