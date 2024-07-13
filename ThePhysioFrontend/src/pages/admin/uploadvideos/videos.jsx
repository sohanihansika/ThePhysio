import React, { useState } from 'react';

function VideoUpload() {
  const [video, setVideo] = useState(null);
  const [videos, setVideos] = useState([]);
  const [caption, setCaption] = useState('');

  const handleVideoChange = (e) => {
    setVideo(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (video) {
      const newVideo = {
        file: video,
        caption: caption,
        url: URL.createObjectURL(video),
      };
      setVideos([...videos, newVideo]);
      setVideo(null);
      setCaption('');
    }
  };

  const handleCaptionChange = (e, index) => {
    const updatedVideos = [...videos];
    updatedVideos[index].caption = e.target.value;
    setVideos(updatedVideos);
  };

  const handleUpdate = (index) => {
    const updatedVideos = [...videos];
    updatedVideos[index].caption = videos[index].caption;
    setVideos(updatedVideos);
  };

  const handleDelete = (index) => {
    const updatedVideos = videos.filter((_, i) => i !== index);
    setVideos(updatedVideos);
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-blue-900 p-4">
      <h1 className="text-3xl font-extrabold mb-6 text-white font-sans">Upload a Video</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
        <input
          type="file"
          accept="video/*"
          onChange={handleVideoChange}
          className="mb-4 w-full py-2 px-3 border rounded-md shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-medium"
        />
        <input
          type="text"
          placeholder="Enter caption"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          className="mb-4 w-full py-2 px-3 border rounded-md shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-medium"
        />
        {video && (
          <video controls className="mb-4 w-full">
            <source src={URL.createObjectURL(video)} type={video.type} />
          </video>
        )}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 font-semibold"
        >
          Upload
        </button>
      </form>

      <div className="mt-8 w-full max-w-full overflow-x-auto">
        <h2 className="text-2xl font-bold mb-4 text-white font-sans">Uploaded Videos</h2>
        <div className="flex flex-row space-x-4">
          {videos.map((video, index) => (
            <div key={index} className="bg-white p-4 rounded-md shadow-md w-1/4">
              <video controls className="mb-4 w-full">
                <source src={video.url} type={video.file.type} />
              </video>
              <input
                type="text"
                value={video.caption}
                onChange={(e) => handleCaptionChange(e, index)}
                className="mb-4 w-full py-2 px-3 border rounded-md shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-medium"
              />
              <div className="flex justify-between">
                <button
                  onClick={() => handleUpdate(index)}
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 font-semibold"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 font-semibold"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VideoUpload;
