package groupproject2.the_physio.controller;

import groupproject2.the_physio.dto.VideoDto;
import groupproject2.the_physio.service.VideoService;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.util.StreamUtils;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

@RestController
@RequestMapping("/api/videos")
@CrossOrigin(origins = "http://localhost:3000")
public class VideoController {

    @Autowired
    private VideoService videoService;

    @PostMapping
    public ResponseEntity<VideoDto> saveVideo(@RequestBody VideoDto videoDto) {
        VideoDto savedVideo = videoService.saveVideo(videoDto);
        return ResponseEntity.ok(savedVideo);
    }

    @GetMapping("/{id}")
    public ResponseEntity<VideoDto> getVideoById(@PathVariable("id") int id) {
        VideoDto videoDto = videoService.getVideoById(id);
        return ResponseEntity.ok(videoDto);
    }

    @GetMapping("/all")
    public ResponseEntity<List<VideoDto>> getAllVideos() {
        List<VideoDto> videos = videoService.getAllVideos();
        return ResponseEntity.ok(videos);
    }

    @PostMapping("/upload/{id}")
    public ResponseEntity<VideoDto> uploadVideo(@RequestParam("video") MultipartFile video, @PathVariable("id") int id)
            throws IOException {
        VideoDto existingVideo = videoService.getVideoById(id);
        VideoDto uploadedVideo = videoService.uploadVideo("videos/", video);
        existingVideo.setVideoName(uploadedVideo.getVideoName());
        VideoDto updatedVideo = videoService.updateVideo(id, existingVideo);
        return ResponseEntity.ok(updatedVideo);
    }

    @GetMapping(value = "/play/{id}", produces = MediaType.ALL_VALUE)
    public void downloadVideo(@PathVariable int id, HttpServletResponse response) throws IOException {
        VideoDto video = videoService.getVideoById(id);
        InputStream resource = videoService.getVideoFile("videos/", video.getVideoName(), id);
        response.setContentType(MediaType.ALL_VALUE);
        StreamUtils.copy(resource, response.getOutputStream());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteVideo(@PathVariable("id") int id) {
        videoService.deleteVideo(id);
        return ResponseEntity.ok("Video deleted successfully!");
    }

    @PutMapping("/{id}")
    public ResponseEntity<VideoDto> updateVideo(@RequestBody VideoDto updateVideo, @PathVariable("id") int id) {
        VideoDto videoDto = videoService.updateVideo(id, updateVideo);
        return ResponseEntity.ok(videoDto);
    }
}
