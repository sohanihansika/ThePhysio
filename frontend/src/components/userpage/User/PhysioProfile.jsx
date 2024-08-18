import React from 'react';

export default function PhysioProfile() {
  return (
    <div className="p-16">
      <div className="p-8 bg-white shadow mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
            <button className="focus:outline-none">
              <p className="font-bold text-gray-700 text-xl">22</p>
              <p className="text-gray-400">Friends</p>
            </button>
            <button className="focus:outline-none">
              <p className="font-bold text-gray-700 text-xl">10</p>
              <p className="text-gray-400">Photos</p>
            </button>
          </div>
          <div className="relative">
            <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
              <img src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg" alt="Dr. Jane Doe" className="w-24 h-24 rounded-full object-cover" />
            </div>
          </div>
          <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
            <button className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
              Connect
            </button>
            <button className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
              Message
            </button>
          </div>
        </div>
        <div className="mt-20 text-center border-b pb-12">
          <h1 className="text-4xl font-medium" style={{ color: '#172b59' }}>Dr. Jane Doe, <span className="font-light">Senior Physiotherapist</span></h1>
          <p className="mt-3" style={{ color: '#172b59' }}>With over 10 years of experience, Dr. Jane specializes in sports injuries and rehabilitation.</p>
          <p className="mt-3" style={{ color: '#172b59' }}>Email: janedoe@example.com</p>
          <p className="mt-2" style={{ color: '#172b59' }}>Degree: Doctor of Physical Therapy (DPT)</p>
          <p className="mt-2" style={{ color: '#172b59' }}>Age: 35</p>
          <p className="mt-2" style={{ color: '#172b59' }}>Years of Experience: 10</p>
          <p className="mt-2" style={{ color: '#172b59' }}>Achievements: Published research on sports injury prevention, Speaker at international physiotherapy conferences, Certified in advanced manual therapy techniques.</p>
          <p className="mt-8" style={{ color: '#172b59' }}>Joined Jan 2015</p>
        </div>
      </div>
    </div>
  );
}
