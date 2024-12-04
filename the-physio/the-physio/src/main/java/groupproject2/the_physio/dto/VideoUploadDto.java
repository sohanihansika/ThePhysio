package groupproject2.the_physio.dto;


        import java.util.Date;

public class VideoUploadDto {

    // Request DTO
    public static class VideoUploadRequest {
        private String title;
        private String description;
        private String filePath; // Path to the uploaded video file

        // Getters and Setters
        public String getTitle() {
            return title;
        }

        public void setTitle(String title) {
            this.title = title;
        }

        public String getDescription() {
            return description;
        }

        public void setDescription(String description) {
            this.description = description;
        }

        public String getFilePath() {
            return filePath;
        }

        public void setFilePath(String filePath) {
            this.filePath = filePath;
        }
    }

    // Response DTO
    public static class VideoUploadResponse {
        private Long id;
        private String title;
        private String description;
        private String filePath;
        private Date uploadDate;

        // Getters and Setters
        public Long getId() {
            return id;
        }

        public void setId(Long id) {
            this.id = id;
        }

        public String getTitle() {
            return title;
        }

        public void setTitle(String title) {
            this.title = title;
        }

        public String getDescription() {
            return description;
        }

        public void setDescription(String description) {
            this.description = description;
        }

        public String getFilePath() {
            return filePath;
        }

        public void setFilePath(String filePath) {
            this.filePath = filePath;
        }

        public Date getUploadDate() {
            return uploadDate;
        }

        public void setUploadDate(Date uploadDate) {
            this.uploadDate = uploadDate;
        }
    }
}
