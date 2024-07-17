package groupproject2.the_physio.service.impl;

import groupproject2.the_physio.dto.VideoDto;
import groupproject2.the_physio.entity.Video;
import groupproject2.the_physio.exception.ResourceNotFoundException;
import groupproject2.the_physio.repository.VideoRepository;
import groupproject2.the_physio.service.VideoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Date;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class VideoServiceImpl implements VideoService {

    @Autowired
    private VideoRepository videoRepository;

    @Override
    public VideoDto uploadVideo(String path, MultipartFile file) throws IOException {
        String fileName = file.getOriginalFilename();
        String randomId = UUID.randomUUID().toString();
        String finalName = randomId.concat(fileName.substring(fileName.lastIndexOf(".")));
        String filePath = path + finalName;

        File directory = new File(path);
        if (!directory.exists()) {
            directory.mkdirs();
        }

        Files.copy(file.getInputStream(), Paths.get(filePath));

        VideoDto videoDto = new VideoDto();
        videoDto.setVideoName(finalName);

        return videoDto;
    }

    @Override
    public InputStream getVideoFile(String path, String fileName, int id) throws FileNotFoundException {
        String fullPath = path + fileName;
        return new FileInputStream(fullPath);
    }

    @Override
    public VideoDto saveVideo(VideoDto videoDto) {
        Video video = new Video();
        video.setTitle(videoDto.getTitle());
        video.setDescription(videoDto.getDescription());
        video.setTags(videoDto.getTags());
        video.setVideoName(videoDto.getVideoName());
        video.setAddedDate(new Date());

        video = videoRepository.save(video);

        videoDto.setId(video.getId());
        return videoDto;
    }

    @Override
    public VideoDto getVideoById(Integer id) {
        Video video = videoRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Video not found with id: " + id));

        VideoDto videoDto = new VideoDto();
        videoDto.setId(video.getId());
        videoDto.setTitle(video.getTitle());
        videoDto.setDescription(video.getDescription());
        videoDto.setTags(video.getTags());
        videoDto.setVideoName(video.getVideoName());

        return videoDto;
    }

    @Override
    public List<VideoDto> getAllVideos() {
        List<Video> videos = videoRepository.findAll();

        return videos.stream()
                .map(video -> {
                    VideoDto videoDto = new VideoDto();
                    videoDto.setId(video.getId());
                    videoDto.setTitle(video.getTitle());
                    videoDto.setDescription(video.getDescription());
                    videoDto.setTags(video.getTags());
                    videoDto.setVideoName(video.getVideoName());
                    return videoDto;
                })
                .collect(Collectors.toList());
    }

    @Override
    public void deleteVideo(Integer id) {
        Video video = videoRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Video not found with id: " + id));

        videoRepository.delete(video);
    }

    @Override
    public VideoDto updateVideo(int id, VideoDto updateVideo) {
        Video video = videoRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Video not found with id: " + id));

        video.setTitle(updateVideo.getTitle());
        video.setDescription(updateVideo.getDescription());
        video.setTags(updateVideo.getTags());
        video.setVideoName(updateVideo.getVideoName());
        video.setAddedDate(new Date());

        video = videoRepository.save(video);

        updateVideo.setId(video.getId());
        return updateVideo;
    }
}
