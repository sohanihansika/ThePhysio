import React, { useState } from 'react';
import { FaFileVideo } from 'react-icons/fa';


// Dummy video URLs
import video1 from '../../../assets/1.mp4';
import video2 from '../../../assets/2.mp4';
import video3 from '../../../assets/3.mp4';
import video4 from '../../../assets/4.mp4';
import video5 from '../../../assets/5.mp4';

const dummyVideos = [
  video1,
  video2,
  video3,
  video4,
  video5,
];

const initialAdvertisements = [
  {
    id: 1,
    title: 'New Product',
    url: dummyVideos[0],
    description: 'Check out our exciting new product launch video. Don’t miss out on the latest updates!',
    category: 'clinic',
  },
  {
    id: 2,
    title: 'Summer Sale',
    url: dummyVideos[1],
    description: 'Get ready for our summer sale with huge discounts on all items. Watch the video to know more.',
    category: 'gym',
  },
  {
    id: 3,
    title: 'Customer Special',
    url: dummyVideos[2],
    description: 'Hear what our customers have to say about their experience with our services. Their satisfaction is our priority.',
    category: 'clinic',
  },
  {
    id: 4,
    title: 'New Celebration',
    url: dummyVideos[3],
    description: 'Join us in celebrating the new year with amazing offers and events. Watch the video to find out more!',
    category: 'gym',
  },
  {
    id: 5,
    title: 'Behind the Scenes',
    url: dummyVideos[4],
    description: 'Take a peek behind the scenes of our latest project. Discover the hard work and creativity involved.',
    category: 'clinic',
  },
];

const truncateText = (text, length) => {
  return text.length > length ? `${text.substring(0, length)}...` : text;
};

const Advertisements = () => {
  const [ads, setAds] = useState(initialAdvertisements);
  const [selectedCategory, setSelectedCategory] = useState('both');
  const [searchText, setSearchText] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Filter ads based on the selected category, search text, and date range
  const filteredAds = ads.filter(ad =>
    (selectedCategory === 'both' || ad.category === selectedCategory) &&
    ad.title.toLowerCase().includes(searchText.toLowerCase()) &&
    (!startDate || ad.date >= new Date(startDate)) &&
    (!endDate || ad.date <= new Date(endDate))
  );

  return (
    <div className="container mx-auto p-4">
      <input
        type="file"
        accept="video/*"
        className="hidden"
        id="uploadButton"
      />
      <div className="flex items-center justify-between mb-8">
        <div>
        <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">Advertisements</h3>
        </div>
        <div className="flex items-center space-x-4">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border border-gray-300 p-2 rounded-md"
          >
            <option value="both">All</option>
            <option value="clinic">Clinic</option>
            <option value="gym">Gym</option>
          </select>
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search by title..."
            className="border border-gray-300 p-2 rounded-md"
          />
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="border border-gray-300 p-2 rounded-md"
          />
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="border border-gray-300 p-2 rounded-md"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
        {filteredAds.map((ad) => (
          <div key={ad.id} className="bg-gray-100 shadow-md rounded-md p-4 flex flex-col">
            <h2
              className="text-xl font-semibold mb-2"
              title={ad.title}
              style={{
                overflow: 'hidden',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                textOverflow: 'ellipsis',
                marginBottom: '10px'
              }}
            >
              {truncateText(ad.title, 100)}
            </h2>
            <div className="flex-grow mb-2">
              <video controls className="w-full">
                <source src={ad.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p
              className="text-gray-700 break-words"
              style={{
                overflow: 'hidden',
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                textOverflow: 'ellipsis'
              }}
            >
              {truncateText(ad.description, 200)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advertisements;
