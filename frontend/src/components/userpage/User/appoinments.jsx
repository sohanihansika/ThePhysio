import React, { useState, useEffect } from 'react';
// import userImage from './assets/user.png'; // Import the image
import userImage from '../../../assets/user.png';
import UserService from '../../service/UserService';
import { Link } from 'react-router-dom';

function Appoinments() {
    const [users, setUsers] = useState([]);

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

    return (
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 mt-10">
          <div className="items-start justify-between md:flex">
              <div className="max-w-lg">
                  <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
                      Physio Accounts
                  </h3>
                  <p className="text-gray-600 mt-2">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
              </div>
             
          </div>
          <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
              <table className="w-full table-auto text-sm text-left">
                  <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                      <tr>
                          <th className="py-3 px-6">Username</th>
                          <th className="py-3 px-6">Email</th>
                          <th className="py-3 px-6">Specialty</th>
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
                          <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                          <td className="px-6 py-4 whitespace-nowrap"></td>
                          <td className="text-right px-6 whitespace-nowrap">
                                <button 
    onClick={() => window.location.href = `/calendar?physioId=${user.id}`} 
    className="flex items-center gap-x-2 text-blue-600 p-2 rounded-lg hover:bg-lightblue hover:text-blue-500 active:bg-gray-100 duration-150 leading-none px-3 font-medium hover:bg-gray-50"
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
