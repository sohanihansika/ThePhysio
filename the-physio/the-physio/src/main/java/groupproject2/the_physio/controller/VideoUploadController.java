package groupproject2.the_physio.controller;


        import groupproject2.the_physio.dto.VideoUploadDto;
        import groupproject2.the_physio.service.VideoUplaodService;
        import org.springframework.http.ResponseEntity;
        import org.springframework.util.StringUtils;
        import org.springframework.web.bind.annotation.*;
        import org.springframework.web.multipart.MultipartFile;

        import java.io.IOException;
        import java.util.List;
        import java.nio.file.Files;
        import java.nio.file.Path;
        import java.nio.file.Paths;

@RestController
@RequestMapping("/api/videos")
public class VideoUploadController {

    private final VideoUplaodService videoUploadService;

    private final String uploadDir = "uploads/";

    public VideoUploadController(VideoUplaodService videoUploadService) {
        this.videoUploadService = videoUploadService;
    }

    @PostMapping("/upload")
    public ResponseEntity<VideoUploadDto.VideoUploadResponse> uploadVideo(
            @RequestParam("title") String title,
            @RequestParam("description") String description,
            @RequestParam("file") MultipartFile file) throws IOException {

        if (file.isEmpty()) {
            throw new IllegalArgumentException("File must not be empty.");
        }

        // Save the file to the upload directory
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        Path filePath = Paths.get(uploadDir + fileName);
        Files.createDirectories(filePath.getParent());
        file.transferTo(filePath);

        // Create the video upload request
        VideoUploadDto.VideoUploadRequest request = new VideoUploadDto.VideoUploadRequest();
        request.setTitle(title);
        request.setDescription(description);
        request.setFilePath(filePath.toString());

        // Save video information and return the response
        return ResponseEntity.ok(videoUploadService.uploadVideo(request));
    }

    @GetMapping
    public ResponseEntity<List<VideoUploadDto.VideoUploadResponse>> getAllVideos() {
        return ResponseEntity.ok(videoUploadService.getAllVideos());
    }

    @GetMapping("/{id}")
    public ResponseEntity<VideoUploadDto.VideoUploadResponse> getVideoById(@PathVariable Long id) {
        return ResponseEntity.ok(videoUploadService.getVideoById(id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteVideo(@PathVariable Long id) {
        videoUploadService.deleteVideo(id);
        return ResponseEntity.noContent().build();
    }
}
