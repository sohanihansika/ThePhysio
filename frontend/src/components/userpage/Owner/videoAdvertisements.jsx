import React, { useState } from 'react';

// Dummy video URLs
const dummyVideos = [
  'https://www.w3schools.com/html/mov_bbb.mp4',
  'https://www.w3schools.com/html/movie.mp4',
  'https://www.sample-videos.com/video123/mp4/480/asdasdas.mp4'
];

const initialAdvertisements = [
  {
    id: 1,
    title: 'New Product',
    url: dummyVideos[0],
    description: 'Check out our exciting new product launch video. Don’t miss out on the latest updates!'
  },
  {
    id: 2,
    title: 'Summer Sale',
    url: dummyVideos[1],
    description: 'Get ready for our summer sale with huge discounts on all items. Watch the video to know more.'
  },
  {
    id: 3,
    title: 'Customer Special',
    url: dummyVideos[2],
    description: 'Hear what our customers have to say about their experience with our services. Their satisfaction is our priority.'
  },
  {
    id: 4,
    title: 'New Celebration',
    url: dummyVideos[0],
    description: 'Join us in celebrating the new year with amazing offers and events. Watch the video to find out more!'
  },
  {
    id: 5,
    title: 'Behind the Scenes',
    url: dummyVideos[1],
    description: 'Take a peek behind the scenes of our latest project. Discover the hard work and creativity involved.'
  },
  {
    id: 6,
    title: 'Product Demo 1',
    url: dummyVideos[2],
    description: 'Watch this demo of our latest product features and functionalities.'
  },
  {
    id: 7,
    title: 'Holiday Special',
    url: dummyVideos[0],
    description: 'Celebrate the holidays with our special offers and festive events.'
  },
  {
    id: 8,
    title: 'Client Feedback',
    url: dummyVideos[1],
    description: 'See what our clients have to say about their experience with us.'
  },
  {
    id: 9,
    title: 'Summer Event',
    url: dummyVideos[2],
    description: 'Check out the highlights from our exciting summer event.'
  },
  {
    id: 10,
    title: 'Product Launch',
    url: dummyVideos[0],
    description: 'Get an overview of our latest product launch and its key features.'
  },
];

const truncateTitle = (title) => {
  return title.length > 100 ? `${title.substring(0, 100)}...` : title;
};

const Advertisements = () => {
  const [ads, setAds] = useState(initialAdvertisements);
  const [editingAdId, setEditingAdId] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState('');
  const [updatedDescription, setUpdatedDescription] = useState('');

  const handleUpdateAd = (id) => {
    setAds(
      ads.map((ad) =>
        ad.id === id
          ? { ...ad, title: updatedTitle, description: updatedDescription }
          : ad
      )
    );
    setEditingAdId(null);
    setUpdatedTitle('');
    setUpdatedDescription('');
  };

  const handleDeleteAd = (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this advertisement?');
    if (confirmDelete) {
      setAds(ads.filter((ad) => ad.id !== id));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newVideoUrl = URL.createObjectURL(file);
      const newAd = {
        id: ads.length + 1,
        title: `New Video ${ads.length + 1}`,
        url: newVideoUrl,
        description: 'Description pending...'
      };
      setAds([newAd, ...ads]);
      // Set the new ad as editable
      setEditingAdId(newAd.id);
      setUpdatedTitle(newAd.title);
      setUpdatedDescription(newAd.description);
    }
  };

  const handleSubmit = (e, id) => {
    e.preventDefault();
    handleUpdateAd(id);
  };

  return (
    <div className="container mx-auto p-4 relative mt-5">
      <input
        type="file"
        accept="video/*"
        onChange={handleFileChange}
        className="hidden"
        id="uploadButton"
        
      />
      <label
        htmlFor="uploadButton"
        className="absolute top-4 right-4 bg-[#000099] text-white p-2 rounded-md cursor-pointer"
      >
        Upload a Video
      </label>

      <div className="absolute top-0 left-0 p-4">
          <h1 className="text-3xl font-bold">Advertisements</h1>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-16">
        {ads.map((ad) => (
          <div key={ad.id} className="bg-gray-100 shadow-md rounded-md p-4 flex flex-col">
            {editingAdId === ad.id ? (
              <form onSubmit={(e) => handleSubmit(e, ad.id)} className="flex flex-col h-full">
                <input
                  type="text"
                  value={updatedTitle}
                  onChange={(e) => {
                    const newTitle = e.target.value;
                    if (newTitle.length <= 100) {
                      setUpdatedTitle(newTitle);
                    }
                  }}
                  placeholder="Advertisement Title"
                  className="border border-gray-300 p-2 rounded-md w-full mb-2"
                />
                <textarea
                  value={updatedDescription}
                  onChange={(e) => {
                    const newDescription = e.target.value;
                    if (newDescription.length <= 500) {
                      setUpdatedDescription(newDescription);
                    }
                  }}
                  placeholder="Advertisement Description"
                  className="border border-gray-300 p-2 rounded-md w-full mb-2"
                />
                <div className="flex space-x-2 mt-auto">
                  <button
                    type="submit"
                    className="bg-[#000099] text-white p-2 rounded-md flex-1"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setEditingAdId(null);
                      setUpdatedTitle('');
                      setUpdatedDescription('');
                    }}
                    className="bg-gray-500 text-white p-2 rounded-md flex-1"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <>
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
                  {truncateTitle(ad.title)}
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
                  {ad.description}
                </p>
                <div className="flex space-x-2 mt-auto">
                  <button
                    onClick={() => {
                      setEditingAdId(ad.id);
                      setUpdatedTitle(ad.title);
                      setUpdatedDescription(ad.description);
                    }}
                    className="bg-[#000099] text-white p-2 rounded-md flex-1 hover:bg-[#00007f]"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteAd(ad.id)}
                    className="bg-[#000099] text-white p-2 rounded-md flex-1 hover:bg-red-500"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advertisements;
