package groupproject2.the_physio.dto;

        import groupproject2.the_physio.entity.Review;
        import org.mapstruct.Mapper;

        import java.io.Serializable;
        import java.util.Date;

public class ReviewDto implements Serializable {

    // Request DTO
    public static class ReviewRequest {
        private String category; // e.g., Physio, GymCoach, Company
        private Long physioId; // Nullable based on category
        private Long coachId; // Nullable based on category
        private Integer rate; // Rating value
        private String comment;

        // Getters and Setters
        public String getCategory() {
            return category;
        }

        public void setCategory(String category) {
            this.category = category;
        }

        public Long getPhysioId() {
            return physioId;
        }

        public void setPhysioId(Long physioId) {
            this.physioId = physioId;
        }

        public Long getCoachId() {
            return coachId;
        }

        public void setCoachId(Long coachId) {
            this.coachId = coachId;
        }

        public Integer getRate() {
            return rate;
        }

        public void setRate(Integer rate) {
            this.rate = rate;
        }

        public String getComment() {
            return comment;
        }

        public void setComment(String comment) {
            this.comment = comment;
        }
    }

    // Response DTO
    public static class ReviewResponse {
        private Long id;
        private String category; // e.g., Physio, GymCoach, Company
        private Long physioId; // Nullable based on category
        private Long coachId; // Nullable based on category
        private Integer rate;
        private String comment;
        private Date createdDate; // When the review was created

        // Getters and Setters
        public Long getId() {
            return id;
        }

        public void setId(Long id) {
            this.id = id;
        }

        public String getCategory() {
            return category;
        }

        public void setCategory(String category) {
            this.category = category;
        }

        public Long getPhysioId() {
            return physioId;
        }

        public void setPhysioId(Long physioId) {
            this.physioId = physioId;
        }

        public Long getCoachId() {
            return coachId;
        }

        public void setCoachId(Long coachId) {
            this.coachId = coachId;
        }

        public Integer getRate() {
            return rate;
        }

        public void setRate(Integer rate) {
            this.rate = rate;
        }

        public String getComment() {
            return comment;
        }

        public void setComment(String comment) {
            this.comment = comment;
        }

        public Date getCreatedDate() {
            return createdDate;
        }

        public void setCreatedDate(Date createdDate) {
            this.createdDate = createdDate;
        }
    }
@Mapper
    // Mapper Interface
    public interface ReviewMapper {
        ReviewMapper INSTANCE = org.mapstruct.factory.Mappers.getMapper(ReviewMapper.class);

        Review fromRequestToEntity(ReviewRequest reviewRequest);
        ReviewResponse fromEntityToResponse(Review reviewEntity);
    }
}

