import React, { useState } from 'react';

const initialAdvertisements = [
  // Your initial data here
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
    setAds(ads.filter((ad) => ad.id !== id));
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
      setAds([newAd, ...ads]); // Prepend the new video to the top
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-center mb-4">
        <h1 className="text-3xl font-bold mb-4">Video Advertisements</h1>
        <input
          type="file"
          accept="video/*"
          onChange={handleFileChange}
          className="hidden"
          id="uploadButton"
        />
        <label
          htmlFor="uploadButton"
          className="bg-[#000099] text-white p-2 rounded-md cursor-pointer"
        >
          Upload Video
        </label>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {ads.map((ad) => (
          <div key={ad.id} className="bg-white shadow-md rounded-md p-4 flex flex-col">
            {editingAdId === ad.id ? (
              <>
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
                    onClick={() => handleUpdateAd(ad.id)}
                    className="bg-[#000099] text-white p-2 rounded-md flex-1"
                  >
                    Save
                  </button>
                  <button
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
              </>
            ) : (
              <>
                <h2
                  className="text-xl font-semibold mb-2"
                  title={ad.title}
                  style={{
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitLineClamp: 2, // Limit to 2 lines
                    WebkitBoxOrient: 'vertical',
                    textOverflow: 'ellipsis',
                    marginBottom: '10px' // Adjust spacing between title and video
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
                    WebkitLineClamp: 3, // Limit to 3 lines
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
