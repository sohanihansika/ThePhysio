import axios from 'axios';

class ReviewService{
    static BASE_URL = 'http://localhost:8082';


    static async saveReview(review,token){
        try{

            const response = await axios.post(`${ReviewService.BASE_URL}/reviews`, review,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
          
        }catch(err){
            throw err;
        }
    }

    

    static async getAllreviews(token){
        try{

            const response = await axios.get(`${ReviewService.BASE_URL}/reviews`, {
                headers: {Authorization: `Bearer ${token}`}
            });
            return response.data;
            
        }catch(err){
            throw err;
        }
    }

    static async getreviewById(reviewId, token){
        try{

            const response = await axios.get(`${ReviewService.BASE_URL}/reviews/${reviewId}`, {
                headers: {Authorization: `Bearer ${token}`}
            });
            return response.data;
            
        }catch(err){
            throw err;
        }
    }

    static async reviewUpdate(reviewData, token){
        try{

            const response = await axios.put(`${ReviewService.BASE_URL}/reviews`, reviewData,
            {
                headers: {Authorization: `Bearer ${token}`}
            });
            return response.data;
            
        }catch(err){
            throw err;
        }
    }

    static async deletereview(reviewId, token){
        try{

            const response = await axios.delete(`${ReviewService.BASE_URL}/reviews/${reviewId}`, {
                headers: {Authorization: `Bearer ${token}`}
            });
            return response.data;
            
        }catch(err){
            throw err;
        }
    }
}

export default ReviewService;