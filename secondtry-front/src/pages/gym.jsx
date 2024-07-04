import React from 'react';
import CardGym  from '../component/card-gym';

export default function Gym() {
  return (
    <div className="container-fluid py-5" style={{ backgroundColor: '#172B59', color: '#fff' }}>
      <div className="row justify-content-center align-items-center">
        <div className="col-md-8 text-center">
          <h1>Welcome to Our Gym!</h1>
          <p className="lead">Achieve your fitness goals with us.</p>
          <p>Join our gym today and start your fitness journey.</p>
          <button className="btn btn-outline-light btn-lg">Join Now</button>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-4 text-center">
          <h3>Personal Training</h3>
          <p>Get personalized training plans from certified trainers.</p>
        </div>
        <div className="col-md-4 text-center">
          <h3>Group Classes</h3>
          <p>Join group fitness classes tailored to your needs.</p>
        </div>
        <div className="col-md-4 text-center">
          <h3>Amenities</h3>
          <p>Enjoy modern gym facilities and amenities.</p>
        </div>
      </div>
    </div>
  );
}
