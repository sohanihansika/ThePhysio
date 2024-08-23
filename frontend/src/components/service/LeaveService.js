import axios from 'axios';

class LeaveService{
    static BASE_URL = 'http://localhost:8082';


    static async saveleave(leave,token){
        try{

            const response = await axios.post(`${LeaveService.BASE_URL}/leave`, leave,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
          
        }catch(err){
            throw err;
        }
    }

    

    static async getAllleaves(token){
        try{

            const response = await axios.get(`${LeaveService.BASE_URL}/leave`, {
                headers: {Authorization: `Bearer ${token}`}
            });
            return response.data;
            
        }catch(err){
            throw err;
        }
    }

    static async getleaveById(leaveId, token){
        try{

            const response = await axios.get(`${LeaveService.BASE_URL}/leave/${leaveId}`, {
                headers: {Authorization: `Bearer ${token}`}
            });
            return response.data;
            
        }catch(err){
            throw err;
        }
    }

    static async leaveUpdate(leaveId,leave, token){
        try{

            const response = await axios.put(`${LeaveService.BASE_URL}/leave/${leaveId}`, leave,
            {
                headers: {Authorization: `Bearer ${token}`}
            });
            return response.data;
            
        }catch(err){
            throw err;
        }
    }

    static async deleteleave(leaveId, token){
        try{

            const response = await axios.delete(`${LeaveService.BASE_URL}/leave/${leaveId}`, {
                headers: {Authorization: `Bearer ${token}`}
            });
            return response.data;
            
        }catch(err){
            throw err;
        }
    }
}

export default LeaveService;