import axios from 'axios';

class VideoUploadService {
    static BASE_URL = 'http://localhost:8082';

    // Upload a video
    static async uploadVideo(videoData, token) {
        try {
            const formData = new FormData();
            formData.append('title', videoData.title);
            formData.append('description', videoData.description);
            formData.append('file', videoData.file);

            const response = await axios.post(`${VideoUploadService.BASE_URL}/api/videos/upload`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
            });

            return response.data;
        } catch (err) {
            throw err;
        }
    }

    // Get all uploaded videos
    static async getAllVideos(token) {
        try {
            const response = await axios.get(`${VideoUploadService.BASE_URL}/api/videos`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            return response.data;
        } catch (err) {
            throw err;
        }
    }

    // Get a video by ID
    static async getVideoById(videoId, token) {
        try {
            const response = await axios.get(`${VideoUploadService.BASE_URL}/api/videos/${videoId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            return response.data;
        } catch (err) {
            throw err;
        }
    }

    // Delete a video by ID
    static async deleteVideo(videoId, token) {
        try {
            const response = await axios.delete(`${VideoUploadService.BASE_URL}/api/videos/${videoId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            return response.data;
        } catch (err) {
            throw err;
        }
    }
}

export default VideoUploadService;