import React, { useState, useEffect } from 'react';
import UserService from '../service/UserService';
import { Link } from 'react-router-dom';

function Profile() {
    const [profileInfo, setProfileInfo] = useState({});

    useEffect(() => {
        fetchProfileInfo();
    }, []);

    const fetchProfileInfo = async () => {
        try {
            const token = localStorage.getItem('token'); // Retrieve the token from localStorage
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
      <div className="profile-page-container">
        <h2 className="w-full mt-4 ml-6 text-3xl font-bold leading-tight text-start">Profile</h2>
        <section className="p-6 mt-1 dark:text-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
                
              </div>
              <div className="relative">
                
                  <img src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg" alt="Dr. Jane Doe" className="w-24 h-24 mx-auto rounded-full object-cover " />
                
              </div>
              <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
              </div>
              
            </div>
          <form noValidate className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-50">
            
            <div>
              <label htmlFor="name" className="block mb-1 ml-1 font-bold">Name :</label>
              <input id="name" type="text" placeholder="Your name" value={profileInfo.name || ''} readOnly className="block w-full p-2 rounded bg-gray-100" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 ml-1 font-bold">Email :</label>
              <input id="email" type="email" placeholder="Email" value={profileInfo.email || ''} readOnly className="block w-full p-2 rounded bg-gray-100" />
            </div>
            <div>
              <label htmlFor="address" className="block mb-1 ml-1 font-bold">Address :</label>
              <input id="address" type="text" placeholder="Address" value={profileInfo.address || ''} readOnly className="block w-full p-2 rounded bg-gray-100" />
            </div>
            <div>
              <label htmlFor="contact_no" className="block mb-1 ml-1 font-bold">Contact Number :</label>
              <input id="contact_no" type="text" placeholder="Contact Number" value={profileInfo.contact_no || ''} readOnly className="block w-full p-2 rounded bg-gray-100" />
            </div>
            <div>
              <label htmlFor="added_date" className="block mb-1 ml-1 font-bold">Added Date :</label>
              <input id="added_date" type="text" placeholder="Contact Number" value={formatDate(profileInfo.added_date) || ''} readOnly className="block w-full p-2 rounded bg-gray-100" />
            </div>
            <div>
              <Link to={`/editProfile/${profileInfo.id}`} className="w-full px-4 py-2 font-bold rounded shadow text-center  block bg-[#172b59] text-gray-50 hover:bg-[#425ea0]">Edit Profile</Link>
            </div>
          </form>
        </section>
      </div>

      
      // <div className="p-8 bg-white shadow mt-24">
        
      //   <div className="mt-20 text-start border-b pb-12">
      //   <section className="p-6 dark:text-gray-800">
        
      //   <form noValidate className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-50">
        
        
      //        <div>
      //          <label htmlFor="name" className="block mb-1 ml-1 font-bold">Name :</label>
      //          <input id="name" type="text" placeholder="Your name" value={profileInfo.name || ''} readOnly className="block w-full p-2 rounded bg-gray-100" />
      //        </div>
      //        <div>
      //          <label htmlFor="email" className="block mb-1 ml-1 font-bold">Email :</label>
      //          <input id="email" type="email" placeholder="Email" value={profileInfo.email || ''} readOnly className="block w-full p-2 rounded bg-gray-100" />
      //        </div>
      //        <div>
      //          <label htmlFor="address" className="block mb-1 ml-1 font-bold">Address :</label>
      //          <input id="address" type="text" placeholder="Address" value={profileInfo.address || ''} readOnly className="block w-full p-2 rounded bg-gray-100" />
      //        </div>
      //        <div>
      //          <label htmlFor="contact_no" className="block mb-1 ml-1 font-bold">Contact Number :</label>
      //          <input id="contact_no" type="text" placeholder="Contact Number" value={profileInfo.contact_no || ''} readOnly className="block w-full p-2 rounded bg-gray-100" />
      //        </div>
      //        <div>
      //          <label htmlFor="added_date" className="block mb-1 ml-1 font-bold">Added Date :</label>
      //          <input id="added_date" type="text" placeholder="Contact Number" value={formatDate(profileInfo.added_date) || ''} readOnly className="block w-full p-2 rounded bg-gray-100" />
      //        </div>
      //        <div>
      //          <Link to={`/editProfile/${profileInfo.id}`} className="w-full px-4 py-2 font-bold rounded shadow text-center  block bg-[#172b59] text-gray-50 hover:bg-[#425ea0]">Edit Profile</Link>
      //        </div>
      //      </form>
      //    </section>
      //   </div>


        
      // </div>
   
    );
}

export default Profile;
