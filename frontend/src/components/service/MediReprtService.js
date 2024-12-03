import axios from 'axios';

class MediReprtService{
    static BASE_URL = 'http://localhost:8082';


    static async saveReport(report,token){
        try{

            const response = await axios.post(`${MediReprtService.BASE_URL}/medical-report`, report,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
          
        } catch (err) {
            console.error('Error in saveReport function:', err.message);
            console.error('Error details:', err.response ? err.response.data : err);
            throw err;
          }
    }

    

    static async getAllReport(token){
        try{

            const response = await axios.get(`${MediReprtService.BASE_URL}/medical-report`, {
                headers: {Authorization: `Bearer ${token}`}
            });
            return response.data;
            
        }catch(err){
            throw err;
        }
    }

    static async getReportById(reportId, token){
        try{

            const response = await axios.get(`${MediReprtService.BASE_URL}/medical-report/${reportId}`, {
                headers: {Authorization: `Bearer ${token}`}
            });
            return response.data;
            
        }catch(err){
            throw err;
        }
    }

    static async leaveUpdate(reportId,report, token){
        try{

            const response = await axios.put(`${MediReprtService.BASE_URL}/medical-reprt/${reportId}`, report,
            {
                headers: {Authorization: `Bearer ${token}`}
            });
            return response.data;
            
        }catch(err){
            throw err;
        }
    }

    static async deleteleave(reportId, token){
        try{

            const response = await axios.delete(`${MediReprtService.BASE_URL}/medical-reprt/${reportId}`, {
                headers: {Authorization: `Bearer ${token}`}
            });
            return response.data;
            
        }catch(err){
            throw err;
        }
    }
}

export default MediReprtService;