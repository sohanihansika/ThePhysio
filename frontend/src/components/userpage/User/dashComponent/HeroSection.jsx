import React from 'react';
import backgroundImage from '../../../../assets/1.jpg'; // Adjust the import path accordingly

export default function HeroSection() {
  const heroStyle = {
    backgroundImage: `url(${backgroundImage})`,
    height: '100vh',
    width: '81.5vw',

    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
  };

  const contentStyle = {
    maxWidth: '800px',
    width: '100%',
    padding: '20px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: '10px',
  };

  return (
    <div style={heroStyle}>
      <div style={contentStyle}>
        <h1>Welcome to The Physio Clinic</h1>
        <p>Your health and well-being are our top priorities. At The Physio Clinic, we offer personalized physiotherapy treatments tailored to your unique needs. Our team of experienced therapists is dedicated to helping you recover and achieve your optimal physical health.</p>
        <p>Whether you're dealing with chronic pain, recovering from surgery, or looking to improve your mobility, we are here to support you every step of the way.</p>
        <button style={{padding: '10px 20px', fontSize: '1rem', borderRadius: '5px', backgroundColor: '#007BFF', color: 'white', border: 'none'}}>Learn More</button>
      </div>
    </div>
  );
}
