import axios from 'axios';

class ManagerService{
    static BASE_URL = 'http://localhost:8082';




    static async addPackage(packageData, token) {
        try {
            const response = await axios.post(`${ManagerService.BASE_URL}/manager/packages`, packageData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
        } catch (err) {
            throw err;
        }
    }


static async addMembership(MembershipData, token) {
        try {
            const response = await axios.post(`${ManagerService.BASE_URL}/memberships`, MembershipData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
        } catch (err) {
            throw err;
        }
    }
   
    static async getAllPackages(token){
        try {
          const response = await axios.get(`${ManagerService.BASE_URL}/manager/packages`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          return response.data;
        } catch (error) {
          console.error("Error fetching packages:", error);
          throw error;
        }
      };

      static async getAllMemberships(token){
        try {
          const response = await axios.get(`${ManagerService.BASE_URL}/memberships`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          return response.data;
        } catch (error) {
          console.error("Error fetching packages:", error);
          throw error;
        }
      };



    static async getPackageById(packageId, token){
        try{

            const response = await axios.get(`${ManagerService.BASE_URL}/manager/packages/${packageId}`, {
                headers: {Authorization: `Bearer ${token}`}
            });
            return response.data;
            
        }catch(err){
            throw err;
        }
    }

    static async getMembershipById(membershipId, token){
        try{

            const response = await axios.get(`${ManagerService.BASE_URL}/memberships/${membershipId}`, {
                headers: {Authorization: `Bearer ${token}`}
            });
            return response.data;
            
        }catch(err){
            throw err;
        }
    }

    static async deletePackage(packageId, token){
        try{

            const response = await axios.delete(`${ManagerService.BASE_URL}/manager/packages/${packageId}`, {
                headers: {Authorization: `Bearer ${token}`}
            });
            return response.data;
            
        }catch(err){
            throw err;
        }
    }

    static async deleteMembership(membershipId, token){
        try{

            const response = await axios.delete(`${ManagerService.BASE_URL}/memberships/${membershipId}`, {
                headers: {Authorization: `Bearer ${token}`}
            });
            return response.data;
            
        }catch(err){
            throw err;
        }
    }

    static async updateAttendance(membershipId, attendanceData, token) {
        try {
            const response = await axios.put(
                `${ManagerService.BASE_URL}/manager/memberships/${membershipId}/attendance`,
                attendanceData,
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
            return response.data;
        } catch (err) {
            throw err;
        }
    }
    


    static async updatePackage(packageId, packageData, token){
        try{

            const response = await axios.put(`${ManagerService.BASE_URL}/manager/packages/${packageId}`, packageData,
            {
                headers: {Authorization: `Bearer ${token}`}
            });
            return response.data;
            
        }catch(err){
            throw err;
        }
    }

    
    static isAuthenticated(){
        const token = localStorage.getItem('token');
        return !!token;
    }

    
}

export default ManagerService;