package groupproject2.the_physio.service;

import groupproject2.the_physio.dto.VideoDto;
import org.springframework.web.multipart.MultipartFile;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;

public interface VideoService {

    VideoDto uploadVideo(String path, MultipartFile file) throws IOException;

    InputStream getVideoFile(String path, String fileName, int id) throws FileNotFoundException;

    VideoDto saveVideo(VideoDto videoDto);

    VideoDto getVideoById(Integer id);

    List<VideoDto> getAllVideos();

    void deleteVideo(Integer id);

    VideoDto updateVideo(int id, VideoDto updateVideo);
}
