import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserService from '../../service/UserService';

function UserAccounts() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch users data when the component mounts
    fetchUsers();
  }, []);

  useEffect(() => {
    // Apply filters whenever the user list or filters change
    applyFilters();
  }, [users, nameFilter]);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem('token'); // Retrieve the token from localStorage
      const response = await UserService.getAllUsers(token);
      const filteredUsers = response.ourUsersList.filter(user => user.role === 'USER');
      setUsers(filteredUsers); // Assuming the list of users is under the key 'ourUsersList'
      setFilteredUsers(filteredUsers); 
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const applyFilters = () => {
    let newFilteredUsers = users;

    if (nameFilter) {
      newFilteredUsers = newFilteredUsers.filter(user => user.name.toLowerCase().includes(nameFilter.toLowerCase()));
    }

    setFilteredUsers(newFilteredUsers);
  };

  const deleteUser = async (userId) => {
    const token = localStorage.getItem('token');
    try {
      const confirmDelete = window.confirm('Are you sure you want to delete this user?');
      if (confirmDelete) {
        const response = await UserService.deleteUser(userId, token);
        alert(response.message);
        fetchUsers(); // Optionally, update the users list to reflect the deletion
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Error deleting user');
      setTimeout(() => setError(''), 5000);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    return new Date(dateString).toISOString().split('T')[0];
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 mt-10">
      <div className="flex items-center justify-between">
        <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">User Accounts</h3>
        <div className="flex space-x-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Filter by Name:</label>
            <input 
              type="text" 
              value={nameFilter} 
              onChange={(e) => setNameFilter(e.target.value)} 
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>
      </div>
      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">Username</th>
              <th className="py-3 px-6">Registered Date</th>
              <th className="py-3 px-6">Address</th>
              <th className="py-3 px-6">Contact No</th>
              <th className="py-3 px-6"></th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {filteredUsers.map(user => (
              <tr key={user.id}>
                <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                  <img src="https://e7.pngegg.com/pngimages/81/570/png-clipart-profile-logo-computer-icons-user-user-blue-heroes-thumbnail.png" className="w-10 h-10 rounded-full" alt="User profile" />
                  <div>
                    <span className="block text-gray-700 text-sm font-medium">{user.name}</span>
                    <span className="block text-gray-700 text-xs">{user.email}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{formatDate(user.added_date)}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.address}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.contact_no}</td>
                <td className="text-right px-6 whitespace-nowrap">
                  <Link 
                    to={`/update-user/${user.id}`}
                    className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
                  >
                    Blacklist
                  </Link>
                  <button onClick={() => deleteUser(user.id)} className="delete-button py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UserAccounts;
