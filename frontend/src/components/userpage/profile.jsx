import React, { useState, useEffect } from 'react';
import UserService from '../service/UserService';
import avater from '../../assets/user2.png'
import { Link } from 'react-router-dom';

export default function PhysioProfile() {
  const [profileInfo, setProfileInfo] = useState({});
  const [isAdmin, setIsAdmin] = useState(UserService.isAdmin());
    const [isUser, setIsUser] = useState(UserService.isUser());
    const [isReceptionist, setIsReceptionist] = useState(UserService.isReceptionist());
    const [isOwner, setIsOwner] = useState(UserService.isOwner());
    const [isPhysio, setIsPhysio] = useState(UserService.isPhysio());
    const [isManager, setIsManager] = useState(UserService.isManager());
    const [isCoach, setIsCoach] = useState(UserService.isCoach());
  useEffect(() => {
    fetchProfileInfo();
  }, []);

  const fetchProfileInfo = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await UserService.getMyProfile(token);
      setProfileInfo(response.ourUsers);
    } catch (error) {
      console.error('Error fetching profile information:', error);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    return new Date(dateString).toISOString().split('T')[0];
  };

  return (
    <div className="p-16 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="relative">
          <div className="h-48 bg-gray-100"></div>
          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img src={avater} alt="Profile" className="w-32 h-32 rounded-full border-4 border-white shadow-lg" />
          </div>
        </div>
        
        <div className="pt-16 pb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800">{profileInfo.name || 'Name'}</h1>
          <div className="text-xl text-gray-600">
          {isUser && <p>USER</p>}
          {isAdmin && <p>ADMIN</p>}
          {isPhysio && <p>PHYSIO</p>}
          {isOwner && <p>OWNER</p>}
          {isReceptionist && <p>RECEPTIONIST</p>}
          {isManager && <p>MANGER</p>}
          {isCoach && <p>COACH</p>}
          </div>
          
          
        </div>

        <div className="pb-8 px-8">
          <div className="text-center space-y-4">
            <p className="text-gray-700"><b>Email:</b> {profileInfo.email || 'Email'}</p>
            <p className="text-gray-700"><b>Address:</b> {profileInfo.address || 'Address'}</p>
            <p className="text-gray-700"><b>Contact:</b> {profileInfo.contact_no || 'Contact Number'}</p>
            <p className="text-gray-600"><b>Joined:</b> {formatDate(profileInfo.added_date)}</p>
          </div>

          <div className="mt-8 text-center">
            <Link 
              to={`/editProfile/${profileInfo.id}`} 
              className="px-6 py-2 bg-gray-700 text-white rounded hover:bg-gray-400 transition duration-300"
            >
              Edit Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}