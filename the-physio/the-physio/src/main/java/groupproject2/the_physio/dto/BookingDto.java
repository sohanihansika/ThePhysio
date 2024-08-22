package groupproject2.the_physio.dto;



import groupproject2.the_physio.entity.Booking;

import java.io.Serializable;
import java.util.Date;

public class BookingDto implements Serializable {

    // Request DTO
    public static class BookingRequest {
        private Long physioId;
        private Long userId;
        private Date date;
        private String timeslot;
        private String paymentStatus;

        // Getters and Setters
        public Long getPhysioId() {
            return physioId;
        }

        public void setPhysioId(Long physioId) {
            this.physioId = physioId;
        }

        public Long getUserId() {
            return userId;
        }

        public void setUserId(Long userId) {
            this.userId = userId;
        }

        public Date getDate() {
            return date;
        }

        public void setDate(Date date) {
            this.date = date;
        }

        public String getTimeslot() {
            return timeslot;
        }

        public void setTimeslot(String timeslot) {
            this.timeslot = timeslot;
        }

        public String getPaymentStatus() {
            return paymentStatus;
        }

        public void setPaymentStatus(String paymentStatus) {
            this.paymentStatus = paymentStatus;
        }
    }

    // Response DTO
    public static class BookingResponse {
        private Long id;
        private Long physioId;
        private Long userId;
        private Date date;
        private String timeslot;
        private String paymentStatus;

        // Getters and Setters
        public Long getId() {
            return id;
        }

        public void setId(Long id) {
            this.id = id;
        }

        public Long getPhysioId() {
            return physioId;
        }

        public void setPhysioId(Long physioId) {
            this.physioId = physioId;
        }

        public Long getUserId() {
            return userId;
        }

        public void setUserId(Long userId) {
            this.userId = userId;
        }

        public Date getDate() {
            return date;
        }

        public void setDate(Date date) {
            this.date = date;
        }

        public String getTimeslot() {
            return timeslot;
        }

        public void setTimeslot(String timeslot) {
            this.timeslot = timeslot;
        }

        public String getPaymentStatus() {
            return paymentStatus;
        }

        public void setPaymentStatus(String paymentStatus) {
            this.paymentStatus = paymentStatus;
        }
    }

    // Mapper Interface
    public interface BookingMapper {
        BookingMapper INSTANCE = org.mapstruct.factory.Mappers.getMapper(BookingMapper.class);

        Booking fromRequestToEntity(BookingRequest bookingRequest);
        BookingResponse fromEntityToResponse(Booking bookingEntity);
    }
}
