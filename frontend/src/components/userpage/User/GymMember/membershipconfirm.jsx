import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ManagerService from '../../../service/ManagerService'; 
import UserService from '../../../service/UserService';  // Import UserService to fetch user profile
import GYMPhoto from '../../../../assets/gym.jpg';

export default function MembershipConfirm() {
  const [memberships, setMemberships] = useState([]); // To store memberships data
  const [loading, setLoading] = useState(true); // To handle loading state
  const [error, setError] = useState(null); // To handle error state
  const [currentUserId, setCurrentUserId] = useState(null); // To store current user ID

  const location = useLocation();
  const navigate = useNavigate(); // Initialize useNavigate for programmatic navigation

  // Fetch current user profile
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const tokenValue = localStorage.getItem('token');
        const userProfileResponse = await UserService.getMyProfile(tokenValue);
        setCurrentUserId(userProfileResponse?.ourUsers?.id || 'N/A');
        console.log('Current user id:', currentUserId);
      } catch (error) {
        console.error('Error fetching user profile:', error);
        setCurrentUserId('N/A');
      }
    };

    fetchUserProfile();
  }, []); // Empty dependency array to fetch profile only once on component mount

  // Fetch memberships when currentUserId changes
  useEffect(() => {
    if (!currentUserId) return; // Don't fetch if currentUserId is not yet set

    const fetchMemberships = async () => {
      try {
        const tokenValue = localStorage.getItem('token');
        const allMemberships = await ManagerService.getAllMemberships(tokenValue);
        console.log('All memberships:', allMemberships);

        // Filter memberships by currentUserId
        const filteredMemberships = allMemberships.filter(
          (membership) => membership.userId === parseInt(currentUserId)
        );

        setMemberships(filteredMemberships);
        console.log('Filtered memberships:', filteredMemberships);
      } catch (error) {
        setError('Error fetching memberships');
      } finally {
        setLoading(false);
      }
    };

    fetchMemberships();
  }, [currentUserId]); // Run this effect whenever currentUserId changes

  // Render loading, error, or the actual membership cards
  if (loading) {
    return <div>Loading memberships...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section className="py-32">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="space-y-5 sm:text-center sm:max-w-md sm:mx-auto">
          <h1 className="text-gray-800 text-3xl font-extrabold sm:text-4xl">User Memberships</h1>
        </div>
        {memberships.length > 0 ? (
          <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
            {memberships.map((membership) => (
              <li className="w-full mx-auto group sm:max-w-sm" key={membership.membershipId}>
                <div className="w-full rounded-lg overflow-hidden shadow-lg">
                  {/* Image */}
                  <img
                    src={GYMPhoto}
                    alt="membership"
                    className="w-full h-48 object-cover"
                  />
                  <div className="mt-3 space-y-2 px-4 py-3">
                    <h5 className="text-2xl text-gray-800 font-semibold">{membership.type} Months </h5>
                    <p className="text-gray-600 text-sm">
                      <strong>Days per Week:</strong> {membership.daysPerWeek}
                    </p>
                    <p className="text-gray-600 text-sm">
                      <strong>Time Slots:</strong> {membership.timeSlots}
                    </p>
                    <p className="text-gray-600 text-sm">
                      <strong>Price:</strong> ${membership.price}
                    </p>
                    <p className="text-gray-600 text-sm">
                      <strong>Start Date:</strong> {new Date(membership.startedDate).toLocaleDateString()}
                    </p>
                    <p className="text-gray-600 text-sm">
                      <strong>End Date:</strong> {new Date(membership.endDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-center">
            <p>No memberships found for this user.</p>
            {/* Add the "Activate Package" button */}
            <button
              onClick={() => navigate('/gymMembership')}
              className="mt-5 px-6 py-2 bg-blue-600 text-white rounded-md"
            >
              Activate Package
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
