package groupproject2.the_physio.dto;

import groupproject2.the_physio.entity.Membership;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.io.Serializable;
import java.util.Date;

public class MembershipDto implements Serializable {

    // Request DTO
    public static class MembershipRequest {

        private Long userId;
        private int type;
        private int daysPerWeek;
        private String timeSlots;
        private int price;

        // Getters and setters
        public Long getUserId() {
            return userId;
        }

        public void setUserId(Long userId) {
            this.userId = userId;
        }

        public int getType() {
            return type;
        }

        public void setType(int type) {
            this.type = type;
        }

        public int getDaysPerWeek() {
            return daysPerWeek;
        }

        public void setDaysPerWeek(int daysPerWeek) {
            this.daysPerWeek = daysPerWeek;
        }

        public String getTimeSlots() {
            return timeSlots;
        }

        public void setTimeSlots(String timeSlots) {
            this.timeSlots = timeSlots;
        }

        public int getPrice() {
            return price;
        }

        public void setPrice(int price) {
            this.price = price;
        }
    }

    // Response DTO
    public static class MembershipResponse {

        private Long membershipId;
        private Long userId;
        private int type;
        private int daysPerWeek;
        private String timeSlots;
        private int price;
        private Date startedDate;
        private Date endDate;
        private String attendance; // Added attendance field

        // Getters and setters
        public Long getMembershipId() {
            return membershipId;
        }

        public void setMembershipId(Long membershipId) {
            this.membershipId = membershipId;
        }

        public Long getUserId() {
            return userId;
        }

        public void setUserId(Long userId) {
            this.userId = userId;
        }

        public int getType() {
            return type;
        }

        public void setType(int type) {
            this.type = type;
        }

        public int getDaysPerWeek() {
            return daysPerWeek;
        }

        public void setDaysPerWeek(int daysPerWeek) {
            this.daysPerWeek = daysPerWeek;
        }

        public String getTimeSlots() {
            return timeSlots;
        }

        public void setTimeSlots(String timeSlots) {
            this.timeSlots = timeSlots;
        }

        public int getPrice() {
            return price;
        }

        public void setPrice(int price) {
            this.price = price;
        }

        public Date getStartedDate() {
            return startedDate;
        }

        public void setStartedDate(Date startedDate) {
            this.startedDate = startedDate;
        }

        public Date getEndDate() {
            return endDate;
        }

        public void setEndDate(Date endDate) {
            this.endDate = endDate;
        }

        public String getAttendance() {
            return attendance;
        }

        public void setAttendance(String attendance) {
            this.attendance = attendance;
        }
    }

    // Mapper interface
    @Mapper
    public interface MembershipMapper {
        MembershipMapper INSTANCE = Mappers.getMapper(MembershipMapper.class);

        Membership fromRequestToEntity(MembershipRequest membershipRequest);

        MembershipResponse fromEntityToResponse(Membership membershipEntity);
    }
}
