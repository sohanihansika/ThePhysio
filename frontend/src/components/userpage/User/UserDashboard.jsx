import React from 'react';
import HeroSection from './dashComponent/HeroSection';
import Cards from './dashComponent/cards';
import Upcomming from './dashComponent/upcomming';
import Calendar from 'react-calendar';
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
      {/* <Upcomming /> */}
      <Calendar />
      <div>
        <Location />
        <div className="mt-10">
          <GymLanding />
        </div>
      </div>
      <PhysioCards />
      <Service />
      <Footer />
    </div>
  )
}
