
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
    <div>
     
      <HeroSection />
      <Cards />
      {/* <Upcomming /> */}
      <Calendar />
      <div>
  <Location />
  <div className="mt-10"> {/* mt-10 corresponds to a larger margin-top */}
    <GymLanding />
  </div>
</div>
<PhysioCards/>
<Service/>
<Footer/>



        
    </div>
  )
}