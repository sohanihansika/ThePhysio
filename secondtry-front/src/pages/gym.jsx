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
        <CardGym
        svgIcon={<i class="fa-regular fa-whistle"></i>}
        heading={"Personal Training"}
        description={"personalized training plans from certified trainers."}
        />
        <CardGym
        svgIcon={<i class="fa-regular fa-people-group"></i>}
        heading={"Group Classes"}
        description={"Join group fitness classes tailored to your needs."}
        />
        <CardGym
        svgIcon={<i class="fa-regular fa-dumbbell"></i>}
        heading={"Amenities"}
        description={"Enjoy modern gym facilities and amenities."}
        />
      </div>
    </div>
  );
}
