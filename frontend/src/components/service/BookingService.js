import axios from 'axios';

class BookingService{
    static BASE_URL = 'http://localhost:8082';


    static async saveBooking(booking,token){
        try{

            const response = await axios.post(`${BookingService.BASE_URL}/booking/with-email`, booking,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
          
        }catch(err){
            throw err;
        }
    }

    

    static async getAllBookings(token){
        try{

            const response = await axios.get(`${BookingService.BASE_URL}/booking`, {
                headers: {Authorization: `Bearer ${token}`}
            });
            return response.data;
            
        }catch(err){
            throw err;
        }
    }

    static async getBookingById(bookingId, token){
        try{

            const response = await axios.get(`${BookingService.BASE_URL}/booking/${bookingId}`, {
                headers: {Authorization: `Bearer ${token}`}
            });
            return response.data;
            
        }catch(err){
            throw err;
        }
    }

    static async BookingUpdate(BookingData, token){
        try{

            const response = await axios.put(`${BookingService.BASE_URL}/booking`, BookingData,
            {
                headers: {Authorization: `Bearer ${token}`}
            });
            return response.data;
            
        }catch(err){
            throw err;
        }
    }

    static async deleteBooking(bookingId, token){
        try{

            const response = await axios.delete(`${BookingService.BASE_URL}/booking/${bookingId}`, {
                headers: {Authorization: `Bearer ${token}`}
            });
            return response.data;
            
        }catch(err){
            throw err;
        }
    }
}

export default BookingService;