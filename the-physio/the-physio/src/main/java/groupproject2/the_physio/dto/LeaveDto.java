package groupproject2.the_physio.dto;

import groupproject2.the_physio.entity.Leave;

import java.io.Serializable;
import java.util.Date;

public class LeaveDto implements Serializable {

    // Request DTO
    public static class LeaveRequest {
        private Long physioId;
        private Date date;
        private String reason;

        // Getters and Setters
        public Long getPhysioId() {
            return physioId;
        }

        public void setPhysioId(Long physioId) {
            this.physioId = physioId;
        }

        public Date getDate() {
            return date;
        }

        public void setDate(Date date) {
            this.date = date;
        }

        public String getReason() {
            return reason;
        }

        public void setReason(String reason) {
            this.reason = reason;
        }
    }

    // Response DTO
    public static class LeaveResponse {
        private Long id;
        private Long physioId;
        private Date date;
        private String reason;
        private int status; // Added status field

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

        public Date getDate() {
            return date;
        }

        public void setDate(Date date) {
            this.date = date;
        }

        public String getReason() {
            return reason;
        }

        public void setReason(String reason) {
            this.reason = reason;
        }

        public int getStatus() {
            return status;
        }

        public void setStatus(int status) {
            this.status = status;
        }
    }

    // Mapper Interface
    public interface LeaveMapper {
        LeaveDto.LeaveMapper INSTANCE = org.mapstruct.factory.Mappers.getMapper(LeaveDto.LeaveMapper.class);

        Leave fromRequestToEntity(LeaveDto.LeaveRequest leaveRequest);
        LeaveDto.LeaveResponse fromEntityToResponse(Leave leaveEntity);
    }
}
