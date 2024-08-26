import React, { useState, useEffect } from 'react';
import { FaFileVideo } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import AdvertService from '../../service/AdvertService'; // Import your AdvertService

const Advertisements = () => {
  const [ads, setAds] = useState([]);
  const [editingAdId, setEditingAdId] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState('');
  const [updatedDescription, setUpdatedDescription] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('both');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAdvertisements = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await AdvertService.getAllAdverts(token);
        setAds(response.map(ad => ({
          id: ad.id,
          userId: ad.userId,
          addedDate: ad.addedDate,
          description: ad.description,
          title: ad.title,
          url: URL.createObjectURL(new Blob([ad.video], { type: 'video/mp4' })),
          category: 'default-category', // Adjust based on your data structure
        })));
      } catch (error) {
        console.error("Error fetching advertisements:", error);
      }
    };

    fetchAdvertisements();
  }, []);

  const handleUpdateAd = async (id) => {
    const token = localStorage.getItem('token');
    const updatedAd = {
      id,
      title: updatedTitle,
      description: updatedDescription,
      // Add other necessary fields here, e.g., category, userId, etc.
    };
  
    try {
      await AdvertService.updateAdvert(id, updatedAd, token);
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
    } catch (error) {
      console.error("Error updating advertisement:", error);
    }
  };
  
  const handleSubmit = (e, id) => {
    e.preventDefault();
    handleUpdateAd(id);
  };
  
  

  const handleDeleteAd = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this advertisement?');
    if (confirmDelete) {
      try {
        const token = localStorage.getItem('token');
        await AdvertService.deleteAdvert(id, token);
        setAds(ads.filter((ad) => ad.id !== id));
      } catch (error) {
        console.error("Error deleting advertisement:", error);
      }
    }
  };
  

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const newVideoUrl = URL.createObjectURL(file);
      const newAd = {
        title: `New Video ${ads.length + 1}`,
        url: newVideoUrl,
        description: 'Description pending...',
        category: selectedCategory,
      };
      
      try {
        const token = localStorage.getItem('token');
        const response = await AdvertService.saveAdvert(newAd, token);
        setAds([{
          ...newAd,
          id: response.id,
          userId: response.userId,
          addedDate: response.addedDate,
        }, ...ads]);
        setEditingAdId(response.id);
        setUpdatedTitle(response.title);
        setUpdatedDescription(response.description);
      } catch (error) {
        console.error("Error saving advertisement:", error);
      }
    }
  };
  



 

  const filteredAds = ads.filter(
    (ad) => selectedCategory === 'both' || ad.category === selectedCategory
  );

  const truncateTitle = (title) => {
    return title.length > 100 ? `${title.substring(0, 100)}...` : title;
  };
  

  return (
    <div className="container mx-auto p-4">
      <input
        type="file"
        accept="video/*"
        onChange={handleFileChange}
        className="hidden"
        id="uploadButton"
      />
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Advertisements</h1>
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
          <label
            htmlFor="uploadButton"
            className="bg-[#000099] text-white p-2 rounded-md cursor-pointer flex items-center"
          >
            <FaFileVideo className="mr-2" />
            New
          </label>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
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
                <button
                  type="submit"
                  className="bg-[#000099] text-white p-2 rounded-md flex-1"
                  onClick={handleUpdateAd}
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
                    marginBottom: '10px',
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
                    textOverflow: 'ellipsis',
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
