import React from 'react';
import HeroSection from './HeroSection';
import Cards from './cards';
import Upcomming from './upcomming';
import Calendar from 'react-calendar';

const UserDashboard = () => {
  return (
    <div>
      <HeroSection />
      <Cards />
      <div className="flex justify-between mt-8">
        <Upcomming />
        <div className="ml-8">
          <h3 className="text-2xl font-bold text-blue-700 my-8">Make Appointment</h3>
          <div className="p-4 border rounded-lg shadow-lg bg-white">
            <Calendar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
