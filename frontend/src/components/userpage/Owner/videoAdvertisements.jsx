import React, { useState, useEffect } from 'react';
import AdvertisementService from '../../service/VideoUploadService';
import Swal from 'sweetalert2';

const Advertisements = () => {
  const [ads, setAds] = useState([]);
  const [filteredAds, setFilteredAds] = useState([]);
  const [editingAdId, setEditingAdId] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState('');
  const [updatedDescription, setUpdatedDescription] = useState('');
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newVideoFile, setNewVideoFile] = useState(null);

  useEffect(() => {
    fetchAdvertisements();
  }, []);

  const fetchAdvertisements = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await AdvertisementService.getAllVideos(token);
      console.log('Advertisements:', response);
      setAds(response);
      setFilteredAds(response);
    } catch (error) {
      console.error('Error fetching advertisements:', error);
    }
  };

  const VideoComponent = ({ ad }) => {
    const videoPath = ad.filePath.split("\\").pop();  // Get the file name from the full path
    const videoSource = `/videos/${videoPath}`;  // Construct the path relative to the public folder

    return (
      <div>
        <video controls className="w-full mb-4">
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  };


const handleDeleteAd = async (id) => {
  const token = localStorage.getItem('token');

  Swal.fire({
    title: 'Are you sure?',
    text: 'Do you really want to delete this advertisement?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'Cancel',
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        // Call the deleteVideo function with the video ID and token
        await AdvertisementService.deleteVideo(id, token);
        Swal.fire('Deleted!', 'The advertisement has been deleted.', 'success');
        // Refresh the advertisements list
        fetchAdvertisements();
      } catch (error) {
        console.error('Error deleting advertisement:', error);
        Swal.fire('Error!', 'Failed to delete advertisement. Please try again later.', 'error');
      }
    }
  });
};

  

  const handleSubmit = async (e, id) => {
    e.preventDefault();
    try {
      const updatedAd = { title: updatedTitle, description: updatedDescription };
      await AdvertisementService.updateAd(id, updatedAd);
      setAds((prevAds) => prevAds.map((ad) => (ad.id === id ? { ...ad, ...updatedAd } : ad)));
      setFilteredAds((prevFilteredAds) => prevFilteredAds.map((ad) => (ad.id === id ? { ...ad, ...updatedAd } : ad)));
      setEditingAdId(null);
      setUpdatedTitle('');
      setUpdatedDescription('');
    } catch (error) {
      console.error('Error updating advertisement:', error);
    }
  };

  const truncateTitle = (title, maxLength = 50) => {
    return title.length > maxLength ? `${title.slice(0, maxLength)}...` : title;
  };

  // Handle new video upload
  const handleVideoUpload = async (e) => {
    e.preventDefault();
    if (!newVideoFile || !newTitle || !newDescription) {
      alert('Please provide a title, description, and video file.');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      const videoData = {
        title: newTitle,
        description: newDescription,
        file: newVideoFile,
      };

      await AdvertisementService.uploadVideo(videoData, token);
      alert('Video uploaded successfully!');
      // Optionally, fetch ads again to include the new video in the list
      fetchAdvertisements();
      // Clear form
      setNewTitle('');
      setNewDescription('');
      setNewVideoFile(null);
    } catch (error) {
      console.error('Error uploading video:', error);
      alert('Failed to upload video.');
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">Advertisements</h1>

      {/* Add New Video Form */}
      <div className="bg-white shadow-md rounded-md p-4 mb-6">
        <h2 className="text-xl font-semibold mb-4">Upload New Video</h2>
        <form onSubmit={handleVideoUpload} className="flex flex-col">
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="Video Title"
            className="border border-gray-300 p-2 rounded-md w-full mb-2"
          />
          <textarea
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            placeholder="Video Description"
            className="border border-gray-300 p-2 rounded-md w-full mb-2"
          />
          <input
            type="file"
            accept="video/mp4"
            onChange={(e) => setNewVideoFile(e.target.files[0])}
            className="border border-gray-300 p-2 rounded-md w-full mb-2"
          />
          <button
            type="submit"
            className="bg-[#000099] text-white p-2 rounded-md"
          >
            Upload Video
          </button>
        </form>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAds.map((ad) => (
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
                  <button type="submit" className="bg-[#000099] text-white p-2 rounded-md flex-1">
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
                  title={ad.filePath}
                  style={{
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {truncateTitle(ad.title)}
                </h2>
                <VideoComponent ad={ad} />
                <p className="text-gray-700 mb-2">Description: {ad.description}</p>
                <p className="text-gray-500 text-sm mb-2">File Path: {ad.filePath}</p>
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
                    className="bg-red-500 text-white p-2 rounded-md flex-1 hover:bg-red-600"
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
