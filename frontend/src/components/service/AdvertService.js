import axios from 'axios';

class AdvertService{
    static BASE_URL = 'http://localhost:8082';


    static async saveAdvert(advert,token){
        try{

            const response = await axios.post(`${AdvertService.BASE_URL}/advert`, advert,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
          
        }catch(err){
            throw err;
        }
    }

    

    static async getAllAdverts(token){
        try{

            const response = await axios.get(`${AdvertService.BASE_URL}/advert`, {
                headers: {Authorization: `Bearer ${token}`}
            });
            return response.data;
            
        }catch(err){
            throw err;
        }
    }

    static async getAdvertById(advertId, token){
        try{

            const response = await axios.get(`${AdvertService.BASE_URL}/advert/${advertId}`, {
                headers: {Authorization: `Bearer ${token}`}
            });
            return response.data;
            
        }catch(err){
            throw err;
        }
    }

    static async AdvertUpdate(advertId,Advert, token){
        try{

            const response = await axios.put(`${AdvertService.BASE_URL}/advert/${advertId}`, Advert,
            {
                headers: {Authorization: `Bearer ${token}`}
            });
            return response.data;
            
        }catch(err){
            throw err;
        }
    }

    static async deleteAdvert(advertId, token){
        try{

            const response = await axios.delete(`${AdvertService.BASE_URL}/advert/${advertId}`, {
                headers: {Authorization: `Bearer ${token}`}
            });
            return response.data;
            
        }catch(err){
            throw err;
        }
    }
}

export default AdvertService;