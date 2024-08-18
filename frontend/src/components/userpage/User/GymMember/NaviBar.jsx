import React from 'react';
import Card1 from './Card1';
import AbtUs from './AbtUs';
import Footer1 from './Footer1';

const GymHero = () => {
  return (
    <div className="relative bg-gray-300 text-black max-w-full">
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center py-6 px-4 md:px-8 max-w-8xl mx-auto w-full bg-[#051B40] text-white ">
        <div className="text-2xl font-bold">GymName</div>
        <ul className="flex space-x-4">
          <li><a href="#home" className="hover:text-gray-400">Home</a></li>
          <li><a href="#about-us" className="hover:text-gray-400">Coaches</a></li> {/* Updated link */}
          <li><a href="/gymMembership" className="hover:text-gray-400">Membership</a></li>
          <li><a href="/subscription" className="hover:text-gray-400">Subscription</a></li>
        </ul>
      </nav>
      
      {/* Hero Section */}
      <div className="relative h-screen bg-cover bg-center max-w-8xl mx-auto w-full" style={{ backgroundImage: "url('./src/assets/GymPlans/gym1.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex flex-col items-center justify-center h-full text-center px-4 md:px-8 text-white">
          <h1 className="text-4xl md:text-6xl font-bold">Welcome to Our Gym</h1>
          <p className="mt-4 text-xl md:text-2xl">Your journey to a better you starts here</p>
          <a href="#services" className="mt-6 px-6 py-3 bg-[#051B40] text-white rounded-lg text-lg">Get Started</a>
        </div>
      </div>
      
      <Card1/>
      <div id="about-us"> {/* Add id here */}
        <AbtUs />
      </div>
      <Footer1 />
    </div>
  );
}

export default GymHero;
