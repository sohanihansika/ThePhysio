import React from 'react';
import backgroundImage from '../../../../assets/actual.jpg'; // Adjust the import path accordingly

export default function HeroSection() {
  const heroStyle = {
    backgroundImage: `url(${backgroundImage})`,
    height: '100vh',
    width: '81.7vw',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
    position: 'relative',
    overflow: 'hidden',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Reducing the opacity to 70%
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 1,
    maxWidth: '800px',
    width: '100%',
    padding: '20px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: '10px',
  };

  return (
    <div style={heroStyle}>
      <div style={overlayStyle}></div>
      <div style={contentStyle}>
        <h1 style={{ fontSize: '3rem' }}>Welcome to The Physio Clinic</h1>
        {/* <button style={{ padding: '10px 20px', fontSize: '1rem', borderRadius: '5px', backgroundColor: '#172b59', color: 'white', border: 'none' }}>Learn More</button> */}
      </div>
    </div>
  );
}
