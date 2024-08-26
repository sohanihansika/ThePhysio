package groupproject2.the_physio.dto;

import groupproject2.the_physio.entity.Advert;
import java.io.Serializable;
import java.time.LocalDateTime;

public class AdvertDto implements Serializable {

    // Request DTO
    public static class AdvertRequest {
        private Long userId;
        private LocalDateTime addedDate;
        private String description;
        private String title;
        private String videoUrl; // New field

        // Getters and Setters
        public Long getUserId() {
            return userId;
        }

        public void setUserId(Long userId) {
            this.userId = userId;
        }

        public LocalDateTime getAddedDate() {
            return addedDate;
        }

        public void setAddedDate(LocalDateTime addedDate) {
            this.addedDate = addedDate;
        }

        public String getDescription() {
            return description;
        }

        public void setDescription(String description) {
            this.description = description;
        }

        public String getTitle() {
            return title;
        }

        public void setTitle(String title) {
            this.title = title;
        }

        public String getVideoUrl() {
            return videoUrl;
        }

        public void setVideoUrl(String videoUrl) {
            this.videoUrl = videoUrl;
        }
    }

    // Response DTO
    public static class AdvertResponse {
        private Long id;
        private Long userId;
        private LocalDateTime addedDate;
        private String description;
        private String title;
        private String videoUrl; // New field

        // Getters and Setters
        public Long getId() {
            return id;
        }

        public void setId(Long id) {
            this.id = id;
        }

        public Long getUserId() {
            return userId;
        }

        public void setUserId(Long userId) {
            this.userId = userId;
        }

        public LocalDateTime getAddedDate() {
            return addedDate;
        }

        public void setAddedDate(LocalDateTime addedDate) {
            this.addedDate = addedDate;
        }

        public String getDescription() {
            return description;
        }

        public void setDescription(String description) {
            this.description = description;
        }

        public String getTitle() {
            return title;
        }

        public void setTitle(String title) {
            this.title = title;
        }

        public String getVideoUrl() {
            return videoUrl;
        }

        public void setVideoUrl(String videoUrl) {
            this.videoUrl = videoUrl;
        }
    }

    // Mapper Interface
    public interface AdvertMapper {
        AdvertMapper INSTANCE = org.mapstruct.factory.Mappers.getMapper(AdvertMapper.class);

        Advert fromRequestToEntity(AdvertRequest advertRequest);
        AdvertResponse fromEntityToResponse(Advert advertEntity);
    }
}
