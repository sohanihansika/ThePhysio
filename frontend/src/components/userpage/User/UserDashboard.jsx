import React from 'react';
import HeroSection from './dashComponent/HeroSection';
import Cards from './dashComponent/cards';
import Upcomming from './dashComponent/upcomming';
import Calendar from './calender';
import Location from './dashComponent/location';
import GymLanding from './dashComponent/GymLanding';
import PhysioCards from '../User/physioCards';
import Service from '../../../components/userpage/service';
import Footer from '../footer';

export default function UserDashboard() {
  return (
    <div className="max-w-full mx-auto px-4"> {/* Maximum full width */}
      <HeroSection />
      <Cards />
      <div className="flex justify-center items-center flex-wrap gap-24 mt-6"> {/* Flex container for Upcomming and Calendar */}
        <div className="flex-1 min-w-[300px] max-w-[600px]"> {/* Ensures both components are responsive */}
          <Upcomming />
        </div>
        <div className="flex-1 min-w-[200px] max-w-[600px]"> {/* Ensures both components are responsive */}
        {/* <h1 className="text-xl font-bold text-[#172b59] p-6">Make Appoinment</h1> */}

          <Calendar />
        </div>
      </div>
      <Location />
      <div className='mt-10'>      <GymLanding />
      </div>
      <PhysioCards />
      <Service />
      <Footer />
    </div>
  )
}
