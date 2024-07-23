import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserService from '../../service/UserService';

function CustomerAccounts() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users data when the component mounts
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {

      const token = localStorage.getItem('token'); // Retrieve the token from localStorage
      const response = await UserService.getAllUsers(token);
      //   console.log(response);
      setUsers(response.ourUsersList); // Assuming the list of users is under the key 'ourUsersList'
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const deleteUser = async (userId) => {
    try {
      // Prompt for confirmation before deleting the user
      const confirmDelete = window.confirm('Are you sure you want to delete this user?');

      const token = localStorage.getItem('token'); // Retrieve the token from localStorage
      if (confirmDelete) {
        await UserService.deleteUser(userId, token);
        // After deleting the user, fetch the updated list of users
        fetchUsers();
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 mt-10">
          <div className="items-start justify-between md:flex">
              <div className="max-w-lg">
                  <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
                      Customer Accounts
                  </h3>
                  <p className="text-gray-600 mt-2">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
              </div>
              {/* <div className="mt-3 md:mt-0">
                  <Link 
                    to="/register" 
                    className="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
                  >
                    Add User
                  </Link>
              </div> */}
          </div>
          <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
              <table className="w-full table-auto text-sm text-left">
                  <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                      <tr>
                          <th className="py-3 px-6">Username</th>
                          <th className="py-3 px-6">Role</th>
                          <th className="py-3 px-6">Registered Date</th>
                          <th className="py-3 px-6"></th>

                      </tr>
                  </thead>
                  <tbody className="text-gray-600 divide-y">
                      {users.map(user => (
                        <tr key={user.id}>
                          <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                              <img src="https://e7.pngegg.com/pngimages/81/570/png-clipart-profile-logo-computer-icons-user-user-blue-heroes-thumbnail.png" className="w-10 h-10 rounded-full" />
                              <div>
                                  <span className="block text-gray-700 text-sm font-medium">{user.name}</span>
                                  <span className="block text-gray-700 text-xs">{user.email}</span>
                              </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">{user.role}</td>
                          <td className="px-6 py-4 whitespace-nowrap"></td>
                          <td className="text-right px-6 whitespace-nowrap">
                              <Link 
                                to={`/update-user/${user.id}`}
                                className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
                              >
                                Update
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


export default CustomerAccounts