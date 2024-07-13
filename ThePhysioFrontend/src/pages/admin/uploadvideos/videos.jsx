import React, { useState } from 'react';

function VideoUpload() {
  const [video, setVideo] = useState(null);

  const handleVideoChange = (e) => {
    setVideo(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle video upload logic here
    console.log('Video uploaded:', video);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Upload a Video</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
        <input
          type="file"
          accept="video/*"
          onChange={handleVideoChange}
          className="mb-4 w-full py-2 px-3 border rounded-md shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {video && (
          <video controls className="mb-4 w-full">
            <source src={URL.createObjectURL(video)} type={video.type} />
          </video>
        )}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Upload
        </button>
      </form>
    </div>
  );
}

export default VideoUpload;
