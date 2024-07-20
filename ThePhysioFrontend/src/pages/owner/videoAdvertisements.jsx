import React from 'react';

const advertisements = [
  {
    id: 1,
    title: 'Gym Promo 2024',
    url: 'https://www.example.com/video1.mp4',
    description: 'Join our gym today and get a 20% discount!'
  },
  {
    id: 2,
    title: 'New Equipment Arrival',
    url: 'https://www.example.com/video2.mp4',
    description: 'Check out our new state-of-the-art equipment!'
  },
  {
    id: 3,
    title: 'Fitness Classes',
    url: 'https://www.example.com/video3.mp4',
    description: 'Join our fitness classes and stay in shape!'
  }
];

const Advertisements = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Video Advertisements</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {advertisements.map(ad => (
          <div key={ad.id} className="bg-white shadow-md rounded-md p-4">
            <h2 className="text-xl font-semibold mb-2">{ad.title}</h2>
            <video controls className="w-full mb-2">
              <source src={ad.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="text-gray-700">{ad.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advertisements;
