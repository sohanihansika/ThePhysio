package groupproject2.the_physio.service;


        import groupproject2.the_physio.dto.VideoUploadDto;

        import java.util.List;

public interface VideoUplaodService {
    VideoUploadDto.VideoUploadResponse uploadVideo(VideoUploadDto.VideoUploadRequest request);
    List<VideoUploadDto.VideoUploadResponse> getAllVideos();
    VideoUploadDto.VideoUploadResponse getVideoById(Long id);
    void deleteVideo(Long id);
}
