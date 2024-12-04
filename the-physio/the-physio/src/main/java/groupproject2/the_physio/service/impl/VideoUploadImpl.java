package groupproject2.the_physio.service.impl;



        import groupproject2.the_physio.dto.VideoUploadDto;
        import groupproject2.the_physio.entity.VideoUpload;
        import groupproject2.the_physio.repository.VideoUploadRepo;
        import groupproject2.the_physio.service.VideoUplaodService;
        import org.springframework.stereotype.Service;

        import java.util.Date;
        import java.util.List;
        import java.util.Optional;
        import java.util.stream.Collectors;

@Service
public class VideoUploadImpl implements VideoUplaodService {

    private final VideoUploadRepo videoUploadRepo;

    public VideoUploadImpl(VideoUploadRepo videoUploadRepo) {
        this.videoUploadRepo = videoUploadRepo;
    }

    @Override
    public VideoUploadDto.VideoUploadResponse uploadVideo(VideoUploadDto.VideoUploadRequest request) {
        VideoUpload video = new VideoUpload();
        video.setTitle(request.getTitle());
        video.setDescription(request.getDescription());
        video.setFilePath(request.getFilePath());
        video.setUploadDate(new Date());

        VideoUpload savedVideo = videoUploadRepo.save(video);
        return toResponse(savedVideo);
    }

    @Override
    public List<VideoUploadDto.VideoUploadResponse> getAllVideos() {
        return videoUploadRepo.findAll().stream()
                .map(this::toResponse)
                .collect(Collectors.toList());
    }

    @Override
    public VideoUploadDto.VideoUploadResponse getVideoById(Long id) {
        VideoUpload video = videoUploadRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Video with ID " + id + " not found."));
        return toResponse(video);
    }

    @Override
    public void deleteVideo(Long id) {
        videoUploadRepo.deleteById(id);
    }

    private VideoUploadDto.VideoUploadResponse toResponse(VideoUpload video) {
        VideoUploadDto.VideoUploadResponse response = new VideoUploadDto.VideoUploadResponse();
        response.setId(video.getId());
        response.setTitle(video.getTitle());
        response.setDescription(video.getDescription());
        response.setFilePath(video.getFilePath());
        response.setUploadDate(video.getUploadDate());
        return response;
    }
}
